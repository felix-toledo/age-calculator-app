export default function MyBirthday({calculate}){
     
     var newDay = null;
     var newMonth = null;
     var newYear = null;

     const check = () =>{
          newDay && newMonth  && newYear ? calculate(newDay, newMonth, newYear) : null;
          
     }

     const dayChange = (e) => {
          e.target.value < 31 ? newDay = e.target.value : null;
          check();
        } 
        const monthChange = (e) => {
          e.target.value < 12 ? newMonth = e.target.value : null;
          check();
        }  
        const yearChange = (e) => {
          e.target.value > 1000 ? newYear = e.target.value : newYear = null;
          check();
     }

     return(
          <>
               <div className="dayMonthYearContainer">
                    <div className="dayCont">
                         <span>DAY</span>
                         <input type="day" onChange={dayChange} placeholder='day'></input>
                    </div>
     
                    <div className="dayCont">
                         <span>MONTH</span>
                         <input onChange={monthChange} placeholder='day'></input>
                    </div>

                    <div className="dayCont">
                         <span>YEAR</span>
                         <input onChange={yearChange} placeholder='day'></input>
                    </div>

      </div>
    </>
     )
}