import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  className,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="relative">
      <input
        className={`border p-3 rounded-sm ${className} `}
        type={inputType}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {isPasswordVisible ? "V" : "NV"}
        </button>
      )}
    </div>
  );
};

export default InputField;
