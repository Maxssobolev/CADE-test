import { FC } from 'react';
import classes from './MainPage.module.scss';
import { Scene3d } from 'entities/Scene3d';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({className}) => {

  return (
    <div className={classes.MainPage}>
      <Scene3d coneParameters={{
        height: 3,
        radius: 2,
        segments: 4
      }}/>
    </div>
  );
}