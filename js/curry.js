function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// console.log(curriedAdd(1)(2)(3)); // Output: 6


// real ex 

function sendEmail(to){
  return function (subject){
    return function (body){
        console.log(`sending email to: ${to} ----subject is: ${subject} -----decription:${body}`);
    }
  }
}



const subject = sendEmail('ashish@gmail.com')
const body = subject('expire ashish mother')
body('sun ke bura laga bro...')

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


const sendEmail2 = (to) => (subject)=> (body)=>{
  console.log(to,subject,body)
}

sendEmail2('ashish')('mother')('rip...')