// components/Col.jsx
export default function Col({ children, width = "full", className = "" }) {
  const widthClass = {
    full: "w-full",
    half: "w-full sm:w-1/2",
    third: "w-full sm:w-1/3",
    quarter: "w-full sm:w-1/4",
  };

  return (
    <div className={`${widthClass[width]} px-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}
