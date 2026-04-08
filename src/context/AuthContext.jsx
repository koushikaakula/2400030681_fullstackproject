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

  // ✅ LOGIN (FINAL FIXED)
  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Please enter all fields" };
    }

    const cleanEmail = email.trim().toLowerCase();

    const stored = localStorage.getItem(cleanEmail);

    console.log("Trying login with:", cleanEmail); // 🔍 debug

    if (!stored) {
      return { success: false, message: "Account not found" };
    }

    let storedUser;

    try {
      storedUser = JSON.parse(stored);
    } catch (error) {
      localStorage.removeItem(cleanEmail);
      return {
        success: false,
        message: "Corrupted user data. Please signup again.",
      };
    }

    if (storedUser.password !== password) {
      return { success: false, message: "Incorrect password" };
    }

    localStorage.setItem("currentUser", JSON.stringify(storedUser));
    setUser(storedUser);

    return { success: true };
  };

  // ✅ SIGNUP (FINAL FIXED)
  const signup = (name, email, password) => {
    if (!name || !email || !password) {
      return { success: false, message: "All fields required" };
    }

    const cleanEmail = email.trim().toLowerCase();

    if (localStorage.getItem(cleanEmail)) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      name,
      email: cleanEmail,
      password,
    };

    console.log("Saving user:", newUser); // 🔍 debug

    localStorage.setItem(cleanEmail, JSON.stringify(newUser));
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