"use client"
import { useRouter,useSearchParams } from "next/navigation";
export default function Show(){
    const router = useRouter()
    const searchParams = useSearchParams();
    const auth_check = searchParams.get("auth");
    if(auth_check === null){
        router.push("/")
    }
    return (
        <>
            <p>Show</p>
        </>
    )
}
