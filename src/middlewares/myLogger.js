const myLogger = store =>{
    return next => {
        return action=>{
            console.log("My Logger Middleware Ran")
            return next(action);
        }
    }
}

export default myLogger;