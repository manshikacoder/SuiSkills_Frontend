const Heading = ({
  title,
  subtitle,
  textAlign = "text-start",
  titleColor = "text-blue-500",
  subtitleColor = "text-gray-700",
  titleSize = "text-4xl",
  subtitleSize = "text-2xl",
  fontWeight = "font-bold",
  padding = "py-4",
  customClass = "",
}) => {
  return (
    <div className={`heading ${textAlign} ${customClass}`}>
      <h2 className={`${titleSize} ${titleColor} ${fontWeight} ${padding}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleSize} ${subtitleColor} font-medium ${padding}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
