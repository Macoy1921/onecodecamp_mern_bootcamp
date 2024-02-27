// Use Callbacksfunction EmitRandomNumber(attempt) {
  function EmitRandomNumber(callback, attempt = 1) {
    if (attempt > 10) {
        console.log("Maximum attempts reached. Stopping.");
        return;
    }

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Attempt #${attempt}. EmitRandomNumber is called. 2 seconds have lapsed.`);
        console.log(`Random number generated is ${randomNumber}. -----`);

        if (randomNumber < 80) {
            EmitRandomNumber(callback, attempt + 1);
        } else {
            console.log(`Attempt #${attempt}. EmitRandomNumber is called. 2 seconds have lapsed.`);
            console.log(`Random number generated is ${randomNumber}!!! -----`);
            callback();
        }
    }, 2000);
}

EmitRandomNumber(() => console.log("Done."));


  
  // Use Promises
  const emitRandomNumber = () => {
    const maxAttempt = 10;
    const startTime = 2000;
    const minNumber = 80;
    const maxNumber = 100;
  
    const randomNumber = (max) => Math.floor(Math.random() * max);
  
    return new Promise((resolve, reject) => {
      let attempts = 0;
  
      const startRandomNumber = () => {
        attempts++;
  
        if (attempts > maxAttempt) {
          reject("Maximum attempts reached. Exiting.");
          return;
        }
  
        const number = randomNumber(maxNumber);
  
        console.log(`Attempt #${attempts}. EmitRandomNumber is called. ${startTime  / 1000} seconds have lapsed.`);
        console.log(`Random number generated is ${number}. -----`);
  
        if (number < minNumber) {
          setTimeout(startRandomNumber, startTime);
        } else {
          console.log(`Attempt #${attempts}. EmitRandomNumber is called. ${startTime  / 1000} seconds have lapsed.`);
          console.log(`Random number generated is ${number}!!!`);
          resolve(number);
        }
      };
  
      setTimeout(startRandomNumber, startTime);
    });
  };
  

  emitRandomNumber()
    .then((result) => {
      console.log("Success! Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    //async and await
    const logMessage = (attempt, randomNumber) => {
      console.log(`Attempt #${attempt}. EmitRandomNumber is called. 2 seconds have lapsed.\nRandom number generated is ${randomNumber}.`);
  };
  
  const performStep = async (attempt, callback) => {
      const randomNumber = Math.floor(Math.random() * 101);
  
      setTimeout(() => {
          logMessage(attempt, randomNumber);
          if (callback) {
              callback();
          }
      }, 2000);
  };
  
  const performSteps = async () => {
      try {
          let attempt = 1;
  
          const step1 = () => performStep(attempt++, () => {
              const step2 = () => performStep(attempt++, () => {
                  const step3 = () => performStep(attempt++, () => {
                      performStep(attempt++);
                  });
                  step3();
              });
              step2();
          });
          step1();
      } catch (error) {
          console.log("An error occurred: ", error);
      }
  };
  
  performSteps();




  