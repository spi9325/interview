const obj = {
    name:"sanket",
    add: { location: "pune" }
}

const shallow = {...obj}
const shallow2 = Object.assign({},obj)

// name is change in shallow not in original 
shallow2.name = "spi"
// but nested obj copy as refrence so it change
shallow.add.location = "mumbai"

// console.log(obj)
// console.log(shallow)
// console.log(shallow2);


// =================================================================================================
// deep copy deeply so change is not reflect in original

const obj2 = {
    name:"sanket",
    add: { location: "pune" }
}


const deep = JSON.parse(JSON.stringify(obj2))
const deepCopy = structuredClone(obj);
 deep.name="hii"
 deep.add.location="hii"

 console.log(obj2)
 console.log(deep)

