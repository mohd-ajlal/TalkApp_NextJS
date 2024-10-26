import Image from "next/image";
import React from "react";

function Onboarding() {
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-6">
        <Image
          src="/Designer.jpeg"
          alt="TalkApp"
          height={300}
          width={300}
          className="rounded-full shadow-2xl border-4 border-white"
        />
        <span className="text-7xl bg-[#67B7D1] text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          TalkApp
        </span>
      </div>
      <h2 className="text-2xl mt-8">Create Your Profile</h2>
      <div className="flex gap-6 mt-10">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
