
import MainComponent from "@/components/main/Main";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface IHome {
  searchParams: {
    city: string
  }
}

export default async function Home({searchParams}: IHome) {
const session = await getServerSession(authOptions)
if(!session) redirect('/login')

  return (
    <>
    <MainComponent address={searchParams.city}/>
    
    </>
  );
}
