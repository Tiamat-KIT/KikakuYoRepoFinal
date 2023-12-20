"use client"
import {useState,useEffect} from "react"
import { UseFetch, useFetch } from "use-http"
type SpereadSheetsJson = {
    range:string,
    majorDimension: string,
    values: Array<string[]>
} 
export default function KTable(){
    const [fetchDetail,setDetail] = useState<SpereadSheetsJson["values"]| null>(null)
    const {data = null} = useFetch<SpereadSheetsJson>("https://sheets.googleapis.com/v4/spreadsheets/1qOv5-b5PGoEfpr2DpI6qGFKc9htjq6qJVp4lxWL8GVQ/values/submit?key=AIzaSyBBbda2OLwZWizqfk60R4BbFD8Ji4PEnV0",{},[])
    const result = data?.values ? data.values : [] as SpereadSheetsJson["values"]
    setDetail(result)
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
                {fetchDetail!.map((data,i) => {
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
                })}
                </tbody>
            </table>
        </div>
    )
}