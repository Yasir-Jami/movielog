import { LoaderProps } from "types";

export const Loader: React.FC<LoaderProps> = ({passedStyle, size, color}: LoaderProps) => {
  const defaultStyle: React.CSSProperties = {
    
    
    width: "100px",
    height: "100px",
    border: "7px solid",
    borderTopColor: "orange",
    borderRadius: "50%",
    animation: "loader-rotation 1s linear infinite",
  };

  const customStyle: React.CSSProperties = {
    ...(size ? {width: `${size}px`, height: `${size}px`}: {}),
    ...(color ? {borderTopColor: color}: {}),
  }

  const mergedStyle = { 
    ...defaultStyle, 
    ...customStyle,
    ...passedStyle,
  };
  return (
    <div className="loader-container">
      <div className="loader" style={mergedStyle}></div>;
    </div>
  ) 
  
}