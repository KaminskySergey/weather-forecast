import type { Metadata } from 'next'
import Login from '@/components/auth/Login'


export const metadata: Metadata = {
    title: 'login',
    description: 'login',
}

export default async function LoginPage() {
    
    return <Login />
}