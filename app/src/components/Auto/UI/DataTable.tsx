export default function DataTable(){

    const TestedItems = [{
        name: "test",
        time: "test"
    },
    {
        name: "test",
        time:"test"
    }]
    return (
    <>
        <table className="table"> 
        <thead className="overflow-x-auto">
            <tr>
                <th />
                <th>Name</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {TestedItems.map((item,i) => {
                return (
                    <tr>
                        <th>{i}</th>
                        <th>{item.name}</th>
                        <th>{item.time}</th>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </>
    )
}