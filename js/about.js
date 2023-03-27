// テキストデコレーションアニメ
(function(){
    window.addEventListener("scroll", function(){
        const $aboutHead = document.getElementById("js-underline");
        const scroll = window.scrollY;
        const position = $aboutHead.getBoundingClientRect().top + scroll - 300;
        if(scroll >= position){
            $aboutHead.classList.add("under-line");
        }else{
            $aboutHead.classList.remove("under-line");
        }
    })
})();