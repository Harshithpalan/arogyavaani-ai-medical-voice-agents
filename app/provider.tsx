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
      const result = await axios.post('/api/users');
      console.log(result.data);
      setUserDetail(result.data);
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