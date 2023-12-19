
export default async function KTable(){
    const fetchData = await fetch("/api/sps")
            .then((response) => response.json())

    
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