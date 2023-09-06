import { MainPage } from 'pages/MainPage';
import './styles/index.scss'
import { FC } from 'react';

export const App: FC = () => {

  return (
    <div className='root'>
      <MainPage />
    </div>
  );
}