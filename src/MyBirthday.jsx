import {useState} from 'react';
import './MyBirthday.css'

export default function MyBirthday({calculate}){

     const [date, setDate] = useState([null, null, null]);


     const check = (dateToCheck) =>{
          console.log(dateToCheck[0]);
          setDate(dateToCheck);
          dateToCheck[0] && dateToCheck[1] && dateToCheck[2] ? calculate(dateToCheck) : null;
     }

     const updateDate = (e) => {
          const newDate = [...date]
          console.log(e.target.id);
          e.target.id == "day" && e.target.value <= 31 ? newDate[0] = e.target.value : null;
          e.target.id == "month" && e.target.value <= 12 ? newDate[1] = e.target.value : null;
          e.target.id == "year" ? newDate[2] = e.target.value : null;

          check(newDate)
     }


     return(
     <>
          <div className="dayMonthYearContainer">
               <div className="dateInputCont">
                    <span>DAY</span>
                    <input id="day" onChange={updateDate} placeholder='DD'></input>
               </div>

               <div className="dateInputCont">
                    <span>MONTH</span>
                    <input id="month" onChange={updateDate} placeholder='MM'></input>
               </div>

               <div className="dateInputCont">
                    <span>YEAR</span>
                    <input id="year" onChange={updateDate} placeholder='YYYY'></input>
               </div>
          </div>
    </>
     )
}