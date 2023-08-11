import './ShowAge.css'

export default function ShowAge({daysMonthsYears}){
     const newDate = [...daysMonthsYears]
     console.log('asdasd', daysMonthsYears)

     return(
          newDate.map((newDate, dma) => {
               return(
                    <div className='showingContainer' key={dma}>
                         <div><span>{newDate} </span><span className='text'>{dma === 0 ? ' years' : dma === 1 ? ' months' : ' days'}</span></div>
                    </div>
                    )
               })
          )
     }       
