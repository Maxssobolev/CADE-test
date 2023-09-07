import { FC, useState } from 'react';
import classes from './SetupCone.module.scss';
import { IConeParams } from 'shared/types/cone3d.interface';
import { Input } from 'shared/ui/Input/Input';
import { Formik, Form, Field, FieldProps } from 'formik';
import { $host } from 'shared/config/api/host';
import { TriangulationResponse } from 'shared/types/triangulation.interface';

interface SetupConeProps {
    className?: string;
    onConeParamsChange: (coneParams: TriangulationResponse) => void;

}

const initialValues: IConeParams = {
  height: 3,
  radius: 3,
  segments: 5
}

export const SetupCone: FC<SetupConeProps> = ({className, onConeParamsChange}) => {
  const [form, setForm] = useState({isLoading: false, error: null});
  return (
    <div className={classes.SetupCone}>
      <h1>
        Enter cone parameters
      </h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => {
          setForm({isLoading: true, error: null});
          $host.post<TriangulationResponse>('/api/three/calculate', values).then(r => {
            onConeParamsChange(r.data)
            setForm({isLoading: false, error: null});
          }).catch(e => setForm({isLoading: false, error: e.message}))
          
        }}
      >
        {() => 
          <Form>
            <div className={classes.formFields}>
              <label>
                <span>Segments</span>
                <Field name="segments">
                  {({ field }: FieldProps) => (
                    <Input {...field} />
                  )}
                </Field>
              </label>
              <label>
                <span>Radius</span>
                <Field name="radius">
                  {({ field }: FieldProps) => (
                    <Input {...field} />
                  )}
                </Field>
              </label>
              <label>
                <span>Height</span>
                <Field name="height">
                  {({ field }: FieldProps) => (
                    <Input {...field} />
                  )}
                </Field>
              </label>
            </div>

            <button type='submit' className={classes.submitBtn}>Recalculate</button>

            {form.error ? <div className={classes.erorr}>{form.error}</div> : null }
          </Form>
        }
        
      </Formik>
    </div>
  );
}