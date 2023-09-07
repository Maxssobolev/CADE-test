import { FC, useState } from 'react';
import classes from './ConeViewer.module.scss';
import { Cone3d } from 'entities/Cone3d';
import { SetupCone } from 'features/SetupCone';
import { IConeParams } from 'shared/types/cone3d.interface';
import { TriangulationResponse } from 'shared/types/triangulation.interface';
import { initialConeTriangulation } from './initialConeTriangulation';

interface ConeViewerProps {
    className?: string;
}

export const ConeViewer: FC<ConeViewerProps> = ({className}) => {
  const [coneParameters, setConeParameters] = useState<TriangulationResponse>(initialConeTriangulation);
  return (
    <div className={classes.ConeViewer}>
      <Cone3d coneParameters={coneParameters}/> 
      <SetupCone onConeParamsChange={(coneParams) => {
        setConeParameters(coneParams)
      }}/>
    </div>
  );
}