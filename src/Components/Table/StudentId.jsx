import Table from "./Table";

export default function StudentId() {
    const data = [
        // { CollegeName: "Aadim National College", Email: "pemba@gmail.com", phone: "9848484848", Address: "ktm", Status:<span  className="bg-amber-500  px-3  py-2  rounded-4xl  text-white">pending.....</span>, Action: <button className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer">Approved</button> },
        // { CollegeName: "Aadim National College", Email: "pemba@gmail.com", phone: "9848484848", Address: "ktm", Status:<span className="bg-amber-500  px-3  py-2  rounded-4xl  text-white">pending.....</span>, Action: <button className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer">Approved</button> },




        { Id: "103", Name: "Sneha", Course: "BBA", Age: "20" },
        { Id: "104", Name: "Priya", Course: "BCA", Age: "23" },
        { Id: "105", Name: "Vikram", Course: "BBA", Age: "22" },
        { Id: "106", Name: "Meera", Course: "BCA", Age: "21" },
        { Id: "107", Name: "Arjun", Course: "BBA", Age: "24" },
        { Id: "108", Name: "Simran", Course: "BCA", Age: "20" },
        { Id: "109", Name: "Karan", Course: "BBA", Age: "23" },
        { Id: "110", Name: "Divya", Course: "BCA", Age: "22" },
        { Id: "111", Name: "Suresh", Course: "BBA", Age: "21" },
        { Id: "112", Name: "Ananya", Course: "BCA", Age: "22" },
        { Id: "113", Name: "Manoj", Course: "BBA", Age: "23" },
        { Id: "114", Name: "Pooja", Course: "BCA", Age: "21" },
        { Id: "115", Name: "Rajesh", Course: "BBA", Age: "22" },
        { Id: "116", Name: "Neha", Course: "BCA", Age: "24" },
        { Id: "117", Name: "Harsh", Course: "BBA", Age: "20" },
        { Id: "118", Name: "Swati", Course: "BCA", Age: "23" },
        { Id: "119", Name: "Ankit", Course: "BBA", Age: "21" },
        { Id: "120", Name: "Tanvi", Course: "BCA", Age: "22" }

    ]

    return <>
        <Table data={data} />
    </>
}