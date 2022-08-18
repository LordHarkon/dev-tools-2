// Libraries
import React, { FC } from "react";

const TabControls: FC = ({ children }) => {
  return <div className="flex flex-row space-x-3">{children}</div>;
};

export default TabControls;
