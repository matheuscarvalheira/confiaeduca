import { createContext, useEffect, useState } from "react"
import { AuthContextProps, AuthProviderProps } from "./types"
import { usePathname, useRouter} from "next/navigation"


export const AuthContext = createContext({userType: undefined} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){
    const [userType , setUserType] = useState<'professor' | 'aluno' | undefined>(undefined)

    const router = useRouter()

    const accountsMock = [
        {
            email: 'professor@gmail.com',
            type: 'professor',
            senha: '123456'
        },
        {
            email: 'aluno@gmail.com',
            type: 'aluno',
            senha: '56789'
        }
    ]
    function signIn(email: string, senha: string): boolean{
        const account = accountsMock.find(account => account.email === email && account.senha === senha)
        if(account){
            setUserType(account.type as 'professor' | 'aluno')
            return true
        }
        return false
    }

    function logOut(){
        setUserType(undefined);
        router.push('/login')
    }
    
    return(
        <AuthContext.Provider value={{ userType, signIn, logOut }}>
            { children }
        </AuthContext.Provider>
    )
}
