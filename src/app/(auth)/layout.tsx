import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from '@/providers/Providers'


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
  // const session = await getSession(headers().get('cookie') ?? '')
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
      {/* <AuthProvider> */}
        {/* <Providers> */}
          <div
            className="bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 h-screen flex justify-center items-center"
            >
            <div className="max-w-screen-xl w-full">
              <main className="p-6">{children}</main>
            </div>
          </div>
        {/* </Providers> */}
             {/* </AuthProvider> */}
      </body>
    </html>
      
  );
}

