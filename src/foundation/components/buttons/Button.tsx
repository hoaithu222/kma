import React from "react";
import { Loader2, Check, X, AlertTriangle } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outlined"
  | "text"
  | "outlinedSecondary"
  | "textSecondary"
  | "success"
  | "danger"
  | "warning"
  | "gradientPrimary"
  | "gradientSubtle"
  | "gradientCool"
  | "gradientDark"
  | "gradientInverse"
  | "gradientFire";

export type ButtonSize = "small" | "medium" | "large" | "xl";

export type ButtonShape = "default" | "round" | "square";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  height?: string | number;
  loading?: boolean;
  elevated?: boolean;
}

const Button = ({
  variant = "primary",
  size = "medium",
  shape = "default",
  disabled = false,
  loading = false,
  className = "",
  children,
  fullWidth = false,
  iconLeft,
  iconRight,
  height,
  elevated = false,
  ...props
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses =
    "flex items-center justify-center focus:outline-none focus:ring-0 transition-colors box-border text-nowrap focus:ring-transparent";

  // Shape classes
  const shapeClasses = {
    default: "rounded-lg",
    round: "rounded-full",
    square: "rounded-none",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-primary text-white border-transparent hover:bg-primary-6 disabled:bg-primary-2 disabled:text-gray-400",
    secondary:
      "bg-secondary text-text-primary border-transparent hover:bg-secondary-6 disabled:bg-secondary-1 disabled:text-gray-400",
    outlined:
      "bg-transparent border border-primary-1 text-text-on-primary hover:border-border-subtle disabled:bg-gray-200 disabled:text-gray-400",
    text: "bg-transparent text-blue-600 hover:underline disabled:bg-gray-200 disabled:text-gray-400",
    textSecondary: "bg-transparent text-gray-900 hover:opacity-90",
    outlinedSecondary:
      "bg-transparent border border-border text-text-primary hover:border-info focus:border-info hover:opacity-90",
    success:
      "bg-green-500 text-white border-transparent hover:bg-green-600 disabled:bg-green-200 disabled:text-gray-400",
    danger:
      "bg-red-500 text-white border-transparent hover:bg-red-600 disabled:bg-red-200 disabled:text-gray-400",
    warning:
      "bg-yellow-500 text-white border-transparent hover:bg-yellow-600 disabled:bg-yellow-200 disabled:text-gray-400",
    gradientPrimary:
      "bg-gradient-to-r from-primary-3 via-primary-4 to-primary-6 text-white border-transparent hover:from-primary-6 hover:to-primary-4 disabled:bg-primary-2 disabled:text-gray-400",
    gradientSubtle:
      "bg-gradient-to-r from-secondary via-secondary-1 to-secondary-5 text-text-primary border-transparent hover:from-secondary-5 hover:to-secondary-1 disabled:bg-secondary-1 disabled:text-gray-400",
    gradientCool:
      "bg-gradient-to-r from-secondary via-primary-4 to-primary-6 text-white border-transparent hover:from-primary-6 hover:to-primary-4 disabled:bg-primary-2 disabled:text-gray-400",
    gradientDark:
      "bg-gradient-to-r from-primary-4 to-primary-6 text-white border-transparent hover:from-primary-6 hover:to-primary-4 disabled:bg-primary-2 disabled:text-gray-400",
    gradientInverse:
      "bg-gradient-to-r from-primary-4 to-primary-6 text-white border-transparent hover:from-primary-6 hover:to-primary-4 disabled:bg-primary-2 disabled:text-gray-400",
    gradientFire:
      "bg-gradient-to-r from-primary-4 to-primary-6 text-white border-transparent hover:from-primary-6 hover:to-primary-4 disabled:bg-primary-2 disabled:text-gray-400",
  };

  // Size-specific styling
  const sizeClasses = {
    small:
      shape === "round" || shape === "square"
        ? "h-8 w-8 text-sm p-0"
        : "h-8 px-3 text-sm",
    medium:
      shape === "round" || shape === "square"
        ? "h-10 w-10 text-base p-0"
        : "h-10 min-w-[100px] px-4 text-base",
    large:
      shape === "round" || shape === "square"
        ? "h-12 w-12 text-lg p-0"
        : "h-12 px-4 py-3 text-lg",
    xl:
      shape === "round" || shape === "square"
        ? "h-16 w-16 text-xl p-0"
        : "h-16 px-6 py-4 text-xl",
  };

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    shapeClasses[shape],
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    elevated ? "shadow-md hover:shadow-lg" : "",
    disabled || loading ? "cursor-not-allowed opacity-50" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Custom style for height override
  const buttonStyle = height
    ? {
        height: typeof height === "number" ? `${height}px` : height,
        width:
          (shape === "round" || shape === "square") &&
          typeof height === "number"
            ? `${height}px`
            : shape === "round" || shape === "square"
              ? height
              : undefined,
      }
    : {};

  // Get appropriate icon for variant
  const getVariantIcon = () => {
    switch (variant) {
      case "success":
        return <Check className="w-4 h-4" />;
      case "danger":
        return <X className="w-4 h-4" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const variantIcon = getVariantIcon();

  return (
    <button
      type="button"
      className={buttonClasses}
      style={buttonStyle}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {children && <span className="ml-2">{children}</span>}
        </>
      ) : (
        <>
          {iconLeft && (
            <span className={children ? "mr-2" : ""}>{iconLeft}</span>
          )}
          {variantIcon && !iconLeft && !children && !iconRight
            ? variantIcon
            : null}
          {children}
          {iconRight && (
            <span className={children ? "ml-2" : ""}>{iconRight}</span>
          )}
        </>
      )}
    </button>
  );
};
export default Button;
