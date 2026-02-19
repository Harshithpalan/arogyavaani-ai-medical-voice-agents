"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

export type UsersDetail = {
  name: string,
  email: string,
  credits: number
}

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { user } = useUser();
  const [UserDetail, setUserDetail] = useState<UsersDetail | undefined>(undefined)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user && !UserDetail && !loading && !error) {
      CreateNewUser();
    }
  }, [user, UserDetail, loading, error])



  const CreateNewUser = async () => {
    try {
      setLoading(true);
      setError(false);
      const result = await axios.post('/api/users', {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress
      });

      // Strict check if we got JSON, not HTML redirect
      if (typeof result.data === 'string' && result.data.includes('<!DOCTYPE html>')) {
        console.error("Provider received HTML instead of JSON from /api/users");
        setError(true);
        return;
      }

      console.log("User created/fetched:", result.data);
      if (result.data && typeof result.data === 'object' && result.data.email) {
        setUserDetail(result.data);
      } else {
        console.warn("Invalid user data received:", result.data);
        setError(true);
      }
    } catch (e) {
      console.error("Error creating user session:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserDetailContext.Provider value={{ UserDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default Provider