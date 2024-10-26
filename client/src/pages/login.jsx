"use client";

import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function login() {
  const router = useRouter()
  const [{}, dispatch] = useStateProvider()
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const {
        user: { displayName: name, email, photoURL: profileImage },
      } = await signInWithPopup(firebaseAuth, provider);

      try {
        if(email){
          const {data} = await axios.post(CHECK_USER_ROUTE, {email})
          // console.log({data})

          
          if(!data.status){
            dispatch({
              type:reducerCases.SET_USER_INFO, userInfo:{
                name,
                email, 
                profileImage, 
                status:""
              }
            })
            router.push("/onboarding")
          }
        }
      } catch (error) {
        console.log(error)
      }
      // const user = result.user;
      // console.log(user);
    } catch (error) {
      console.error("Firebase login error:", error);
      alert(`Login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#ADD8E6] h-screen w-screen flex-col gap-10 p-6">
      <div className="flex items-center justify-center gap-4 text-black">
        <Image
          src="/Designer.jpeg"
          alt="TalkApp"
          height={300}
          width={300}
          className="rounded-full shadow-2xl border-4 border-white"
        />
        <span className="text-7xl bg-[#67B7D1] text-white font-bold py-3 px-6 rounded-lg shadow-lg inline-block">
          TalkApp
        </span>
      </div>

      <button
        className={`flex items-center justify-center gap-4 bg-[#4B89AC] hover:bg-[#3C6D87] text-white p-4 rounded-full shadow-xl transition duration-300 ease-in-out ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="text-white text-2xl font-semibold">
            Logging In...
          </span>
        ) : (
          <>
            <FcGoogle className="text-4xl" />
            <span className="text-white text-2xl font-semibold">
              Login With Google
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export default login;
