import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface RadioFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  radioClassName?: string;
  errorClassName?: string;
  id?: string;
}

export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  ({ 
    label, 
    error, 
    className,
    containerClassName,
    labelClassName,
    radioClassName,
    errorClassName,
    id,
    ...props 
  }, ref) => {

    const inputId = id || (props.name && props.value ? `${props.name}-${props.value}` : undefined);

    return (
      <div className={twMerge("flex items-center", containerClassName)}>
        <input
          type="radio"
          ref={ref}
          id={inputId}
          className={twMerge(
            "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
            error && "border-red-500",
            radioClassName,
            className
          )}
          {...props}
        />
        {label && (
          <label 
            htmlFor={inputId}
            className={twMerge(
              "ml-2 block text-sm text-gray-900",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p className={twMerge("mt-1 text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

RadioField.displayName = 'RadioField'; 