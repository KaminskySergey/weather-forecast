import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "@/providers/Providers";
import { Session, getServerSession } from 'next-auth'
import AuthProvider from "@/providers/auth-provider/AuthProvider";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City",
  description: "Create trips",
};

// export async function getSession(cookie: string): Promise<Session> {

//   const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/session`, {
//     headers: {
//       cookie,
//     },
//   });

//   const session = await response.json();

//   return Object.keys(session).length > 0 ? session : null;
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={inter.className}>
      <body className=" p-0 overflow-x-hidden m-auto bg-gradient-to-br from-purple-500 via-blue-500 to-green-400" style={{ maxWidth: '1536px' }}>
        <Providers>
              
              <main className="max-w-screen-2xl flex">
                
                {children}
              </main>
              
         </Providers>
      </body>
    </html>
  );
}
