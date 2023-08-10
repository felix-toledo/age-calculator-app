import { useState } from 'react'
import './App.css'
import MyBirthday from './MyBirthday.jsx'
import ShowAge from './ShowAge.jsx'



function App() {

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  function calculate(day, month, year){
     const actualYear = new Date().getFullYear();
     console.log(actualYear);
     const actualMonth = new Date().getMonth()+1;
     console.log(actualMonth);
     const actualDay = new Date().getDate();
     console.log(actualDay); 
     
     const newMonths = actualMonth - month;
     const newDays = actualDay - day;
     if(actualMonth > month){
      const newYears = actualYear - year - 1;
      setYears(newYears);
    } else {
      const newYears = actualYear - year;
      setYears(newYears);
    }
     setMonths(newMonths);
     setDays(newDays);
  }

  return (
  <>
    <MyBirthday calculate={calculate}/>  
    <ShowAge years={years} months={months} days={days}/>
  </>
  )
}

export default App
