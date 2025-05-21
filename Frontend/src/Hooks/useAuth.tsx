import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type SignupDTO = {
  username: string;
  email: string;
  password: string;
};

type User = {
  username: string;
  email: string;
};

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

type AuthContextType = {
  signup: (signupData: SignupDTO) => Promise<void>;
  user: User | null;
  accessToken: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const navigate = useNavigate();

  // When user reloads token is refreshed
  
      useEffect(() => {
      const refresh = async () => {
        try {
          const { data } = await axios.post<AuthResponse>(
            "http://localhost:8080/api/auth/refresh",
            {},
            { withCredentials: true }
          );
          console.log(data);
          setUser(data.user);
          setAccessToken(data.accessToken);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error("Refresh failed:", error.response?.data);
            setUser(null);
            setAccessToken(null);
          }
        }
      };

      refresh();
    }, []);

  const signup = async (signupData: SignupDTO) => {

    try {
      const { data } = await axios.post<AuthResponse>(
        "http://localhost:8080/api/auth/signup",
        signupData,
        { withCredentials: true }
      );
      console.log(data);
      setUser(data.user);
      setAccessToken(data.accessToken);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Signup failed:", error.response?.data);
      }
    }
  };
  return (
    <AuthContext.Provider value={{ signup, user, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "Auth context is undefined. Make sure this context is used in auth provider"
    );
  return context;
};
