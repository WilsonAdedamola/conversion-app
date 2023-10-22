import React from "react";

const Profile = () => {
  return (
    <section className="scroll flex flex-col items-center justify-start w-full px-5 pt-8 overflow-y-auto h-full">
      <p className="font-bold text-xl mb-10">Profile</p>
      <div className="flex flex-col items-center justify-center w-full bg-[#151718] rounded-3xl p-7 h-72">
        <div className="w-32 h-32 bg-[#D9D9D9] rounded-md"></div>
        <p className="font-semibold text-[1.09rem]">Ife Ricardo</p>
        <p className="text-sm">ifericardo@gmail.com</p>
      </div>
    </section>
  );
};

export default Profile;
