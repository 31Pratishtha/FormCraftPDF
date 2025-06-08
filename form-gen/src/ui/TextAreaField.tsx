import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  errorClassName?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ 
    label, 
    error, 
    className,
    containerClassName,
    labelClassName,
    textareaClassName,
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
        <textarea
          ref={ref}
          className={twMerge(
            "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
            error && "border-red-500",
            textareaClassName,
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

TextAreaField.displayName = 'TextAreaField'; 