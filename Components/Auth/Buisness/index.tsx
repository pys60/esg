"use client";

import Input from "@/Components/Micro/Input";
import { useUserStore } from "@/utils/Zustand";
import { apiClient } from "@/utils/apiClient";
import { useRouterWithQuery } from "@/utils/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import AuthComponentWrapper from "../AuthComponentWrapper";

const BuisnessLogin = () => {
  const router = useRouterWithQuery();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    companyName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // const { mutateAsync, isLoading, error } = useMutation(handleLogin, {
  //   retry: false,
  //   onSuccess: (data) => {
  //     console.log(data)
  //   },
  //   onError: (error:any) => {
  //     toast.error(error.message);
  //   }
  // });
  const { setUser } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (
        formData.username === "" ||
        formData.password === "" ||
        formData.companyName === ""
      ) {
        toast.error("Please fill all the fields");
        return;
      }

      if (formData.password.length < 8) {
        toast.error("Password must be atleast 8 characters long");
        return;
      }

      setIsLoading(true);

      const res: any = await apiClient
        .post("auth/buisnessLogin", {
          body: JSON.stringify(formData),
        })
        .json();
      if (res.success) {
        toast.success("Logged in successfully");
        localStorage.setItem("token", res.token);
        localStorage.setItem("loginType", res.type);
        setUser(res.token);
        setIsLoading(false);
        if (res.type === "buisness") {
          router.push("/esg/create");
        }
      }
    } catch (err: any) {
      const error = await err.response.json();
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthComponentWrapper image="/Images/BG/authImage2.png">
      <p className="text-[24px] font-bold text-white mt-[42px] ">
        Login to your Account
      </p>

      <Input
        value={formData.username}
        setValue={handleChange}
        name="username"
        mode="dark"
        label="Username"
        placeholder="Enter your Name"
        type="text"
        isArea={false}
        diffLabel
        spaced
      />
      <Input
        value={formData.companyName}
        setValue={handleChange}
        name="companyName"
        mode="dark"
        label="Company Name"
        placeholder="Mention your Company Name"
        type="text"
        isArea={false}
        diffLabel
      />
      <Input
        value={formData.password}
        setValue={handleChange}
        name="password"
        mode="dark"
        label="Password"
        placeholder="8 digit min"
        type="password"
        isArea={false}
        diffLabel
      />

      <div className="w-full flex flex-col mt-[50px]">
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="bg-pri rounded-md disabled:opacity-50 text-black font-bold w-full h-[36px]"
        >
          Login
        </button>
      </div>
    </AuthComponentWrapper>
  );
};

export default BuisnessLogin;
