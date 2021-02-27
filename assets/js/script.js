

//Diplay current date/time at top of calender (we did it hooray)
function update() {
    $('#currentDay').html(moment().format('MMM Do, h:mm a'));
};
    
setInterval(update, 1000);
update();

//time blocks for work hours (9-5)(we did it hooray)


//TODO: color code for past/present/future

/* let time = the input value of the column with the hours in it
let currentTime= the time as displayed by the clock

we only want this function to read the hour value because as soon as the minute is not the same as the "present" it will move it. we only want it to move on the hour value.

function (timeInterval) {

if ( time = currentTime.hour) {
    .classAdd present
}
if (time (is before) < currentTime.hour) {
    .classAdd future
}

if (time > currentTime.hour) {
    .classAdd past
}
} */


//enter text/event into time block (we did hooray)

//save text/event into local storage with a button



