import Table from "./Table";

export default function StudentId(){
    const columns = ["Id", "Name", "Course","Age"];
    const data = [
    { Id: "101", Name: "$Bhuban", Course: "BBA", Age:"21" },
    { Id: "102", Name: "Pemba", Course: "BCA", Age: "22" },
    ];
    return<>
    <Table columns={columns} data={data}/>
    </>
}