import { Button } from "./elements";

export const Stopwatch = () => {
  return (
    <div className="flex">
      <div>
        <Button buttName={"Stop watch"} />
      </div>
      <div className="flex gap-6">
        <button className="h-6 bg-orange-300 px-4 rounded-md">Start</button>
        <button className="h-6 bg-orange-300 px-4 rounded-md">Reset</button>
        <button className="h-6 bg-orange-300 px-4 rounded-md">Stop</button>
      </div>
    </div>
  );
};
