"use client"
import { useRouter,useSearchParams } from "next/navigation";
/* import TailwindContainer from "@/components/Auto/UI/TailwindContainer";
 */import KTable from "@/components/Auto/UI/DataTable";

export default function Show(){
    const router = useRouter()
    const searchParams = useSearchParams();
    const auth_check = searchParams.get("auth");
    if(auth_check === null){
        router.push("/")
    }
    return (
        <>
            {/* <TailwindContainer> */}
                <>
                <KTable />
                </>
            {/* </TailwindContainer> */}
        </>
    )
}
