function promise(){
    return new Promise((res, rej) => {
     setTimeout(()=>{
        console.log("p1")   
     res("hello");
     },2000)
    });
}
function promise2(){
    return new Promise((res, rej) => {
     setTimeout(()=>{
        console.log("p2")   
     res("hello222");
     },2000)
    });
}


async function fn(){
    await promise()
    console.log("fuuu")
     promise2()
     console.log("fuuu2")
}
fn()


// output   promise2 is run behind not stop thread

//         p1
//         fuuu
//         fuuu2
//         p2