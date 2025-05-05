import { FiArrowRight } from "react-icons/fi";

export default function Button({
  type = "default",        // 'default' | 'outline' | 'gradient' | 'icon'
  children,
  icon = null,
  onClick,
  className = "",
}) {
  let baseStyles = "px-4 py-2 rounded-lg font-semibold transition duration-200";

  let variantStyles = {
    default: "bg-sky-600 text-white hover:bg-sky-600",
    outline: "border border-sky-600 text-sky-600 hover:bg-sky-100",
    gradient: "bg-gradient-to-r from-sky-400 to-blue-800 text-white hover:opacity-90",
    icon: "flex items-center gap-2 bg-sky-600 text-white hover:bg-sky-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[type] || ""} ${className}`}
    >
      {children}
      {type === "icon" && icon && <span>{icon}</span>}
    </button>
  );
}
