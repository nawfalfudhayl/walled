import { useState } from "react";
import avatarImg from "/Users/fdls/walled/src/assets/avatar.png";

function Avatar() {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  return (
    <div class="flex items-center gap-x-4 ml-auto">
      <span class="text-right">
        <p class="text-black font-bold">Chelsea Immanuela</p>
        <p class="text-black">Personal Account</p>
      </span>
      <div
        class={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img src={avatarImg} alt="avatar" class="rounded-full" />
      </div>
    </div>
  );
}

export default Avatar;