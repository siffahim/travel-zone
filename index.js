var images = ['image/travel6.jpg','image/travel5.jpg','image/travel3.jpg','image/travel4.jpg','image/travel10.jpg','image/travel2.jpg','image/travel11.jpg','image/travel1.jpg',]

let count = 0;
let displayImag = document.querySelector('img');
// let preBtn = document.getElementById('preBtn');
// let nextBtn = document.getElementById('nextBtn');


// nextBtn.addEventListener('click',()=>{
//     count++;
//     if(count>=images.length){
//         count = 0;
//         displayImag.src = images[count]
//     }else{
//         displayImag.src = images[count]
//     }
// })
// preBtn.addEventListener('click',()=>{
//     count--;
//     if(count<0){
//         count = images.length-1;
//         displayImag.src = images[count]
//     }else{
//         displayImag.src = images[count]
//     }
// })
function slide(){
    count--;
    if(count<0){
        count = images.length-1;
        displayImag.src = images[count]
    }else{
        displayImag.src = images[count]
    }

    setTimeout(slide,3000)
}

slide();