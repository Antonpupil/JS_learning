const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }];

const getWorthyWorkers = WorkersArr => {
    const filteredArr = [];

    WorkersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            filteredArr.push(currentWorker.name)
        }
    })

    /* for (let i = 0; i < WorkersArr.length; i++) {
        const currentWorker = WorkersArr[i];

        if (currentWorker.salary > 1000) {
             filteredArr.push(currentWorker.name);
        }
    } */
    return filteredArr;
}
console.log(getWorthyWorkers(workers))