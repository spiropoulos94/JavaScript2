
//countDown(1);
function countDown(minutes) {
    let seconds = minutes * 60
    function timer() {
        console.log(seconds)
        seconds--
    }
    set setInterval(timer, 1000)
}


countDown(1);