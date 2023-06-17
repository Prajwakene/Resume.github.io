// 1st apporch to apply smooting 
// // //for smooth scroll

// var navMEnuAnchorTags = document.querySelectorAll('.nav-menu a');
// // //console.log(navMEnuAnchorTags);
// for(var i = 0 ;i< navMEnuAnchorTags.length;i++){
//     navMEnuAnchorTags[i].addEventListener('click' , function(event){
//         // //logic here
//         event.preventDefault();
//         var targetSectionID =this.textContent.trim().toLowerCase();
//         var targetSection  = document.getElementById(targetSectionID);
//         // //console.log(targetSection);

//         // To set the interval of smoothing scroll
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             // //scroll by 50Px
//             window.scrollBy(0,50);

//             //// keeping the interval as 50
//         }, 20);
//     })
// }

// 2nd apporch to apply smooting 

// //for smooth scroll

//  var navMEnuAnchorTags = document.querySelectorAll('.nav-menu a')
////for the seconf approroch we have to create a global variable 
// var interval;
// // //console.log(navMEnuAnchorTags);
// for(var i = 0 ;i< navMEnuAnchorTags.length;i++){
//     navMEnuAnchorTags[i].addEventListener('click' , function(event){
//         // //logic here
//         event.preventDefault();
//         var targetSectionID =this.textContent.trim().toLowerCase();
//         var targetSection  = document.getElementById(targetSectionID);
//         // //console.log(targetSection);

//         // To set the interval of smoothing scroll
//         var interval = setInterval(scrollVertically, 20, targetSection);
//            // // we can write the same peice of cod eoutside the function and pass the vlaue of that function here
//            // var interval = setInterval(function(){
//             // var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             // if(targetSectionCoordinates.top <= 0){
//             //     clearInterval(interval);
//             //     return;
//             // }
//             // window.scrollBy(0,50);

//             //// keeping the interval as 50
//         // }, 30);
//     });

// }
// function scrollVertically(targetSection){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if(targetSectionCoordinates.top <= 0){
//         // we create the global variable the as interval because we need it here
//         clearInterval(interval);
//         return;
//     }
//     // //scroll by 50Px
//     window.scrollBy(0, 50);
// }





// 3rd  apporch to apply smooting 
 var navMEnuAnchorTags = document.querySelectorAll('.nav-menu a')
//for the seconf approroch we have to create a global variable 
var interval;
// //console.log(navMEnuAnchorTags);
for(var i = 0 ;i< navMEnuAnchorTags.length;i++){
    navMEnuAnchorTags[i].addEventListener('click' , function(event){
        // //logic here
        event.preventDefault();
        var targetSectionID =this.textContent.trim().toLowerCase();
        var targetSection  = document.getElementById(targetSectionID);
        // //console.log(targetSection);

        // To set the interval of smoothing scroll
        // var interval = setInterval(scrollVertically, 20, targetSection);
        interval = setInterval(function(){
            // to get bounding client rect coordinates
            scrollVertically(targetSection);
        },50);
    
    });

}
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        // we create the global variable the as interval because we need it here
        clearInterval(interval);
        return;
    }
    // //scroll by 50Px
    window.scrollBy(0, 30);
}
