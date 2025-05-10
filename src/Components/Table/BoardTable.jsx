import axios from "axios";
import { useEffect, useState } from "react"
import Table from "./Table";

export const BoardTable=()=>{
    const [data,setData] = useState([]);
    

    return(
        <Table data={data}/>
    )
}