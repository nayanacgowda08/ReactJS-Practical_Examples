import React from 'react';
import './App.css'
// import Event from './Components/Events/Event';
// import CompA from './Components/PropsDrilling/CompA';
// import Parent from './Components/Props/Parent';
// import MovieCards from './Components/Props_project/MovieCards';
// import IncDec from './Components/HOOKS/useState/IncDec';
// import ChangeContent from './Components/HOOKS/useState/ChangeContent';
// import Toggle from './Components/HOOKS/useState/Toggle';
// import Accordian from './Components/Accordian/Accordian';
// import ToggleImg from './Components/HOOKS/useState/ToggleImg';
import Students from './Components/HOOKS/useState/StudentDetails/Students';
// import ImageGallery from './Components/ImageGallery/ImageGallery';
// import Cards from './Components/Cards/Cards';
// import StudentDetails from './Components/Student/StudentDetails';
// import Employee from './Components/Employee_Table/Employee';
// import Basic from './Components/Basic';
function App(){
  return (
    //  fragemnts
    <>          
    <div className='app' >
      {/* <h1>Hello, Welcome to the Gallery!</h1> */}
      {/* <h1>Welcome to ReactJS</h1> */}
      {/* <button>CLick me</button> */}
    </div>

    {/* <Basic /> */}
    {/* <ImageGallery/> */}
    {/* <Cards/> */}
    {/* <StudentDetails/> */}
    {/* <Employee/> */}
    {/* <Event/> */}
    {/* <CompA/> */}
    {/* <Parent/> */}
    {/* <MovieCards/> */}
    {/* <IncDec/>
    <ChangeContent/>
    <br />
    <Toggle/>
    <br />
    <Accordian/>
    <br />
    <ToggleImg/> */}
    <Students/>
    </>  //fragemnts
  )
}

export default App;