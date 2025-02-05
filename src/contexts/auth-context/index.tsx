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
        if (!FREE_ACCESS_PATHNAMES.includes(pathname)) {
          const { 'ConfiaEduca.UserType': cookieUserType } = parseCookies();
          if (!cookieUserType) {
            router.push('/login');
            return;
          }
          setUserType(cookieUserType as 'professor' | 'aluno');
        }
    }, [pathname]);

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
