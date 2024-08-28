import React from 'react'
import { employeeData } from './employeeDetails'
import './Employee.css'
const Employee = () => {
  return (
    <>
    <div className="emplyee">
        <div className="header">
        <h2>Employee Page</h2>
        </div>
        <table border="1" cellPadding={2} borderSpacing= '0px 4px' >
            <thead>
            <tr>
                <th>fnm</th>
                <th>lnm</th>
                <th>dob</th>
                <th>gender</th>
                <th>dept</th>
                <th>salary</th>
                <th>phone</th>
                {/* <th>mail</th> */}
                <th>status</th>
            </tr>
            </thead>
            <tbody>
                       {employeeData.map((elem,indx)=>{
                           
                           let {fnm,lnm,dob,gender,dept,salary,phone,status} = elem
                           return(
                            <>
                            <tr>
                                {/* <td>{indx+1}</td> */}
                                <td>{fnm}</td>
                                <td>{lnm}</td>
                                <td>{dob}</td>
                                <td>{gender}</td>
                                <td>{dept}</td>
                                <td>{salary}</td>
                                <td>{phone}</td>
                                {/* <td>{mail}</td> */}
                                <td>{status}</td>
                            </tr>
                            </>
                           )
                       })}
                    </tbody>
        </table>
        {/* <div className="emp">
            {employeeData}.map((elem)=>{
                return (

                )
            })
        </div> */}
    </div>
    </>
  )
}

export default Employee