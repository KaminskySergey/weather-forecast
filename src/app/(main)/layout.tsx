import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City",
  description: "Create trips",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" className={inter.className}>
      <body className=" p-0 overflow-x-hidden m-auto" style={{ background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)', maxWidth: '1536px' }}>
        <Providers>
          
              <main className="max-w-screen-2xl flex">
                {children}
              </main>
         </Providers>
                {/* </AuthProvider>  */}
      </body>
    </html>
  );
}
