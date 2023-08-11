import { useState } from 'react'
import './App.css'
import MyBirthday from './MyBirthday.jsx'
import ShowAge from './ShowAge.jsx'



function App() {

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  function calculate(dateToCalculate){
     const actualYear = new Date().getFullYear();
     console.log(actualYear);
     const actualMonth = new Date().getMonth()+1;
     console.log(actualMonth);
     const actualDay = new Date().getDate();
     console.log(actualDay); 
     
     var newAge = actualYear - dateToCalculate[2]
     var newMonth = 0
     var newDay = 0
     
     if(actualMonth <= dateToCalculate[1] && actualDay < dateToCalculate[0])
     {
        newAge--;
        newMonth = 12 - dateToCalculate[1] + actualMonth - 1;
        newDay = 30 + actualDay - dateToCalculate[0];
     } else if(actualMonth<dateToCalculate[1]){
      newAge--;
      newMonth = 12+actualMonth-dateToCalculate[1];
      newDay = actualDay-dateToCalculate[0];
    } else {
      newMonth = actualMonth - dateToCalculate[1];
      newDay = actualDay - dateToCalculate[0];
    }     
      
     setYears(newAge);
     setMonths(newMonth);
     setDays(newDay);
  }

  return (
  <>
    <MyBirthday calculate={calculate}/>  
    <ShowAge years={years} months={months} days={days}/>
  </>
  )
}

export default App
