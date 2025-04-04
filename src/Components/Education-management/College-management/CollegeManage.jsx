import Table from "../../Table/Table"

export default function CollegeManage() {
    const data = [
        { CollegeName: "Aadim National College", Email: "pemba@gmail.com", phone: "9848484848", Address: "ktm", Status:<span  className="bg-amber-500  px-3  py-2  rounded-4xl  text-white">pending.....</span>, Action: <button className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer">Approved</button> },

        { CollegeName: "Aadim National College", Email: "pemba@gmail.com", phone: "9848484848", Address: "ktm", Status:<span className="bg-amber-500  px-3  py-2  rounded-4xl  text-white">pending.....</span>, Action: <button className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer">Approved</button> },
    ]

    return <>
        <Table data={data} />
    </>
}