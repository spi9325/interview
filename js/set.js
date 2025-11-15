
// // set          => unique vals 
// //                single value is store int obj arr  not arr and int together

// const arr = [1,2,2,2];

// const set = new Set(arr)
// console.log(set)  // { 1, 2 }

// set.add(3)
// console.log(set); // { 1, 2, 3 }
// set.delete(3)
// console.log(set); // { 1, 2 }
// set.clear()
// console.log(set); // {}

// console.log(set.has(1)); // true




// #################### map ##########


const map = new Map([['key1','val1'],['key1','val1']]) 
console.log(map)  // Map(1) { 'key1' => 'val1' }
// console.log(map.get('key1'))  // val1
// console.log(map.set('key2','val2'))  // Map(2) { 'key1' => 'val1', 'key2' => 'val2' }
// console.log(map.clear())  // undefined or {}


// for(let [key,value] of map){
//     console.log(`key => ${key}  &&  value => ${value}`) // Map(2) { 'key1' => 'val1', 'key2' => 'val2' }
// }



//  ########  weakset  ###########

// we only store objects and can't itrate no looping work

// const weakset = new WeakSet();
// let obj = {"name":"sanket"}
// weakset.add(obj)
// console.log(weakset) // WeakSet { <items unknown> }
// console.log(weakset.has(obj)); // true



//  ############  weakMap   ###########  smae as above

// const weakmap = new WeakMap();
// let obj = {}
// let obj2 = {}
// weakmap.set([obj,obj2])
// weakmap.set(obj)

// console.log(weakmap.has(obj));
