'use client'
import { FC, PropsWithChildren } from 'react'
import { SessionProvider} from 'next-auth/react'


const AuthProvider: FC<PropsWithChildren<unknown>> = ({
  children, 
}) => {

    return <SessionProvider>{children}</SessionProvider>;

}

export default AuthProvider