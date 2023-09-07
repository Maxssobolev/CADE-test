import { FC } from 'react';
import classes from './MainPage.module.scss';
import { ConeViewer } from 'widgets/ConeViewer';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({className}) => {

  return (
    <div className={classes.MainPage}>
      <ConeViewer />
    </div>
  );
}