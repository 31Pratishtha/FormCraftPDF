import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface DateFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  ({ 
    label, 
    error, 
    className,
    containerClassName,
    labelClassName,
    inputClassName,
    errorClassName,
    ...props 
  }, ref) => {
    return (
      <div className={twMerge("w-full", containerClassName)}>
        {label && (
          <label 
            className={twMerge(
              "block text-sm font-medium text-gray-700 mb-1",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <input
          type="date"
          ref={ref}
          className={twMerge(
            "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
            error && "border-red-500",
            inputClassName,
            className
          )}
          {...props}
        />
        {error && (
          <p className={twMerge("mt-1 text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

DateField.displayName = 'DateField'; 