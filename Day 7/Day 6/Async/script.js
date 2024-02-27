//synchronous

console.log("First");
console.log("Second");
console.log("Third");

//asynchronous

console.log("First");
setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");

const getData = (callback) => {
    setTimeout(() => {
        const data = "This is a data";
        callback(data);
    }, 2000);
};

const processData = (data) => {
    console.log("Processed data: " + data);
}

getData(processData);

//Callback Hell
const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        })
    })
})

//Promises

const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    })
    
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    })
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    })
}
//chaining
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps completed");
    })
    .catch((error) => {
        console.log("An error occured", error);
    })
    
//async and await

// Define asynchronous functions step1, step2, and step3
const step1 = async () => {
    // Implementation of step1
    console.log("Step 1 completed");
};

const step2 = async () => {
    // Implementation of step2
    console.log("Step 2 completed");
};

const step3 = async () => {
    // Implementation of step3
    console.log("Step 3 completed");
};

// Define performSteps function
const performSteps = async () => {
    try {
        // Wait for the completion of step1
        await step1();

        // Wait for the completion of step2
        await step2();

        // Wait for the completion of step3
        await step3();

        // If all steps are completed without any errors, log a success message
        console.log("All steps completed");
    } catch (error) {
        // If any error occurs during any step, log an error message
        console.log("An error occurred: ", error);
    }
};

// Invoke the performSteps function to start the sequential execution of steps
performSteps();
