import React, { useState } from 'react'
import {details} from './studentDetails'
import './student.css'

const Students = () => {
    // console.log(details);
    const [data, setdata] = useState(details)
    const [newStudent, setNewStudent] = useState({ fnm: '', lnm: '', dob: '', place: '' })


    const viewDetails =(fnm,lnm,age)=>{
        alert(`${fnm} ${lnm} age is ${age}`);
    }
    
    const deleteDetails =(id,fnm)=>{
    //    let x = data.filter((elem)=>{
    //         return elem.id !== id;
    //     })
    //     setdata([...x]);
        // other type
        let bool = window.confirm(`Are you sure you want to delete ${fnm} data..?`)
        // bool? setdata(data.filter(elem=> elem.id !== id)):alert("not deleted")
        if(bool){
            setdata(data.filter(elem=> elem.id !== id))
            alert(`${fnm} data deleted`);
        }
        else{
            alert(`${fnm}'s data not deleted`);
        }
       
    }

    const deleteAllUsers = () => {
        let bool = window.confirm(`Are you sure you want to delete all the data..?`)
        bool?setdata([]):alert("not deleted")
    }

    const addStudent = () => {
        if (newStudent.fnm && newStudent.lnm && newStudent.dob && newStudent.place) {
            setdata([...data, { id: data.length + 1, ...newStudent }])
            setNewStudent({ fnm: '', lnm: '', dob: '', place: '' })
        } else {
            alert("Please fill out all fields.")
        }
    }
    
  return (
    <>
    <h1>Student Details</h1>
    <div className="stdDetails">
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Place</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem,ind)=>{
                        let {id,fnm,lnm,dob,place } = elem
                        let date = new Date()
                        let age = date.getFullYear()-dob;
                        return(
                            <>
                            <tr>
                                <td>{ind+1}</td>
                                <td>{fnm}</td>
                                <td>{lnm}</td>
                                <td>{dob}</td>
                                <td>{age}</td>
                                <td>{place}</td>
                                <td>
                                    <button  className='viewBtn'
                                    onClick={()=>viewDetails(fnm,lnm,age)}
                                    >View</button>
                                </td>
                                <td>
                                    <button className='deleteBtn'
                                    onClick={()=>deleteDetails(id,fnm)}
                                    >Delete</button>
                                </td>
                            </tr>
                            </>
                        )
                    })}
                    <tr>
                        <th colSpan={4}>
                   
                       {(data.length!==0)?
                             <button onClick={deleteAllUsers}
                             >Delete All users</button>
                            :
                            <div>data not found</div> 
                    }
                        </th>
                        {/* <th colSpan={4}>
                            <button>Add Student</button>
                        </th> */}
                        
                    </tr>
                    <tr>
                    <td colSpan={8} >
                                <input 
                                    type="text"
                                    placeholder="First Name"
                                    value={newStudent.fnm}
                                    onChange={(e) => setNewStudent({ ...newStudent, fnm: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={newStudent.lnm}
                                    onChange={(e) => setNewStudent({ ...newStudent, lnm: e.target.value })}
                                />
                                <input
                                    type="number"
                                    placeholder="Year of Birth"
                                    value={newStudent.dob}
                                    onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Place"
                                    value={newStudent.place}
                                    onChange={(e) => setNewStudent({ ...newStudent, place: e.target.value })}
                                />
                                <button onClick={addStudent}>Add Student</button>
                            </td>
                    </tr>
                 
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Students                    