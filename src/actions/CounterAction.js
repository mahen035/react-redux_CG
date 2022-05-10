export const increment= () => {
    console.log('CALLING INCREMENT ACTION');
    return {
        type: 'INCREMENT'
    }
}

export const decrement= () => {
    return {
        type: 'DECREMENT'
    }
}

const INITIAL_STATE = {

}