import React from "react";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  rounded,
  outline,
  danger,
  warning,
  ...rest
}) => {
  console.log(15, rest);
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "bg-white": outline,
      "rounded-full": rounded,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   checkVariationValue: (primary, secondary, success, warning, danger) => {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!warning) +
//       Number(!!danger) +
//       Number(!!success);

//     if (count > 1) {
//       return new Error(
//         "Only one of primary,secondary,success,warning and danger can be true"
//       );
//     }
//   },
// };

export default Button;
