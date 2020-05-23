var currentday = new Date();       //object to store current date
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days =["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

function renderDate() {             //in current day object already the current date is store
    currentday.setDate(1);          //setting the date to 1
    var day = currentday.getDay();  //it will return the day of 1 date(example 1 is on 6th day(saturday))
    var today = new Date(); 

    //to get the end date of current month  
    var endDate = new Date(
        currentday.getFullYear(), 
        currentday.getMonth() + 1, //+1 for current month:may
        0
    ).getDate();                //it will return the last day of month
                
    // if we get that this months start from saturday the previous 5 days relate to the previous month
    

    //to get the previous date logic of last month
    var prevDate = new Date(currentday.getFullYear(),currentday.getMonth(),0).getDate();

    //array to show all months in the header part
   
    //showing of months in header
    document.getElementById("month").innerHTML = months[currentday.getMonth()];
    document.getElementById("year").innerHTML= currentday.getFullYear();
    
    //for showing of string date
    
    
    var cells = ""; //to store numbers of previous month on same page callender
        for (var x = day; x > 0; x--) {
            cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
        }

    console.log(day);  //console to show dates number in cells
    
    //to make the current day in the active class to highlight
    for (var i = 1; i <= endDate; i++) {
        if (i == today.getDate() && currentday.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
        else
            cells += "<div>" + i + "</div>"; //+= to store even the previous numbers in cell
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

//function to move previous and next button and show months
function moveDate(direction) {
    if (direction == "prev") { //decreament for previous month
        currentday.setMonth(currentday.getMonth() - 1);
    } else if (direction == 'next') { //increament for next month
        currentday.setMonth(currentday.getMonth() + 1);
    }
    renderDate();
}

//function to show days
$(function(){
    var length = days.length;  //storing of length
    var text="";
    for(var i = 0; i<=length-1;i++){
         text += days[i] + "&nbsp&nbsp";
}
   document.getElementById("getDays").innerHTML =text;  //for printing days in string
});


//function to select year
$(function(){
    var $select = $(".year");
    for (i=1950;i<=2050;i++){   //for loop for year range
        $select.append($('<option></option>').val(i).html(i))
    }

    renderDate();
});

//FUNCTION to select Months
$(function() {
    for(var m = 0; m <= 11; m++) { //for for accessing and showing the arraylist
    var optn = document.createElement("OPTION");
    optn.text = months[m];
     document.getElementById('mon').options.add(optn);
}

});

$(function() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+"&nbsp"+time;
    document.getElementById('date').innerHTML =dateTime;
});

/*function myDate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById('date').innerHTML =dateTime;

}*/