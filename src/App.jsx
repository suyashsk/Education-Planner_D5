
import { useState,useEffect } from 'react'
import './App.css'
import Subject from './Components/Subject';

function App() {
    const[subject,setSubject] = useState("");
    const[hour,setHour] = useState("");
    const[subjects,setSubjects] = useState([]) 

    // let subjects = [];
    function handleSubmit(e){
      e.preventDefault();
      let copyArray = [...subjects]
      copyArray.push(
        {
          subject:subject,
          hour:parseInt(hour)
        }
      )
      setSubjects(copyArray);
      
    }
    console.log(subjects);

    const increaseHour = (index) =>{
      let copyArray = [...subjects]
      copyArray[index]["hour"] +=1;
      setSubjects(copyArray);
    }
    const decreaseHour = (index) =>{
      let copyArray = [...subjects]
      if(subjects[index]["hour"]>0){
        copyArray[index]["hour"] -=1;
        setSubjects(copyArray);
      }
      else{
        copyArray[index]["hour"]=0;
        setSubjects(copyArray);
      }
      
    }

  useEffect(()=>{
    if(subjects.length>0) localStorage.setItem("subject",JSON.stringify(subjects))
   },[subjects]);
   

   useEffect(()=>{
    if(localStorage.getItem("subject")){
      let arr = JSON.parse(localStorage.getItem("subject"));
      setSubjects(arr)
    }
      
   },[])
  return (
    <>
    <div className="w-full h-full mt-40  text-center flex flex-col justify-center items-center ">
      <div className="form ">
     <h1 className='text-bold text-[25px] text-black mb-2'>Geekster Education Planner</h1>
     <form onSubmit={handleSubmit}>
     <input type="text" className="px-2 py-1 border-solid border-2 border-black rounded-md" placeholder='Subject'  onChange={(e)=>setSubject(e.currentTarget.value)} />
     <input type="number" className="ml-2 w-[70px] px-2 py-1 border-solid border-2 border-black rounded-md" placeholder='Hour' onChange={(e)=>setHour(e.currentTarget.value)}/>
     <input type="submit" className="text-lg text-white ml-3 bg-blue-500 px-2 py-1 rounded-md" value="Add"/>
     </form>
     </div>
     <div className="subjectss mt-8 flex flex-col justify-center text-center ">
     {subjects.map((item,index) => (
     
     <Subject
     increase={increaseHour} 
     decrease={decreaseHour} 
     subject={item.subject} 
     hour={item.hour}
     index={index} />

      ))}
     </div>
      </div>
    </>
  )
}

export default App
