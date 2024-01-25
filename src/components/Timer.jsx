import { Button } from "./elements";

export const Timer = () => {
  return (
    <div className="w-[400px] flex gap-6">
      <Button buttName={"Timer"} />
      <button className="h-6 bg-gray-300 rounded-md text-center px-4">
        Start Timer
      </button>
    </div>
  );
};
