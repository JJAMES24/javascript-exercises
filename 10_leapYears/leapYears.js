const leapYears = function(year) {
  
  
  let isYear = false
  
  if(year%4===0 && year%100 !==0 )
  {
    isYear=true;
    return isYear;
  }else
  {
    if(year % 400 ===0){return isYear=true}
    return isYear;
  }

};

// Do not edit below this line
module.exports = leapYears;
