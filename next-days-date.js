 function deliveryTime() {
  let n = 3; //number of days to add. 
  let today = new Date(); //Today's Date
  let requiredDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()+n)
  const months = ['01','02','03','04', '05', '06', '07', '08', '09', '10', '11', '12'];
  // Get all results
  //Get the month
  let resultMonth = months[requiredDate.getMonth()];
  //Get the day
  let dayC = requiredDate.getDate();
  //Get the year
  let year = requiredDate.getFullYear();
  if(dayC < 10) {
    var updatedDay = "0" + dayC;
  } else {
    var updatedDay = dayC;
  }
 document.getElementById("time").innerHTML =   updatedDay + '.' + resultMonth + '.' + year;
 }


deliveryTime();
