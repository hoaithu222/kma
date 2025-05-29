import React, { useState } from "react";
import { Eye, EyeOff, Check, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type FloatingInputVariant =
  | "default"
  | "outlined"
  | "filled"
  | "underlined";
export type FloatingInputSize = "small" | "medium" | "large";
export type FloatingInputStatus = "default" | "success" | "error" | "warning";

export interface FloatingInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: FloatingInputVariant;
  size?: FloatingInputSize;
  status?: FloatingInputStatus;
  label?: string;
  helperText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  showPasswordToggle?: boolean;
  className?: string;
  error?: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    {
      variant = "outlined",
      size = "medium",
      status = "default",
      label,
      helperText,
      iconLeft,
      iconRight,
      fullWidth = false,
      showPasswordToggle = false,
      className = "",
      type = "text",
      disabled = false,
      value,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const inputType = showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    // Check if label should be floating (focused or has value)
    const isFloating =
      isFocused || hasValue || (value && value.toString().length > 0);

    const baseClasses = "transition-all duration-200 focus:outline-none";

    const variantClasses = {
      default:
        "border border-gray-300 bg-background-elevated rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-light",
      outlined:
        "border border-gray-300 bg-background-elevated rounded-xl focus:border-secondary focus:ring-2 focus:ring-primary-light",
      filled:
        "border-0 bg-background-muted rounded-lg focus:bg-background-elevated focus:ring-2 focus:ring-primary-light",
      underlined:
        "border-0 border-b-2 border-gray-300 bg-transparent rounded-none focus:border-primary",
    };

    const sizeClasses = {
      small:
        "h-8 md:h-9 lg:h-10 px-2 md:px-3 lg:px-4 text-xs md:text-sm lg:text-base",
      medium:
        "h-10 md:h-11 lg:h-12 px-3 md:px-4 lg:px-5 text-sm md:text-base lg:text-lg",
      large:
        "h-12 md:h-13 lg:h-14 px-4 md:px-5 lg:px-6 text-base md:text-lg lg:text-xl",
    };

    const statusClasses = {
      default: "border-secondary",
      success: "border-success focus:border-success focus:ring-success",
      error: "border-error focus:border-error focus:ring-error",
      warning: "border-warning focus:border-warning focus:ring-warning",
    };

    // Label positioning based on size and floating state
    const labelClasses = {
      small: {
        floating:
          "-top-2 md:-top-2.5 lg:-top-3 text-xs md:text-sm lg:text-base",
        default: "top-2 md:top-2.5 lg:top-3 text-xs md:text-sm lg:text-base",
      },
      medium: {
        floating:
          "-top-2.5 md:-top-3 lg:-top-3.5 text-xs md:text-sm lg:text-base",
        default: "top-2.5 md:top-3 lg:top-3.5 text-sm md:text-base lg:text-lg",
      },
      large: {
        floating:
          "-top-3 md:-top-3.5 lg:-top-4 text-xs md:text-sm lg:text-base",
        default: "top-3 md:top-3.5 lg:top-4 text-base md:text-lg lg:text-xl",
      },
    };

    // Get status icon
    const getStatusIcon = () => {
      switch (status) {
        case "success":
          return (
            <Check className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-success" />
          );
        case "error":
          return (
            <X className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-error" />
          );
        case "warning":
          return (
            <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-warning" />
          );
        default:
          return null;
      }
    };

    const statusIcon = getStatusIcon();

    const inputClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      status !== "default" ? statusClasses[status] : "",
      fullWidth ? "w-full" : "",
      disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : "",
      iconLeft || iconRight || showPasswordToggle || statusIcon ? "pr-10" : "",
      iconLeft ? "pl-10" : "",
      // Override browser autofill styles
      "autofill:bg-transparent autofill:text-current",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const helperTextColor = {
      default: "text-gray-500",
      success: "text-green-600",
      error: "text-red-600",
      warning: "text-yellow-600",
    };

    const labelColor = {
      default: isFocused ? "text-text-muted" : "text-text-secondary",
      success: "text-success",
      error: "text-error",
      warning: "text-warning",
    };

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <div className="relative">
          {iconLeft && (
            <div className="absolute transform -translate-y-1/2 text-text-muted left-3 top-1/2">
              {iconLeft}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={cn(
              inputClasses,
              error ? "border-destructive" : "",
              "peer w-full px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 text-sm md:text-base bg-transparent border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            )}
            disabled={disabled}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              setHasValue(e.target.value.length > 0);
              if (props.onChange) {
                props.onChange(e);
              }
            }}
            onAnimationStart={(e) => {
              // Detect browser autofill
              if (e.animationName === "onAutoFillStart") {
                setHasValue(true);
              }
            }}
            style={{
              // Override browser autofill styles
              WebkitBoxShadow: "0 0 0 1000px transparent inset",
              WebkitTextFillColor: "inherit",
            }}
            {...props}
          />
          {label && (
            <label
              className={cn(
                "absolute left-3 md:left-4 lg:left-5 top-2 md:top-2.5 lg:top-3 text-sm md:text-base text-muted-foreground transition-all duration-200 transform -translate-y-4 scale-75 origin-[0] bg-background px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                error ? "text-destructive" : "",
                isFloating
                  ? labelClasses[size].floating
                  : labelClasses[size].default,
                status !== "default" ? labelColor[status] : labelColor.default,
                isFloating && variant === "outlined"
                  ? `bg-transparent px-1 rounded-lg  -ml-1  ${iconLeft ? "-ml-2" : "-ml-1"}`
                  : isFloating && variant === "filled"
                    ? "bg-transparent px-1 -ml-1"
                    : ""
              )}
            >
              {label}
            </label>
          )}
          <div className="absolute flex items-center space-x-1 transform -translate-y-1/2 right-3 top-1/2">
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-text-muted hover:text-text-primary"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}
            {statusIcon}
            {iconRight && !statusIcon && (
              <div className="text-text-muted">{iconRight}</div>
            )}
          </div>
        </div>
        {helperText && (
          <p className={`mt-1 text-xs ${helperTextColor[status]} `}>
            {helperText}
          </p>
        )}
        {error && (
          <p className="mt-1 text-xs md:text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
export default FloatingInput;
