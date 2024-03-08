import { forwardRef, InputHTMLAttributes } from "react";
import {InputStyle} from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
          <InputStyle ref={ref} {...props} />
    )
    });