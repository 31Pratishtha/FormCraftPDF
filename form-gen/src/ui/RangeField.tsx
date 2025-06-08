import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface RangeFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  valueDisplay?: boolean;
}

export const RangeField = forwardRef<HTMLInputElement, RangeFieldProps>(
  ({ 
    label, 
    error,
    min = 0,
    max = 100,
    step = 1,
    valueDisplay = true,
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
        <div className="flex items-center gap-2">
          <input
            type="range"
            ref={ref}
            min={min}
            max={max}
            step={step}
            className={twMerge(
              "w-full",
              inputClassName,
              className
            )}
            {...props}
          />
          {valueDisplay && (
            <span className="text-sm text-gray-600 min-w-[2rem] text-right">
              {props.value}
            </span>
          )}
        </div>
        {error && (
          <p className={twMerge("mt-1 text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

RangeField.displayName = 'RangeField'; 