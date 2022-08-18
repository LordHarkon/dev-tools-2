import { FC } from "react";

type Props = {
  title: string;
};

const Logo: FC<Props> = ({ title }) => {
  return (
    <span className="flex flex-row items-center justify-center space-x-2 text-slate-400">
      <img src="/b3.gif" className="h-8 ml-1" alt={title} />{" "}
      {/* <img src="/logo.svg" className="h-8 ml-1 border border-white rounded-full border-opacity-10" alt="All the Tools" />{" "} */}
      {/* <Logo className="w-9 h-9" forgeClassName="fill-gray-600" infinityClassName="fill-gray-800" />{" "} */}
      <span className="flex flex-row">{title}</span>
    </span>
  );
};

export default Logo;
