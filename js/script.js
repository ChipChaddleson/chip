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
            if(moveed < 1920) {
                console.log('Down');
                moveed = moveed + 30;

                $('#scroller').style.transform = "translate(-50%," + moveed + '%)';
                console.log(moveed);
        };

        //prevent page from scrolling
        return false;
    };


    });
});