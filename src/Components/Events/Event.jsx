import React from 'react'
import './Event.css'

const Event = () => {
    const handliClick = ()=>{
        let fnm = "Nayana C"
        let lnm = "Gowda"
        alert(`My name is  ${fnm} ${lnm}`)
    }
    const printMsg = (msg)=>{
       
        alert(msg)
    }

    const calAge = (age)=>{
        if(age==='number'){
        let currDate = new Date();
        let res = currDate.getFullYear()
        alert(`Your age is ${res - age}`)
        }
        else{
            alert("Please enter a valid data!")
        }
    }
    const generateOTP = ()=>{
        let OTP = Math.floor(1000 + Math.random() * 9000);
        alert(`Your OTP is ${OTP}`)
    }

    const data = [
        {
            fnm:"Ashwani ",
            lnm:"Raj",
            dob:2001
          
        },
        {
            fnm:"nayana ",
            lnm:"Gowda",
            dob:2002
          
        },
        {
            fnm:"Rajeev ",
            lnm:"Ranjan",
            dob:2000
          
        }
    ]

    const details = (fnm,lnm,dob)=>{
        let currDate = new Date();
        let res = currDate.getFullYear()
        alert(`My name is  ${fnm} ${lnm} and I am ${res - dob} years old`)
    }


  return (  
    <>
    <div className="events">
        <button onClick={()=>alert("hello")}>
            Click me
        </button>
        <br />
        <button onClick={handliClick}>
           What is ur name?
        </button>
        <br />
        <button onClick={()=>printMsg("Hello")}>
           Print Message
        </button>
        <br />
        <button onClick={()=>calAge("hi")}>
           Click to know ur Age
        </button>

        <br />
        <button onClick={generateOTP}>
          Generate OTP
        </button>
        <br /><br /><br />
    <div>
        {data.map((elem)=>{
            let {fnm,lnm,dob} = elem
            return (
                <>
              <div className="container">
                <div>{fnm}</div>
                <div>{lnm}</div>
                <div>{dob}</div>
                <div><button onClick={()=>details(fnm,lnm,dob)} >view</button></div>
              </div>
                </>
            )
        })}
    </div>
    </div>
  

    </>
  )
}

export default Event