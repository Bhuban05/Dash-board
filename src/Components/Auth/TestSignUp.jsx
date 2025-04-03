import React from 'react';
import "./TestSignUp.css";

function TestSignUp() {
    return (
        <div className="containerSignUp" id="containerSignUp">
            <span>LOGO</span>
            <div className="subContainerSignUp" id="subContainerSignUp">
                <span style={{
                    fontSize: "20px",
                    position: "relative",
                    marginTop: "-45px",
                    background: "white",
                    marginBottom: "30px",
                    width: "175px",
                }}>College Information</span>
                <div className="contains">
                    <label>College Name: 
                        <input type="text" className='border-2' />
                    </label>
                    <label>Admin Email: 
                        <input type="text" className='border-2' />
                    </label>
                    <label id='selectCourse'>Select Course: 
                        <div id="selectCourseSub">
                            <label><input type="checkbox" className='border-2' /> BCA</label>
                            <label><input type="checkbox" className='border-2' /> BBS</label>
                            <label><input type="checkbox" className='border-2' /> BBA</label>
                            <label><input type="checkbox" className='border-2' /> BSCist</label>
                        </div>
                    </label>
                    <label>College PAN: 
                        <input type="text" className='border-2' />
                    </label>
                </div>
            </div>
            <div className="subContainerSignUp" id="subContainerSignUp">
                <span style={{
                    fontSize: "20px",
                    position: "relative",
                    marginTop: "-45px",
                    background: "white",
                    marginBottom: "30px",
                    width: "150px",
                }}>College Location</span>
                <div className="contains">
                    <label>Address: 
                        <input type="text" className='border-2' />
                    </label>
                    <label>City: 
                        <input type="text" className='border-2' />
                    </label>
                    <label>State: 
                        <input type="text" className='border-2' />
                    </label>
                    <label>Country: 
                        <input type="text" className='border-2' />
                    </label>
                    <label>Zip Code: 
                        <input type="text" className='border-2' />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default TestSignUp;
