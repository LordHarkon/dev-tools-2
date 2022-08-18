// Libraries
import React from "react";
import { useRouter } from "next/router";
import { classNames } from "primereact/utils";

// Components
import { FaWindowMinimize, FaWindowMaximize, FaWindowRestore, FaWindowClose } from "react-icons/fa";
import { SiCurseforge } from "react-icons/si";
import { BsGlobe, BsTools, BsGearFill } from "react-icons/bs";
import TabControls from "./TabControls";
import WindowControls from "./WindowControls";
import Logo from "./Logo";
import Tab from "./Tab";
import ControlButton from "./ControlButton";

export default function Header() {
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [hovering, setHover] = React.useState("");

  const closeApp = () => {
    window.tools.close();
  };

  const minimizeApp = () => {
    window.tools.minimize();
  };

  const maximizeApp = () => {
    window.tools.maximize();
    setIsMaximized((prev) => !prev);
  };
  return (
    <header className="box-border fixed top-0 left-0 w-full h-12 bg-gray-800 border border-b-0 border-gray-600">
      <div className="flex justify-between h-full p-2 font-sans text-sm draggable">
        <Logo title="The Tools" />

        <TabControls>
          <Tab path="/web" tabColor="bg-blue-500">
            <BsGlobe className="w-6 h-6 pointer-events-none opacity-90" />
          </Tab>
          <Tab path="/tools" tabColor="bg-yellow-600">
            <BsTools className="w-6 h-6 pointer-events-none opacity-90" />
          </Tab>
          <Tab path="/settings" tabColor="bg-teal-600">
            <BsGearFill className="w-6 h-6 pointer-events-none opacity-90" />
          </Tab>
        </TabControls>

        <WindowControls>
          <ControlButton type="minimize" />
          <ControlButton type="maximize" />
          <ControlButton type="close" />
        </WindowControls>
      </div>
    </header>
  );
}
