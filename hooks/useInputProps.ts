import { useRef, RefObject } from 'react';
import { FieldValues, FieldErrors, UseFormRegister, Control } from 'react-hook-form';

interface UseInputProps<T> {
  control: Control<T>;
  errors: FieldValues;
}

export const useInputProps = <T extends FieldValues>(
  formObj: UseInputProps<T>,
  name: string,
): {
  forwardRef: RefObject<HTMLInputElement>;
  control: UseFormRegister<T>;
  name: string;
  error: string | undefined;
} => {
  const { control, errors } = formObj;
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    forwardRef: inputRef,
    control: control.register,
    name,
    error: errors[name]?.message, // Assuming you want to display the error message
  };
};
