'use client'
import { useEffect } from "react";
import UserLayout from "./container/UserLayout";
import Quiz from "./quiz/page";
import { useUser } from "./context/UserContext";
import { useRouter } from "next/navigation";
const Page = () => {
  const {user} = useUser();
  const router = useRouter();
  useEffect(()=>{
    if(user==null){
      router.push('/login');
    }
    else{
      router.push('/')
    }
  },[user])
  return (
    <div>
      <UserLayout/>
      <Quiz/>
    </div>
  )
}

export default Page