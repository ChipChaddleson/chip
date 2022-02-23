function $(query) {
    return document.querySelector(query);
}
titleDrop = false;
titleDrop2 = false;

// add an onload event listener
window.addEventListener('load', function() {
    title = document.getElementById('titles');
    title2 = document.getElementById('titles2');
    par1 = document.getElementById('par1');
    par2 = document.getElementById('par2');

    
    console.log(title);
    console.log(title2);
    title.style.transformOrigin = 'left';
    
    // title.style.transform = 'translatey(-25vw)';
    title2.style.transformOrigin = 'left';
    // title2.style.transform = 'translatex(100vw)';

    par1.style.transformOrigin = 'left';
    par2.style.transformOrigin = 'left';

    paragraph = $('div#container2');
    // make paragraph visible
    paragraph.style.transformOrigin = 'left';
    paragraph.style.left = "-50%";
    paragraph.style.top = "70%";
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
        paragraph.style.left = "50%";
        titleDrop = true;
        if (titleDrop2 == true && titleDrop == true) {
            alowNext();
            dropTitles();
        }
 
    });
    moveed = 0;


    $('html').addEventListener('mousewheel', function(e){
        if(e.wheelDelta < 0) {
            //scroll down
            if(moveed < window.innerHeight/2) {
                moveed = moveed + 30;
                // console.log('Down');
                // console.log(moveed);
                // console.log(window.innerHeight/2);

                
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
                titleDrop2 = true;
                if (titleDrop2 == true && titleDrop == true) {
                    alowNext();
                    dropTitles();
                }
                
            }
        };
    });

    function dropTitles() {
        titleDrop = false;
        titleDrop2 = false;
        console.log('drop');
        title.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
        title.style.left = "25vw";
        title.style.top = "25vh";
        title2.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
        title2.style.left = "75vw";
        title2.style.top = "40vh";
        
    }

    


    var bar = document.getElementById('scroller2');
    let isHover = false;
    // wait for hover
    function alowNext() {
        function dropPar() {
            console.log('part 2 !!!!!!!!!');
            par1.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
            par1.style.left = "25vw";
            par1.style.top = "25vh";
            par3.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
            par3.style.left = "75vw";
            par3.style.top = "25vh";
            par2.style.transition = 'all 1.5s cubic-bezier(.95,.49,.51,1.23)';
            par2.style.left = "75vw";
            par2.style.top = "75vh";
        }

        $('#scroller2').addEventListener('mouseover', function() {
            console.log('hover');
            bar.style.transition = 'all 0.2s cubic-bezier(.95,.49,.51,1.23)';
            bar.style.backgroundColor = 'green';
            bar.style.height = '25px';
            isHover = true;
            // wait 2 seconds
            setTimeout(function() {
                // check if still hovering 
                if (isHover) {
                    // if still hovering, reset the background color
                    bar.style.backgroundColor = 'rgb(20 94 100)';
                    console.log('hovering');
                    expandPage();
                }
            }, 500);

            console.log('ran out');
        });

        $('#scroller2').addEventListener('mouseout', function() {
            console.log('hover out');
            bar.style.transition = 'background-color 0.2s cubic-bezier(.95,.49,.51,1.23)';
            bar.style.backgroundColor = '#00bcd4';
            isHover = false;
        });
        function expandPage() {
            body = document.getElementById('body');
            body.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            body.style.backgroundColor = '#247682';
            paragraph.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            title.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            title2.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            document.getElementById('scroller').style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            document.getElementById('scroll-icon').style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            bar.style.transition = 'all 1s cubic-bezier(.7,.51,1,.08)';
            document.getElementById('scroller').style.visibility = 'hidden';
            document.getElementById('scroll-icon').style.visibility = 'hidden';
            title.style.visibility = 'hidden';
            title2.style.visibility = 'hidden';
            paragraph.style.visibility = 'hidden';
            bar.style.visibility = 'hidden';
            dropPar();
        }
    }

    

});