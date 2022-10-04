







function startCount(el) {
    console.log("test start count")
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}
//end stats

// Start Skills 
let progressSpans = document.querySelectorAll(".the-progress span");
 let skillls = document.querySelector(".our-skills");
 // stats
 let nums = document.querySelectorAll(".stats .number");
 let statsSection = document.querySelector(".stats");
 let started = false;
 
 window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((number) => startCount(number));
        };
        started = true
    }
    //end stats
    if (window.scrollY >= skillls.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
// end Skills 


// Start Events

// the end of the year
// 1000 mullisecond = 1 secound
let countDownDate = new Date("Apr 31, 2022 23:59:59").getTime();
// console.log(countDownDate)

let conter = setInterval(() => {
    // get time now
    let dateNow = new Date().getTime();

    //find the date diffrent  between now and countdown date
    let dateDeff = countDownDate - dateNow;

    // get time units
    // let days = Math.floor(dateDeff / 1000 / 60 / 60 / 24); anther
    let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));


    let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDeff % (1000 * 60 * 60 )) / (1000 * 60 ))
    let secound = Math.floor((dateDeff % (1000 * 60)) / 1000)

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = secound;

    if (dateDeff < 0) {
        clearInterval(conter)
    }
}, 1000);
