import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CheckboxFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  errorClassName?: string;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ 
    label, 
    error, 
    className,
    containerClassName,
    labelClassName,
    checkboxClassName,
    errorClassName,
    ...props 
  }, ref) => {
    return (
      <div className={twMerge("flex items-center", containerClassName)}>
        <input
          type="checkbox"
          ref={ref}
          className={twMerge(
            "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
            error && "border-red-500",
            checkboxClassName,
            className
          )}
          {...props}
        />
        {label && (
          <label 
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

CheckboxField.displayName = 'CheckboxField'; 