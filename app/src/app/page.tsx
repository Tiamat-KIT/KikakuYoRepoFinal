import Image from 'next/image'
import {supabase} from "../supabase"
import {redirect} from "next/navigation"
export default async function Home() {
  const signIn = async (form: FormData) => {
    "use server"
    const getEmailDomain = form.get("email")!.toString().split('@')[1]
    console.log(getEmailDomain)
    if(getEmailDomain == "planet.kanazawa-it.ac.jp" || getEmailDomain == "st.kanazawa-it.ac.jp"){
      const {data,error} = await supabase.auth.signInWithOtp({
        email: form.get("email")!.toString(),
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/show`
        }
      })
      console.log("OK!")
    }else {
      console.error("ログイン許可できません！")
    }
  }
  
  const {data:{session},error} = await supabase.auth.getSession()
  if(session !== null){
        redirect("/show")
  }
  
  return (
    <main>
      <h1>Example</h1>
      <form action={signIn}>
        <input name='email' id='email'/>
        <button>Submit!</button>
      </form>
    </main>
  )
}
