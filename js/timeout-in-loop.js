for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
 // 4 4 4

 for (var i = 1; i <= 5; i++) {
    setTimeout(function(num) {
        console.log(num);
    }, 1000, i);
}
// 12345

// Reason: var ka scope function-level hota hai. Agar 3rd argument na ho, sab console.log(i) ke liye i = 6 print hota. 3rd argument pass karne se har timeout ke liye alag value num milta hai.




for (let i = 1; i <= 5; i++) {
    setTimeout(function(num) {
        console.log(num);
    }, 1000, i);
}

// 12345
// Reason: Same as above. let already block-scoped hai, aur 3rd argument se bhi same value mil rahi hai. Basically redundant, lekin kaam karta hai.