import {Component,Show} from "solid-js"
import { getSession } from "@auth/solid-start"
import {createServerData$} from "solid-start/server"
import { authOpts } from "~/routes/api/auth/[...solidauth]"
import LogIOButton from "./LogIOButton"
import { A } from "solid-start"
import { signOut } from "@auth/solid-start/client"

export const useSession = () => {
    return createServerData$(
        async(_,{request}) => {
            return await getSession(request,authOpts)
        },
        {key: () => ["auth_user"]}
    )
}

const Table: Component = () => {
    const session = useSession()
    return(
        <>
        <Show when={session()} fallback={<div><LogIOButton /></div>}>
            <table class="overflow-x-auto table shadow-xl bg-white mb-20">
                <thead>
                    <tr> 
                        <th>Grade</th>
                        <td>Gakka</td>
                        <td>description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover">
                        <th>1</th>
                        <td>EP</td>
                        <td>aaa</td>
                    </tr>
                    <tr class="hover">
                        <th>2</th>
                        <td>FM</td>
                        <td>bbb</td>
                    </tr>
                    <tr class="hover">
                        <th>3</th>
                        <td>EP</td>
                        <td>ccc</td>
                    </tr>
                </tbody>
            </table>
        </Show>
        <Show 
            when={session()} 
            fallback={<div class="pt-10"><button class='btn btn-ghost btn-disabled'>投稿する</button></div>}>
            <p>{session()?.user?.name}</p>
            <p>{session()?.user?.email}</p>
            <button class="btn" onClick={() => signOut()}>Sign Out</button>
            <A href='/submit' class='btn btn-ghost normal-case text-yellow-400 shadow-md bg-orange-600 hover:bg-orange-400'>
                投稿する
            </A>
          </Show>
       </>
    )
}
export default Table
