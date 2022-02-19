function $(query) {
    return document.querySelector(query);
}

// add an onload event listener
window.addEventListener('load', function() {
    paragraph = $('div#container2');
    // make paragraph visible
    paragraph.style.transformOrigin = 'left';
    paragraph.style.transform = 'translatex(-1000px)';
    paragraph.style.visibility = 'visible';
    // make the paragraph transtalte to the postition 100px down the page
    $('h2').addEventListener('click', function() {
        console.log('clicked');
        let chip = $('h2')
        chip.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
        chip.style.transform = 'translateY(-1000px)';
        paragraph.style.visibility = 'visible';
        paragraph.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
        // make the paragraph transtalte to the postition 100px down the page
        paragraph.style.transform = 'translatex(1000px)';
 
    });
    moveed = 0;


    $('html').addEventListener('mousewheel', function(e){
        if(e.wheelDelta < 0) {
            //scroll down
            if(moveed < window.innerHeight/2) {
                moveed = moveed + 30;
                console.log('Down');
                console.log(moveed);
                console.log(window.innerHeight/2);

                
                if (moveed < window.innerHeight/2) {
                    console.log('move');
                    document.getElementById("scroller2").style.top = moveed*1.2 + "px";
                    document.getElementById("scroller").style.top = moveed*1.2 - 20 + "px";    
                    document.getElementById("scroll-icon").style.top = moveed*3 - 20 + "px";    
                };

        };
            if(moveed > window.innerHeight/2) {
                console.log('end');
                document.getElementById("scroller2").style.transition = "all 1s cubic-bezier(1, 0.31, 0.4, 0.93) 0s";
                document.getElementById("scroller2").style.width = "100%";
                
            }

        //prevent page from scrolling
        return false;
    };


    });
});