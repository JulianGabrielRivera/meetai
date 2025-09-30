"use client";

import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () =>{
    const trpc = useTRPC();
    const {data} = useQuery(trpc.hello.queryOptions({text:"Julian"}));
  const {data:session} =authClient.useSession();
  
  if(!session){
    return (
      <p>Loading...</p>
    )
  }
  
  return (
   <div className="flex flex-col p-4 gap-y-4">
       {data?.greeting}
      </div>
  );
}

export default HomeView;
