'use client'

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Title from "../ui/title/title";

interface ILogin {}

export default function Login({}: ILogin) {
    const {data: session} = useSession()
    if(session){
        redirect('/')
    }
    return (
        <>
      <div className="bg-white p-8 rounded shadow-md w-96 m-auto text-center">
        <Title tag="h1">Login</Title>
      <div className="mt-[32px]">
      <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4 w-full inline-flex items-center"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="w-[32px] h-[32px] mr-[8px]"/>
          Sign In with Google
        </button>
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-full inline-flex items-center"
          onClick={() => signIn("github")}
        >
          <FaGithub className="w-[32px] h-[32px] mr-[8px]"/>
          Sign In with GitHub
        </button>
      </div>
      </div>
        </>
    )
}
