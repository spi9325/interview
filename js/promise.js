// promise used for solving callbackhell problem

        const promise = new Promise((res,rej)=>{
            res("hello")
        })
        const promise2 = new Promise((res,rej)=>{
            res("hello2")
        })

 // promise chain here

          promise.then((res)=>{
            console.log(res)
            return promise2
          }) 
          .then((res)=>{
            console.log(res)
          }) 





//  some interview que 

            // function fetchdata(url, retryCount = 3, delay = 1000) {
            //     return new Promise((resolve, reject) => {
            //         function again(url, retryCount) {

            //             fetch(url)
            //                 .then((res) => {
            //                     if (!res.ok) {
            //                         throw new Error("Network response was not ok");
            //                     }
            //                     return res.json();
            //                 })

            //                 .then((data) => {
            //                     resolve(data);
            //                 })

            //                 .catch((err) => {
            //                     if (retryCount > 0) {
            //                         setTimeout(() => {
            //                             again(url, retryCount - 1)
            //                             console.log("trying");

            //                         }, delay)
            //                     }
            //                     else {
            //                         reject("Error fetching data: " + err.message);
            //                     }
            //                 })
            //         }
            //         again(url, retryCount);
            //     })
            // }

            // fetchdata("https://jsonplaceholder.typicode.com/posts")
            //     .then((data) => {
            //         console.log("Data fetched successfully:", data);
            //     })
            //     .catch((error) => {
            //         console.error("Error fetching data:", error);
            //     });