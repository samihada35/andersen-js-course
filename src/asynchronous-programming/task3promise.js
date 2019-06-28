function delay(ms) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(100);
      }, ms);
    });
   }
 
   delay(1000).then(value=>console.log('done with '+value));