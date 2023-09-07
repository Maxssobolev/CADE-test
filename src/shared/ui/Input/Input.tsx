import { FC, InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const Input: FC<InputProps> = ({className, ...other}) => {

  return (
    <input {...other} type="text" className={classes.Input} placeholder='Enter value'/> 
  );
}