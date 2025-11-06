
// IMP all are same working methods like function borrowing

//   diff is call get arg as seperate 
            //  apply get arg as array 
            //  bind return copy as function then we call that fn 

const obj = {
    name:"sanket",
    print: function (){
        console.log(this.name)
    },
    greet:  (greeting,time)=>{
        console.log( greeting,  time, this.name )
    }
}

const obj2 = {
    name:"spi",
}


// ############# bind  ##############

// const bind = obj.greet.bind(obj2, "hii","good night bind"); // we bind/point obj print methods this to obj2.name  # function borrowing  
// bind();   // bind return function then we call tha fn 

// #############  call  #############

// console.log(obj.greet.call(obj2,'hi','morning call')) //   hi morning spi


// ############# apply ##############

// console.log(obj.greet.apply(obj2, ['hi','morning apply'] )) //   hi morning spi


//  real ex:

    // async function fetchData(url,endpoint){
    //     const response = await fetch(`${url}${endpoint}`);
    //     const data = response.json();
    //     return data
    // }
    //                              // we not use this then we pass null
    // const getData = fetchData.bind(null,'http://localhost:8080')
    // getData('/product')
