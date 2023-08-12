import {useState} from 'react';
import './MyBirthday.css'

export default function MyBirthday({isInFuture, calculate}){

     const [date, setDate] = useState([null, null, null]);
     const [validMonth, setValidMonth] = useState(true);
     const [validDay, setValidDay] = useState(true);
     const [validYear, setValidYear] = useState(true);

     var hola;

     const check = (dateToCheck) =>{
          console.log(dateToCheck[0]);
          
          dateToCheck[0] && dateToCheck[1] && dateToCheck[2] ? calculate(dateToCheck) : null;
     }    

     const inputChange = (e) => {
          const newDate = [...date];
          e.target.id == "day" ? (newDate[0] = e.target.value) : null;
          e.target.id == "month" ? (newDate[1] = e.target.value) : null;
          e.target.id == "year" ? newDate[2] = e.target.value : null;
          setDate(newDate);
     }

     const updateDate = () =>{
          const dateToCheck = [...date]
          const actualYear = new Date().getFullYear();
          console.log(dateToCheck)
          dateToCheck[0] <= 31 ? setValidDay(true) : (setValidDay(false), dateToCheck[0]= null);
          dateToCheck[1] <= 12 ? setValidMonth(true) : (setValidMonth(false), dateToCheck[1]= null);
          dateToCheck[2] <= actualYear ? setValidYear(true) : (setValidYear(false), dateToCheck[2]= null)
          check(dateToCheck)
     }


     return(
     <>
          <div className="dayMonthYearContainer">
               <div className="dateInputCont">
                    <span className={isInFuture || !validDay ? "adviseDate" : null}>DAY</span>
                    <input onChange={inputChange} className={isInFuture || !validDay ? 'errorInput' : null} id="day"  placeholder='DD'></input>
                    {!validDay ? <span className='advise adviseDate'>Must be a valid day.</span> : null}
               </div>

               <div className="dateInputCont">
                    <span className={isInFuture || !validMonth ? 'adviseDate' : null}>MONTH</span>
                    <input onChange={inputChange} className={isInFuture || !validMonth ? 'errorInput' : null} id="month"  placeholder='MM'></input>
                    {!validMonth ? <span className='advise adviseDate'>Must be a valid month.</span> : null}
               </div>

               <div className="dateInputCont">
                    <span className={isInFuture || !validYear  ? 'adviseDate' : null}>YEAR</span>
                    <input onChange={inputChange} className={isInFuture || !validYear ? 'errorInput' : null} id="year"  placeholder='YYYY'></input>
                    {isInFuture || !validYear ? <span className='advise adviseDate'>Must be in the past.</span> : null}
               </div>
               
               <button className="calculateButton" onClick={updateDate}>Calculate</button >
          </div>
    </>
     )
}