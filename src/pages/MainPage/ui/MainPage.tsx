import { FC } from 'react';
import classes from './MainPage.module.scss';
import { Cone3d } from 'entities/Cone3d';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({className}) => {

  return (
    <div className={classes.MainPage}>
      <Cone3d coneParameters={{
        height: 3,
        radius: 2,
        segments: 4
      }}/>
    </div>
  );
}