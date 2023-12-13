"use client"
import { useEffect, useState,use } from "react"


export default async function KTable(){
    const [fetchData,setFetchData] = useState<any>(null)
    useEffect( () => {
        const fetchData = fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/1qOv5-b5PGoEfpr2DpI6qGFKc9htjq6qJVp4lxWL8GVQ/values/s?key=AIzaSyBBbda2OLwZWizqfk60R4BbFD8Ji4PEnV0"
            ,{method: "GET"}).then(respomse => respomse.arrayBuffer()).then(data => data)
        setFetchData(fetchData)
    },[])
    console.log(fetchData)
    
    const TestedItems: Record<"Grade" | "Major" | "Story",string>[] = [{
        Grade: "3",
        Major: "EP",
        Story: "CG関連の試験対策で合格するためにめちゃ勉強した"
    },
    {
        Grade: "2",
        Major: "EP",
        Story:"Next.jsを使えるようにするためにコードを書きまくって練習した"
    }]
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
                {TestedItems.map((data,i) => {
                    return (
                        <tr className="divide-y-[1.5px] divide-blue-200" key={i}> 
                            <td>
                                {i}
                            </td>
                            <td>
                                {data.Grade}
                            </td>
                            <td>
                                {data.Major}
                            </td>
                            <td>
                                {data.Story}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}