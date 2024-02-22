'use client'

import { PropsWithChildren } from "react"
import { SearchProvider } from "./context-provider/SearchProvider"
import AuthProvider from "./auth-provider/AuthProvider"

interface IProviders {}


export default function Providers({ children }: PropsWithChildren) {
    return (
  

            <SearchProvider>
            <AuthProvider>
{children}
            </AuthProvider>
            </SearchProvider>
    
    )
}