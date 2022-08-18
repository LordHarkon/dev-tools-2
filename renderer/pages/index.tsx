import Link from "next/link";
import Layout from "#components/Layout";
import React from "react";
import { classNames } from "primereact/utils";

const IndexPage = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold">Hello There!</h1>
      <p className="text-xl">You shouldn't be here.</p>
      <Link href="/web">
        <a>
          <button className="px-4 py-2 m-2 border rounded border-slate-700 bg-slate-800 hover:bg-slate-700">Go Home</button>
        </a>
      </Link>
    </div>
  );
};

export default IndexPage;
