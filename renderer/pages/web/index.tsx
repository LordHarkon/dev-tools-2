import WebLayout from "#components/Layout/web";

export default function Web() {
  return (
    <WebLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <p className="text-xl">This is the web renderer.</p>
      </div>
    </WebLayout>
  );
}
