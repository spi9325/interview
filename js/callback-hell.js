
function getData(id,fn){
    setTimeout(()=>{
        console.log(id);
        if(fn){
            fn()
        }
    },2000)
}
    // id  callback fn 
getData(1,()=>{
    getData(2,()=>{

    })
})