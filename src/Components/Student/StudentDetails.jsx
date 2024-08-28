import React from 'react'
import './Student.css'
import {data} from './studentData'
function StudentDetails() {
    // console.log(data);
    
  return (
    <>
        <div className="student">
            <div className="header">Priority Student</div>
            <div className="container">
                {/* {data.map((elem)=>{
                    return (
                        console.log(elem)
                        
                    )
                })} */}

                <table border={2}>
                    <thead>
                        <tr>
                            <th>SlNo.</th>
                            <th>First Name:</th>
                            <th>Last Name:</th>
                            <th>YOP:</th>
                            <th>Degree</th>
                            <th>Stream</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((elem,indx)=>{
                           
                           let {fnm,lnm,place,yop,deg,stream} = elem
                           return(
                            <>
                            <tr>
                                <td>{indx+1}</td>
                                <td>{fnm}</td>
                                <td>{lnm}</td>
                                <td>{place}</td>
                                <td>{yop}</td>
                                <td>{deg}</td>
                                <td>{stream}</td>
                            </tr>
                            </>
                           )
                       })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default StudentDetails