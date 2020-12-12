//import App from "./App";

const AppReducer = (state,action)=>{
    switch(action.type){
        case "Add":
            return {
                ...state,
                basic: [action.payload, ...state.basic]
            }
        default:
                return state;
    }
}
export default AppReducer;