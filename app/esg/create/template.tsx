"use client";

import Chat from "@/Components/GnerateESG/Micro/Chat";
import ESGSideBar from "@/Components/GnerateESG/Micro/ESGSideBar";
import Loading from "@/Components/Loading";
import { useShowSideBarStore } from "@/utils/Zustand";
import React, { Suspense, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Template = ({ children }: { children: React.ReactNode; params: any }) => {
  const [open, setOpen] = useState(true);
  const { showSideBar } = useShowSideBarStore();
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full relative bg-lightPri justify-start min-h-[100vh] flex">
        {showSideBar && <ESGSideBar />}
        {!open && (
          <button
            onClick={() => setOpen!(!open)}
            type="button"
            className="fixed flex items-center justify-center top-[30vh] border border-[#001e5be4] rounded-md rounded-r-[0px] border-r-0 right-[0] w-[4vh] h-[4vh] z-[10] bg-white "
          >
            <FaArrowLeft className="w-[1rem] h-[1rem] text-[#001e5be4]" />
          </button>
        )}
        <div
          className={`${
            open ? "w-[60vw]" : "w-[100vw]"
          } transition-all duration-300 pb-[20vh] bg-[#e0faff] mt-[10vh] min-h-[100vh]`}
        >
          {children}
        </div>
        <div
          style={{
            backgroundImage: "url(/Images/asset/esg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`w-[40vw] transition-all duration-300 flex items-center justify-center fixed z-0 top-0 ${
            open ? "right-0" : "right-[-40vw]"
          } min-h-[100vh] `}
        >
          <Chat open={open} setOpen={setOpen} />
        </div>
      </div>
    </Suspense>
  );
};

export default Template;
