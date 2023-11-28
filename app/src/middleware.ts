import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest){
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({req,res})
    if(req.nextUrl.pathname === "/show"){
        const {data: {session},error} = await supabase.auth.getSession()
        if(session !== null){
            return NextResponse.redirect(new URL("/show",req.url))
        }else{
            return NextResponse.redirect(new URL("/",req.url))
        }
    }
    return NextResponse.next()
}