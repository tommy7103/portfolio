function clock(){
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();
    const secondDeg = (second * 360 / 60) + 90 ;
    const minuteDeg = (minute * 360 / 60) + ((second * 360 / 60) / 60) + 90;
    const hourDeg = (hour * 360 / 12) + ((minute * 360 / 60) / 12)  + ((second * 360 / 60) / 720) + 90;
    const animation = document.createElement("style");
    animation.innerHTML = "@keyframes rotation-s {0% {transform: rotate(" + secondDeg + "deg)}100% {transform: rotate(" + (secondDeg + 360) + "deg)}}@keyframes rotation-m {0% {transform: rotate(" + minuteDeg + "deg)}100% {transform: rotate(" + (minuteDeg + 360) + "deg)}}@keyframes rotation-h {0% {transform: rotate(" + hourDeg + "deg)}100% {transform: rotate(" + (hourDeg + 360) + "deg)}}";
    document.head.appendChild(animation);
    function digitalClock(){
        let nowTime= new Date();
        let nowMinute = nowTime.getMinutes();
        let nowHour = nowTime.getHours();
        const month = nowTime.getMonth() + 1;
        const date = nowTime.getDate();
        const day = nowTime.getDay();
        const dayName = ["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."]
        const today = document.getElementById("time_today_date");
        const todayTime = document.getElementById("time_today_time");
        today.textContent = month + "月" + date + "日" + "(" + dayName[day] + ")";
        if(nowMinute < 10){
            todayTime.textContent = nowHour + ":" + "0" + nowMinute;
        }else{
            todayTime.textContent = nowHour + ":" + nowMinute;
        }
    };
    setInterval(digitalClock,1000);
};
clock();
window.addEventListener("load",function(){
    const $mainVisualTime = document.getElementById("js-clock");
    setTimeout(function(){
        fadeIn($mainVisualTime,500,0,1);
        $mainVisualTime.style.display="inline-block";
    },2400);
});
function mainVisualCircleAnime(){
    const fragment =document.createDocumentFragment();
    const $circle = document.getElementById("js-circle");
    for(let i=2; i < 12; i++){
        const circleNumber = i;
        const circleNumberClass = "circle" + circleNumber;
        const circles = document.createElement("div");
        fragment.appendChild(circles);
        function circleAnime(name){
            circles.classList.add("circle" , circleNumberClass , name);
        };
        if(1 < circleNumber && circleNumber < 6){
            circleAnime("circle-first");
        }else if(5 < circleNumber && circleNumber < 9){
            circleAnime("circle-second");
        }else{
            circleAnime("circle-third");
        };
    };
    $circle.appendChild(fragment);
};
mainVisualCircleAnime();
(function(){
    const $worksItems = document.querySelectorAll(".js-works_items");
    const $header = document.getElementById("header");
    const $body = document.getElementsByTagName("body")[0];
    for(let i= 0; i < $worksItems.length; i++){
        $worksItems[i].addEventListener("click", function(){
            const target = this.dataset.target;
            const modal = document.getElementById(target);
            const closeBtn = document.querySelectorAll(".button_close");
            $header.style.visibility = "hidden";
            fadeIn(modal, 300, 0, 1);
            $body.classList.add("fixed");

            for(let d= 0; d < closeBtn.length; d++){
                closeBtn[d].addEventListener("click", function(e){
                    e.preventDefault();
                    fadeOut(modal, 300, 1, 0);
                    $header.style.visibility = "visible";
                    $body.classList.remove("fixed");
                })
            }
        })
    }
})();
(function(){
    var flag = false;
    window.addEventListener("scroll",function(){
        const scroll = window.scrollY;
        const scrollBottom = window.innerHeight + scroll;
        const content = document.getElementById("works_slider");
        const contentPositionY = content.getBoundingClientRect().top + scroll - 200;
        const contentBottom = content.clientHeight + contentPositionY;
        const $scrollHorizon = document.getElementById("js-scroll");
        if(contentBottom >= scroll && scroll >= contentPositionY){
            if(!flag){
                flag = true;
                fadeIn($scrollHorizon, 300, 0, 1);
                setTimeout(() => {
                    fadeOut($scrollHorizon, 300, 1, 0);
                }, 4000);
            }
        }else{
            flag = false;
            fadeOut($scrollHorizon, 300, 1, 0);
        }
    });
})();