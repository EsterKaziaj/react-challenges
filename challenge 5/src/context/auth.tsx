import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useState, ReactNode } from "react";
import { auth, firebase } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export interface AuthContextProps {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

const saveUserToFirestore = async (user: User) => {
  if (!user?.email) return console.error("Error saving user in Firebase");

  const usersCollection = collection(firebase, "users");

  const userDocRef = doc(usersCollection, user.email);
  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    await setDoc(userDocRef, {
      displayName: user.displayName,
      email: user.email,
      id: user.uid,
    });
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      provider.addScope("profile");
      provider.addScope("email");

      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
      saveUserToFirestore(user);

      navigate("/all-workouts");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logout = async () => {
    signOut(auth);
    setUser(null);
    navigate("/");
  };

  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
