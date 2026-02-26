import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const savedUser = localStorage.getItem("currentUser");

  try {
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed && parsed.email) {
        setUser(parsed);
      }
    }
  } catch (error) {
    console.error("Corrupted user data. Clearing...");
    localStorage.removeItem("currentUser");
  }
}, []);

  const login = (email, password) => {
    const stored = localStorage.getItem(email);

    if (!stored) {
      return { success: false, message: "Account not found" };
    }

    const storedUser = JSON.parse(stored);

    if (storedUser.password !== password) {
      return { success: false, message: "Incorrect password" };
    }

    localStorage.setItem("currentUser", JSON.stringify(storedUser));
    setUser(storedUser);
    return { success: true };
  };

  const signup = (name, email, password) => {
    if (localStorage.getItem(email)) {
      return { success: false, message: "User already exists" };
    }

    const newUser = { name, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);