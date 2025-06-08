import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  options: SelectOption[];
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  errorClassName?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ 
    label, 
    error, 
    options,
    className,
    containerClassName,
    labelClassName,
    selectClassName,
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
        <select
          ref={ref}
          className={twMerge(
            "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
            error && "border-red-500",
            selectClassName,
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className={twMerge("mt-1 text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField'; 