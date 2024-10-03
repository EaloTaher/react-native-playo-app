import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [upcomingGames, setUpComingGames] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem("token");
      setToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      setUserId(userId);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    //so we get access to this values in any points of our app.
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        upcomingGames,
        setUpComingGames,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
