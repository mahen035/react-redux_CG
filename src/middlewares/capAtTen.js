const capAtTen = store => next => action =>{
    console.log("Store", store);
    return next(action);
}

export default capAtTen;