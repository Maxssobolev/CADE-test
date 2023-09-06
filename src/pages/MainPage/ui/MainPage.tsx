import { FC } from 'react';
import classes from './MainPage.module.scss';
import { Scene3d } from 'entities/Scene3d';
import { Cone3d } from 'entities/Cone3d';
import { SceneProvider } from 'app/provider/SceneProvider';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({className}) => {

  return (
    <div className={classes.MainPage}>
      <SceneProvider>
        <Scene3d cameraParameters={{ fov: 75, near: 0.1, far: 1000 }}>
          <Cone3d coneParameters={{
            color: 0xffffff,
            height: 2.0,      // Высота конуса
            radius: 1.0,      // Радиус основания конуса
            segments: 32      // Количество сегментов на круге (для создания более гладкой геометрии)
          }}/>
        </Scene3d>
      </SceneProvider>
    </div>
  );
}