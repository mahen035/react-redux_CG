const ColorReducer = (color='', action) => {
  
    switch (action.type){
        case 'CHANGE_COLOR':
            color =  action.payload;
            return color;
        default:
            return color; 
    }
}

export default ColorReducer;