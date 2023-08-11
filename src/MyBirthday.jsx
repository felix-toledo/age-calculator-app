import {useState} from 'react';

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
          e.target.id == "day" && e.target.value < 31 ? newDate[0] = e.target.value : null;
          e.target.id == "month" && e.target.value < 12 ? newDate[1] = e.target.value : null;
          e.target.id == "year" ? newDate[2] = e.target.value : null;

          check(newDate)
     }


     return(
          <>
               <div className="dayMonthYearContainer">
                    <div className="dayCont">
                         <span>DAY</span>
                         <input id="day" onChange={updateDate} placeholder='day'></input>
                    </div>
     
                    <div className="dayCont">
                         <span>MONTH</span>
                         <input id="month" onChange={updateDate} placeholder='day'></input>
                    </div>

                    <div className="dayCont">
                         <span>YEAR</span>
                         <input id="year" onChange={updateDate} placeholder='day'></input>
                    </div>

      </div>
    </>
     )
}