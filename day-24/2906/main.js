// Q. Find the Number of Days Between Two Dates.

const calculateDaysBetweenDates = (d1,d2)=>{
    let date1 = new Date(d1)
    let date2 = new Date(d2)


    let diff =Math.abs(date2 - date1);


    return diff/(24 * 60 * 60 * 1000);
    
    
}



