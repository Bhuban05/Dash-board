import { faEllipsis, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./CollegeList.css"
import { useState } from "react"

export const CollegeList=()=>{

    const [seen,setSeen] = useState(false);

    return<>
    <div id="collegeContainer">
        <div id="collegeSubContainer">
            <div id="collegeContainer1">
                <div id="collegeProfile"><button>T</button></div>
                <ul id="collegeMenu">
                    <li onClick={()=>{
                        setSeen(!seen)
                    }} style={{
                        padding:"5px 10px"
                    }}><FontAwesomeIcon icon={faEllipsisV}/></li>
                    {seen && 
                        <ul style={{display:"flex",
                            justifyContent:"right",
                            flexDirection: "column",
                            position:"absolute",
                            padding:"15px",
                            backgroundColor:"white",
                            boxShadow:"0px 0px 4px -2px black",
                            borderRadius:"5px"
                        }}>
                            <li>Delete</li>
                            <li>Rename</li>
                    </ul>
                    }
                </ul>

            </div>
            <h1>College Name</h1>
            <div id="collegeContainer2">
                <ul>
                    <li>college name</li>
                    <li>college location</li>
                    <li>Board number</li>
                </ul>
            </div>
        </div>
    </div>
    </>
}