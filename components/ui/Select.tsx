import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: Array<{ value: string; label: string }>
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-bubble-dark mb-2"
          >
            {label}
            {props.required && <span className="text-primary ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              'flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-bubble-dark',
              'appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'transition-all duration-200',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-bubble-gray" />
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-bubble-gray">{helperText}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }
