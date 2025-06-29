import React from "react";
import { cn } from "@/lib/utils";

// ============= INPUT COMPONENT =============
export type InputVariant = "default" | "outlined" | "filled" | "underlined";
export type InputSize = "small" | "medium" | "large";
export type InputStatus = "default" | "success" | "error" | "warning";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: InputVariant;
  size?: InputSize;
  status?: InputStatus;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  className?: string;
  error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "outlined",
      size = "medium",
      status = "default",
      label,
      helperText,
      fullWidth = false,
      resize = "vertical",
      className = "",
      disabled = false,
      rows = 4,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label className="block mb-1 text-sm font-medium md:text-base text-text-primary md:mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5 text-xs md:text-sm lg:text-base bg-input-bg border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[60px] md:min-h-[80px] lg:min-h-[100px]",
            error ? "border-border-error" : "",
            className
          )}
          disabled={disabled}
          rows={rows}
          {...props}
        />
        {helperText && (
          <p className="mt-1 text-xs md:text-sm lg:text-base text-error">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
