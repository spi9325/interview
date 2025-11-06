// let track=0;
// function debounce(fn){
//     let id

//     return function (...arg){
//         track++
//         clearTimeout(id)
//         id = setTimeout(()=>{
            
//             fn(track,...arg)
//         },2000)
//     }
// }

// function kaam(...arg){
//     console.log('kam zal karun',arg)
// }

// const res= debounce(kaam)
// res('hii')
// res('h2')
// res('h3')
// res('h4')
// res('h5')
// res('h6')






// ################# throttle #####################


// function throttle(cmt){
//     let waiting=false;
//     return function(){
//         console.log("calling====")
//       if(!waiting){
//         cmt()
//         waiting=true;

//         setTimeout(()=>{
//            waiting=false; 
//         },3000)
//       }       
//     }
// }

// function cmt(){
//     console.log('this yt comment...')
// }


// const res = throttle(cmt);

// setInterval(()=>{
//     res()
// },500)

