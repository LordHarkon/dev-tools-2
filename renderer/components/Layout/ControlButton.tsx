// Libraries
import React, { FC } from "react";
import { classNames } from "primereact/utils";

// Components
import { FaHeartBroken, FaWindowClose, FaWindowMaximize, FaWindowMinimize, FaWindowRestore } from "react-icons/fa";

type Props = {
  type: "minimize" | "maximize" | "close";
};

const ControlButton: FC<Props> = ({ type }) => {
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [hovering, setHover] = React.useState(false);

  const doAction = () => {
    switch (type) {
      case "minimize":
        window.tools.minimize();
        break;
      case "maximize":
        window.tools.maximize();
        setIsMaximized((prev) => !prev);
        break;
      case "close":
        window.tools.close();
        break;
      default:
        break;
    }
  };

  const GetIcon = (props) => {
    switch (type) {
      case "minimize":
        return <FaWindowMinimize className={props.className} />;
      case "maximize":
        return isMaximized ? <FaWindowRestore className={props.className} /> : <FaWindowMaximize className={props.className} />;
      case "close":
        return <FaWindowClose className={props.className} />;
      default:
        return <FaHeartBroken className={props.className} />;
    }
  };

  return (
    <span
      className={classNames("flex items-center justify-center w-8 h-8 cursor-pointer no-drag", {
        "hover:bg-gray-700": type !== "close",
        "hover:bg-red-600 hover:bg-opacity-80": type === "close",
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={doAction}>
      <GetIcon
        className={classNames("w-4 h-4", {
          "text-slate-300": hovering,
          "text-slate-400": !hovering,
        })}
      />
    </span>
  );
};

export default ControlButton;
