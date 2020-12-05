const initialState = {
    data : [],
    factoryName : "",
    designName : "",
    quantity : 0,
    fileName : "",
    inventory : 1625,
    nextClicked : false,
    backClicked : false
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FACTORY_NAME' :
            return {
                ...state,
                factoryName : action.payload
            }
            case 'DESIGN_NAME' :
                return {
                    ...state,
                    designName : action.payload
                }
            case 'QUANTITY' :
                return {
                    ...state,
                    quantity : action.payload
                }
            case 'FILE_NAME' :return {
                ...state,
                fileName : action.payload
            }
            case 'NEXT_CLICKED' : return {
                ...state,
                nextClicked : true,
                backClicked :false
            }
            case 'BACK_CLICKED' : return {
                ...state,
                backClicked : true,
                nextClicked : false
            }
            case 'ASSIGN_FACTORY' : 
            let newData = state.data.slice();
            newData.push({factoryName : state.factoryName,
                designName : state.designName,
                quantity : state.quantity,
                fileName : state.fileName})
            return {
                ...state,
                data : newData,
                inventory : state.inventory - state.quantity,
                factoryName : "",
                designName : "",
                quantity : 0,
                fileName : "",
                nextClicked : false,
                backClicked : false
            }
            default :
                return state
    }
}

export default rootReducer;