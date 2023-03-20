// フェードイン関数
function fadeIn(node,duration,value01,value02){
    if(node.style.display = "none"){
        node.animate([{opacity:value01},{opacity:value02}],{duration:duration});
        node.style.display="block";
    };
};
// フェードアウト関数
function fadeOut(node,duration,value01,value02){
    if(node.style.display === "block" || node.style.display === ""){
        node.animate([{opacity:value01},{opacity:value02}],{duration:duration});
        setTimeout(function(){
            node.style.display="none";
        },duration);
    };
};
window.addEventListener("load",function(){
    const anim = lottie.loadAnimation({
        container: document.getElementById('loading'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'loading.json'
    });
    const $loadingWrapper = document.getElementById("loading_wrapper");
    const $header = document.getElementById("header");
    let path = location.pathname;
    console.log(path);
    setTimeout(function(){
        fadeOut($loadingWrapper,300,1,0);
    },1800);
    setTimeout(function(){
        fadeIn($header,500,0,1);
    },3000);
})
window.addEventListener("scroll",function(){
    const windowScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    function fadeAnime(){
        const fadeUp = document.querySelectorAll(".fadeUpTrigger");
        for(let i = 0; i < fadeUp.length; i++){
            const fadeUpContent = fadeUp[i];
            const fadeUpContents = fadeUpContent.getBoundingClientRect();
            const contentsHeight = fadeUpContents.top + windowScroll + 120;
            const fadeUpClass = "fadeUp";
            if(windowScroll >= contentsHeight - windowHeight){
                fadeUpContent.classList.add(fadeUpClass);
            }else{
                fadeUpContent.classList.remove(fadeUpClass);
            };
        };
    }
    function meterAnime(){
        const skillsMeter = document.querySelectorAll(".skills_meter");
        for(let i = 0;i < skillsMeter.length; i++){
            const meterAnime = skillsMeter[i];
            const meterContents = meterAnime.getBoundingClientRect();
            const meterHeight = meterContents.top + windowScroll + 80;
            const meterClass = "anime";
            if(windowScroll >= meterHeight - windowHeight){
                meterAnime.classList.add(meterClass);
            }else{
                meterAnime.classList.remove(meterClass);
            }
        }
    }
    fadeAnime();
    meterAnime()
});