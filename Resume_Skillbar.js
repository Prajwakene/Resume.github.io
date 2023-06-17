// to aplly the Animation effect to Resume Skill bar


//1=>Handle scroll event on wundow
// 2=> check that skill section container is wisible or not.
// ensure that initial width of coloured div is zero => initialized / Reset to 0 width value 
// 3=>start animaton on every skill  =>increase skill width fronm 0 to skill Level
// store skill level in HTML using data attribute 

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    // global within th efunction
    for (let bar of progressBar){
        bar.style.width = 0 + '%';
    }
}
//calling function
initialiseBars();

function fillBars(){
    for(let bar of progressBar){
        // keep on infcresing their width till they reach the targetted width 
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth  > targetWidth ){
                clearInterval(interval);
                    return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';

        }, 3);
    }
    
}
function checkScroll(){

    // you have to check whether skill-container is visible
    var coordinates = skillContainer.getBoundingClientRect();
        if(!animationDone && coordinates.top  <= window.innerHeight){
            animationDone= true;
            console.log('skill-section-visible');
            fillBars();
        }
        else if(coordinates.top  > window.innerHeight){
            animationDone= false;
            initialiseBars();

        }
}