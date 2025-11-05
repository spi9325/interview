
const p1= {
    name:"p1"
}
const p2= {
    name2:"p2",
    __proto__:p1 // p2 access or inherits p1s property
}
const p3= {
    name3:"p3",
    __proto__:p2  // p3 inherits OR access p2s properties
}

console.log(p3.name2) 