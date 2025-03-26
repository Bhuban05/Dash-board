import { faEllipsis, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './BoardList.css';
import { useState } from "react"

export const BoardList=()=>{

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
                    }}>
                        <FontAwesomeIcon icon={faEllipsisV}/></li>
                    {seen && 
                        <ul 
                        style=
                        {{display:"flex",
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
            <h1>Tribhuwan University</h1>
            <div id="collegeContainer2">
                <ul>
                    <li>Aadim National College</li>
                    <li>Chuchepati, Chabahil, Kathmandu</li>
                    <li>12345</li>
                </ul>
            </div>
        </div>
        {/* ----------------------------------- */}
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
            <h1>Tribhuwan University</h1>
            <div id="collegeContainer2">
                <ul>
                    <li>Aadim National College</li>
                    <li>Chuchepati, Chabahil, Kathmandu</li>
                    <li>12345</li>
                </ul>
            </div>
        </div>
    </div>
    </>
}