
function update() {
    $('#currentDay').html(moment().format('MMM Do, h:mm a'));
    interval();
};
    
setInterval(update, 1000);
update();


function interval() {
let timeIntervalEls= $(".time-interval")

    timeIntervalEls.each (function(index, item) {
        let hour= index + 9;
        let time= moment().hour(hour);

        if(moment().unix() > time.unix()) {
            item.classList.add("past");
        } 
        else if(moment().hour() == time.hour()) {
            item.classList.add("present");
        }
        else {
            item.classList.add("future");
        }
    });
};



$(".time-interval").each (function(index, item) {
    item.value = localStorage.getItem(index + 9);
})

$(".saveBtn").each (function(index, item) {
    let textArea= $(".time-interval")[index]
    item.addEventListener('click', function () {
        localStorage.setItem(index + 9, textArea.value);
    })
});



