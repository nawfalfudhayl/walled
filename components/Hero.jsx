import { useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "/Users/fdls/walled/src/assets/view.png";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <section class="w-full px-16 mt-12">
      <div class="flex items-center justify-center">
        <div class="mr-auto">
          <h1 class="text-black text-6xl font-bold">
            Good Morning, Chelsea!
          </h1>
          <p class="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar />
      </div>
      {/* <div class="flex mt-[4.5rem] gap-x-12">
        <div class="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p class="mt-3 font-bold">100899</p>
        </div>
        <div class="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span class="flex items-center mt-3 gap-x-2">
            <p class="font-bold">
              {showBalance ? "Rp10.000.000,00" : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              class="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;