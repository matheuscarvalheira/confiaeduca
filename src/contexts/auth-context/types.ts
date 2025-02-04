export interface AuthContextProps {
    userType?: 'professor' | 'aluno';
}

export interface AuthProviderProps{
    children: React.ReactNode,
}