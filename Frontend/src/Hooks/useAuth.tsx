import axios from "axios";
import { createContext, ReactNode, useContext } from "react"

type signupDTO = {
    username: string,
    email:string,
    password:string
}

type AuthContextType = {
    signup: (signupData:signupDTO) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const signup = async (signupData:signupDTO) => {
        const {data} = await axios.post(
            "http://localhost:8080/api/auth/signup",
            signupData
        )

        console.log(data)
    }
      return (
    <AuthContext.Provider value={{signup}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Auth context is undefined. Make sure this context is used in auth provider")  
    return context
}