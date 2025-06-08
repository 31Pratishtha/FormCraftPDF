import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ColorFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  showPreview?: boolean;
}

export const ColorField = forwardRef<HTMLInputElement, ColorFieldProps>(
  ({ 
    label, 
    error,
    showPreview = true,
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
            type="color"
            ref={ref}
            className={twMerge(
              "h-10 w-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer",
              error && "border-red-500",
              inputClassName,
              className
            )}
            {...props}
          />
          {showPreview && (
            <div 
              className="h-10 w-10 rounded-md border border-gray-300"
              style={{ backgroundColor: props.value as string }}
            />
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

ColorField.displayName = 'ColorField'; 