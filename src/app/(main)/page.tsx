
import MainComponent from "@/components/main/Main";

interface IHome {
  searchParams: {
    city: string
  }
}

export default async function Home({searchParams}: IHome) {
 

  return (
    <>
    <MainComponent address={searchParams.city}/>
    
    </>
  );
}
