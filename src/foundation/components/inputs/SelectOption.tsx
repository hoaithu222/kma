import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectOptionProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  className?: string;
}

const SelectOption = React.forwardRef<HTMLSelectElement, SelectOptionProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs md:text-sm lg:text-base font-medium text-foreground mb-1 md:mb-1.5 lg:mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              "w-full appearance-none px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5 text-xs md:text-sm lg:text-base bg-transparent border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-6 md:pr-8 lg:pr-10",
              error ? "border-destructive" : "",
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
          <ChevronDown className="absolute right-1.5 md:right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-muted-foreground pointer-events-none" />
        </div>
        {error && (
          <p className="mt-1 text-xs md:text-sm lg:text-base text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectOption.displayName = "SelectOption";

export default SelectOption;
