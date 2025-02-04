import { createContext, useEffect, useState } from "react"
import { AuthContextProps, AuthProviderProps } from "./types"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { usePathname, useRouter} from "next/navigation"

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

const FREE_ACCESS_PATHNAMES = ['/login']

export const AuthContext = createContext({userType: undefined} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    const router = useRouter()
    const pathname = usePathname()

    const [userType , setUserType] = useState<'professor' | 'aluno' | undefined>(undefined)

    useEffect(() => {
        const { 'ConfiaEduca.UserType': cookieUserType } = parseCookies()
        setUserType(cookieUserType as 'professor' | 'aluno' | undefined)
        const accessFree = FREE_ACCESS_PATHNAMES.includes(pathname)
        if (!accessFree) {
            if (userType == undefined) {
                router.push('/login')
            }
        }
    }, [pathname])

    function signIn(email: string, senha: string): boolean{
        const account = accountsMock.find(account => account.email === email && account.senha === senha)
        if(account){
            setUserType(account.type as 'professor' | 'aluno')
            setCookie(undefined, 'ConfiaEduca.UserType', account.type, { maxAge: 60 * 30 }) // 30 minutes
            return true
        }
        return false
    }

    function logOut(): void{
        destroyCookie(undefined, 'ConfiaEduca.UserType')
        setUserType(undefined);
        router.push('/login')
    }
    
    return(
        <AuthContext.Provider value={{ userType, signIn, logOut }}>
            { children }
        </AuthContext.Provider>
    )
}
