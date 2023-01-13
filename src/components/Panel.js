import React from "react";
import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalizedClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalizedClassNames}>
      {children}
    </div>
  );
};

export default Panel;
