import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ currentUser: null, isLoading: false });
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const parseduser = JSON.parse(user);
      setCurrentUser(parseduser);
    }
    setIsLoading(false);
  }, [isLoading]);

  const signin = async (email, userid) => {
    localStorage.setItem("user", JSON.stringify({ email, userid }));
    setCurrentUser({ email, userid });
    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
