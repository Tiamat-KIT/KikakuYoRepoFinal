import { NextResponse } from "next/server";
const handler = async (request: Request) => {
    const fetchData = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1qOv5-b5PGoEfpr2DpI6qGFKc9htjq6qJVp4lxWL8GVQ/values/submit?key=AIzaSyBBbda2OLwZWizqfk60R4BbFD8Ji4PEnV0"
        ,{method: "GET"})
            .then(response => response.arrayBuffer())
            .then(data => data)

        return NextResponse.json(fetchData)
}   

export { handler as GET, handler as POST }