function getRandomNumber() {
    promise = new Promise((resolve, reject) => {
        setTimeout(resolve(Math.random()), 500);
    })
    return promise
}

async function printRand() {
    num = await getRandomNumber();
    console.log(num);
}

printRand();