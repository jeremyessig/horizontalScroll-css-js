const bodyHTML = document.body

function setOverflow(body){
    // if (window.matchMedia("(max-width: 880px)").matches) {
    if(window.innerWidth < 880){
        body.style.overflowY = "scroll";
        console.log("scroll")
    }else{
        body.style.overflow = "hidden";
        console.log("hidden")
        window.scrollTo(0, 0);
    }
}


(function(){

    setOverflow(bodyHTML);
    
    window.addEventListener('resize', ()=>{
        setOverflow(bodyHTML)
    });

})()



