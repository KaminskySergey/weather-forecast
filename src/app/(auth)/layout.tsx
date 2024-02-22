import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from '@/providers/Providers'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { getSession } from '../(main)/layout'
import { headers } from 'next/headers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'login',
  description: '',
}




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie') ?? '')
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
      <AuthProvider>
        {/* <Providers> */}
          <div
            className=" h-screen flex justify-center items-center" style={{ background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)'}}
            >
            <div className="max-w-screen-xl w-full">
              <main className="p-6">{children}</main>
            </div>
          </div>
        {/* </Providers> */}
             </AuthProvider>
      </body>
    </html>
      
  );
}

