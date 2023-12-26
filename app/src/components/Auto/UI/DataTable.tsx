import { TestModule } from "@/gss"
import { GoogleSpreadsheet } from "google-spreadsheet"
type SpereadSheetsJson = {
    range:string,
    majorDimension: string,
    values: Array<string[]>
} 

export default async function KTable({doc}:{doc: GoogleSpreadsheet}){
    await TestModule()
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra table-pin-row sm:table-sm md:table-md s">
                <thead>
                    <tr>
                        <th>インデックス</th>
                        <th>学年</th>
                        <th>学科</th>
                        <th>取り組んだこと</th>
                    </tr>
                </thead>
                <tbody>
                {/* {posts!.map((data,i) => {
                    return (
                        <tr className="divide-y-[1.5px] divide-blue-200" key={i}> 
                            <td>
                                {i}
                            </td>
                            <td>
                                {data[2]}
                            </td>
                            <td>
                                {data[4]}{data[5]}{data[6]}
                            </td>
                            <td>
                                {data[9]}
                            </td>
                        </tr>
                    )
                })} */}
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps() {
    const doc = await TestModule()
    return{
        data:doc
    }
}