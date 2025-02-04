import { createContext, useEffect, useState } from "react"
import { AuthContextProps, AuthProviderProps } from "./types"


export const AuthContext = createContext({userType: undefined} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){
    const [userType , setUserType] = useState<'professor' | 'aluno' | undefined>(undefined)

    const accountsMock = [
        {
            email: 'professor@gmail.com',
            senha: '123456'
        },
        {
            email: 'aluno@gmail.com',
            senha: '56789'
        }
    ]
    
    return(
        <AuthContext.Provider value={{ userType }}>
            { children }
        </AuthContext.Provider>
    )
}
