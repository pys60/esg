"use client";

import PriButton from "@/Components/Micro/PriButton";
import { useChatHistoryStore, useEsgReportDataStore } from "@/utils/Zustand";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";
import { AiOutlineClear } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";

type Props = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

interface FileParam {
  // Assuming the file object is of type File, as from an input type="file" in the browser
  file: File;
}

const Chat = ({ open, setOpen }: Props) => {
  const {
    chatHistory,
    resetChatHistory,
    selectedQuestion,
    setChatHistory,
    setSelectedQuestion,
  } = useChatHistoryStore();
  const { step1Data } = useEsgReportDataStore();
  const [value, setValue] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleAiClick = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!step1Data.companyName.value || !step1Data.companyBrief.value) {
      toast.error("Please fill in company name and info to use AI");
      return;
    }

    if (!selectedQuestion) {
      toast.error("Please select a question to use AI");
      return;
    }

    try {
      if (file) {
        await queryWithAxios({ file });
        setChatHistory({
          sender: "bot",
          message: "File Added Successfully",
        });
        setFile(null);
        setValue("");
        return;
      }

      // https://g4ptdzpl66.execute-api.us-east-1.amazonaws.com/askAll
      setChatHistory({
        sender: "user",
        message: value,
      });
      const { data }: any = await axios.post(
        "https://g4ptdzpl66.execute-api.us-east-1.amazonaws.com/ask",
        {
          question: selectedQuestion,
          companyName: step1Data.companyName.value,
          hint: `Company_Name: ${step1Data.companyName.value}, Description: ${step1Data.companyBrief.value}, \n Query: ${value}`,
          history: chatHistory.map(
            (item: { sender: string; message: string }) => {
              return {
                sender: item.sender,
                message: item.message,
              };
            }
          ),
        }
      );

      setChatHistory({
        sender: "bot",
        message: data.message,
      });

      setValue("");
      //scroll to bottom
    } catch (err) {
      toast.error("AI is not working, please try again later");
    } finally {
      setLoading(false);
    }
  };

  async function queryWithAxios({ file }: FileParam): Promise<any> {
    // Create an instance of FormData
    const formData = new FormData();

    // Append the file and other data to FormData
    formData.append("report", file);

    try {
      // Make a POST request using axios
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL}/ai/add-data`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Return the result
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error("Error making the request:", error);
      // Depending on how you want to handle errors, you might want to throw the error,
      // return a more specific type, or return null as in the JavaScript version.
      throw error;
    }
  }

  useEffect(() => {
    return () => {
      resetChatHistory();
    };
  }, [selectedQuestion]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="w-full px-[3%]">
      <form
        onSubmit={handleAiClick}
        className="bg-[#001e5be4] flex flex-col justify-between gap-[1rem] relative rounded-xl py-[4vh] h-[75vh] px-[2vw] border border-white"
      >
        <button
          onClick={() => setOpen!(!open)}
          type="button"
          className="absolute flex items-center justify-center top-[2%] border border-[#001e5be4] rounded-md left-[-2vh] w-[4vh] h-[4vh] bg-white "
        >
          <FaArrowRight className="w-[1rem] h-[1rem] text-[#001e5be4]" />
        </button>
        <div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-pri">Zero Carbon One | RAG</p>

            <AiOutlineClear
              onClick={() => {
                resetChatHistory();
                setSelectedQuestion("");
              }}
              className="w-[1.5rem] text-white h-[1.5rem] cursor-pointer"
            />
          </div>
          {!selectedQuestion && (
            <p className="font-bold text-white truncate text-lg mt-[2vh]">
              Select Question to Start Chatting...
            </p>
          )}
          {/* marquee */}
          {selectedQuestion && (
            <Marquee
              autoFill={true}
              className="w-full mt-[2vh] text-white font-bold text-lg"
            >
              {selectedQuestion}
              {"  "}
            </Marquee>
          )}
        </div>
        <div
          ref={containerRef}
          className="w-full h-full overflow-y-auto no-scoll-bar"
        >
          {chatHistory.map(
            (
              item: {
                sender: string;
                message: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className={`flex gap-[1rem] items-start px-[2%] w-full mt-[1rem] ${
                  item.sender === "user" ? "justify-end" : "justify-start"
                } gap-[1rem]`}
              >
                {item.sender === "bot" && (
                  <img
                    src="https://zerocarbon.one/favicon.ico"
                    className="w-[1.5rem] h-[1.5rem] rounded-full"
                  />
                )}
                <p
                  className={` ${
                    item.sender === "user"
                      ? "text-right text-pri"
                      : "text-left text-white"
                  } w-[80%] text-[16px]`}
                >
                  {capitalize(item.message)}
                </p>
                {item.sender === "user" &&
                  item.message &&
                  chatHistory.length > 1 && (
                    <img
                      src="https://i.ibb.co/5Yvtb0w/sdg-wheel.png"
                      className={`w-[1.5rem] h-[1.5rem] ${
                        loading && "animate-spin"
                      } rounded-full`}
                    />
                  )}
              </div>
            )
          )}
          {loading && (
            <div className="flex items-center justify-start px-[2%] w-full">
              <div className="">
                <img
                  src="https://i.ibb.co/5Yvtb0w/sdg-wheel.png"
                  className={`w-[1.5rem] h-[1.5rem] ${
                    loading && "animate-spin"
                  } rounded-full`}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="relative w-full ">
            <input
              type="file"
              onChange={(e) => {
                if (!e.target.files) return;
                const file = e.target.files[0];
                if (!file) return;
                setFile(file);
              }}
              className="hidden"
              ref={fileRef}
              accept=".pdf"
            />
            <button
              type="button"
              onClick={() => {
                fileRef?.current?.click();
              }}
              className="absolute top-0 left-[0.5rem] flex items-center justify-center h-full"
            >
              <MdAttachFile className="text-2xl cursor-pointer" />
            </button>
            <input
              disabled={file ? true : false || loading}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full py-[0.5rem] focus:outline-none border border-white rounded-sm pr-[6vw] px-[3vw]"
              placeholder={
                file ? file.name : "Ask me Anything reagarding ESG..."
              }
              type="text"
            />
            <div className="absolute top-0 right-[0.5rem] flex items-center justify-center h-full">
              <button
                type="submit"
                disabled={file ? false : !selectedQuestion || loading}
                className={`py-[0.2rem] ${
                  !selectedQuestion ? "cursor-not-allowed" : "cursor-pointer"
                } px-[1rem] text-white disabled:opacity-50 bg-green-500 rounded-sm`}
              >
                {loading ? "Wait..." : file ? "Upload" : "Go"}
              </button>
            </div>
          </div>
          <PriButton
            type="button"
            disabled={!selectedQuestion || !chatHistory.length}
            onClick={() => {
              if (!chatHistory.length) return;
              navigator.clipboard.writeText(
                chatHistory[chatHistory.length - 1].message
              );
              toast.success("Copied to Clipboard");
            }}
            className="!w-full mt-[2vh]"
          >
            Copy to Clipboard
          </PriButton>
        </div>
      </form>
    </div>
  );
};

export default Chat;
