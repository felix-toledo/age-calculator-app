import { useState } from 'react'
import './App.css'
import MyBirthday from './MyBirthday.jsx'
import ShowAge from './ShowAge.jsx'



function App() {

  const [daysMonthsYears, setDaysMonthsYears] = useState(["--", "--", "--"])

  function calculate(dateToCalculate){
     const actualYear = new Date().getFullYear();
     const actualMonth = new Date().getMonth()+1;
     const actualDay = new Date().getDate();

     
     var newAge = actualYear - dateToCalculate[2]
     var newMonth = 0
     var newDay = 0
     
     console.log(actualMonth, dateToCalculate[1], actualDay, dateToCalculate[0]);
     if(actualMonth <= dateToCalculate[1] && actualDay < dateToCalculate[0])
     {
        newAge--;
        newMonth = 12 - dateToCalculate[1] + actualMonth - 1;
        newDay = 30 + actualDay - dateToCalculate[0];
     } else if(actualMonth < dateToCalculate[1]){
      newAge--;
      newMonth = 12+actualMonth-dateToCalculate[1];
      newDay = actualDay-dateToCalculate[0];
    } else {
      newMonth = actualMonth - dateToCalculate[1];
      newDay = actualDay - dateToCalculate[0];
    }     
      
    setDaysMonthsYears([newAge, newMonth, newDay]);
  }

  return (
  <div className="appContainer">
    <MyBirthday calculate={calculate}/>  
    <ShowAge daysMonthsYears={daysMonthsYears}/>
  </div>
  )
}

export default App
