export interface AuthContextProps {
    userType?: 'professor' | 'aluno';
    signIn: (email: string, senha: string) => Boolean;
    logOut: () => void;
}

export interface AuthProviderProps{
    children: React.ReactNode,
}