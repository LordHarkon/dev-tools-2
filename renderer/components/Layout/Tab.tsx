// Libraries
import React, { FC } from "react";
import { classNames } from "primereact/utils";
import useTabPath from "#hooks/useTabPath";
import { useRouter } from "next/router";

type Props = {
  path: string;
  tabColor: string;
};

const Tab: FC<Props> = ({ children, path, tabColor = "bg-gray-900" }) => {
  const isActive = useTabPath(path);
  const router = useRouter();

  return (
    <div
      className={classNames(
        "flex flex-col py-1 items-center justify-center no-drag px-2 border border-b-0 border-gray-600 rounded-t-lg cursor-pointer",
        {
          "h-[35px] mt-1": isActive,
          [tabColor]: isActive,
          "bg-gray-700 h-[39px]": !isActive,
        }
      )}
      onClick={() => router.push(path)}>
      {children}
    </div>
  );
};

export default Tab;
