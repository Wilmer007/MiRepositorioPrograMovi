import { createContext, useContext, useState } from "react"


type User = {
email: string;


} | null;

type AuthContextType = {

    user : User | null;
    isAllowed: boolean;
    Login : (email:string) => boolean;
    LogOut: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context)
         {
            throw new Error('useAuth debe usarse dentro de AuthProvider');
} return context;
    
}

export const AuthProvider = ({children}: {children : React.ReactNode}) => {

    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);
    const Login = (email:string): boolean => {

        const allowed = email.endsWith('.edu')
        if (allowed){
            setUser({email})
            setIsAllowed(allowed)
        }
        return allowed;

    }
    const LogOut = () => {
    setUser(null);
    setIsAllowed(false);
    }

     return(
        <AuthContext.Provider value={{user, isAllowed,Login,LogOut}}>
            {children}
            </AuthContext.Provider>
     )



}