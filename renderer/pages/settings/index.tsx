import Link from "next/link";

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-xl">This is the settings page</p>
      <p>
        <Link href="/web">
          <a>
            <button className="px-4 py-2 m-2 border rounded border-slate-700 bg-slate-800 hover:bg-slate-700">Go Home</button>
          </a>
        </Link>
      </p>
    </div>
  );
}