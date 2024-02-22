// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import type { Metadata } from 'next'
// import { getServerSession } from 'next-auth'
import Login from '@/components/auth/Login'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: 'login',
    description: 'login',
}

export default async function LoginPage() {
    // const session = await getServerSession(authOptions)
    // if(session){
    //     redirect('/')
    // }
    return <Login />
}