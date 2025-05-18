import clsx from "clsx";

interface InputSearchProps {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  value: string;
  className?: string;
  size?: "sm" | "md" | "lg"; // Thêm prop size với 3 kích thước
}

const InputSearch = ({
  placeholder,
  name,
  onChange,
  icon,
  value,
  className,
  size = "md", // Mặc định là kích thước trung bình
}: InputSearchProps) => {
  // Xác định các lớp CSS dựa trên kích thước
  const sizeClasses = {
    sm: {
      input: "py-1 px-3 text-sm",
      iconContainer: "text-sm",
      pl: icon ? "pl-6" : "",
    },
    md: {
      input: "py-2 px-4 text-base",
      iconContainer: "text-base",
      pl: icon ? "pl-8" : "",
    },
    lg: {
      input: "py-3 px-6 text-lg",
      iconContainer: "text-lg",
      pl: icon ? "pl-10" : "",
    },
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={clsx("relative", className)}>
      <div className="relative">
        {/* Gradient border container */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[1px]">
          <div className="w-full h-full rounded-full"></div>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className={clsx(
            "relative  rounded-full w-full bg-white/10",
            selectedSize.input,
            selectedSize.pl,
            "focus:ring-2 focus:ring-primary-1",
            "focus:outline-none",
            "placeholder:text-primary-foreground",
            "text-primary-foreground"
          )}
          value={value}
        />
      </div>

      {icon && (
        <div
          className={clsx(
            "absolute -translate-y-1/2 top-1/2",
            size === "sm" ? "left-1.5" : size === "md" ? "left-2" : "left-3",
            selectedSize.iconContainer
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
