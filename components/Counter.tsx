import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ToastMessage } from "./ToastMessage.tsx";

export const Counter = () => {
  const toast = useToast();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    toast({
      position: "bottom-right",
      render: () => <ToastMessage title="Incremented" description={`Counter is now ${count + 1}`} />,
    });
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <p>
          Current Count <b>{count}</b>
        </p>
        <button className="bg-gray-300 w-full rounded-lg py-2 hover:bg-gray-400 transition duration-150 active:bg-gray-500" onClick={handleClick}>
          +1
        </button>
      </div>
    </>
  );
};
