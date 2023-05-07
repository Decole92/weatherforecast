import React from "react";
import { SunIcon } from "@heroicons/react/24/solid";
function loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0c417a] to-[#3579c2] p-10">
      <SunIcon className="h-24 w-24 animate-bounce text-[#FFD700] " />
      <h1 className="text-3xl animate-pulse text-white text-center">
        Loading Weather Information!!!
      </h1>
    </div>
  );
}

export default loading;
