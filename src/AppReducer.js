//import App from "./App";

const AppReducer = (state,action)=>{
    switch(action.type){
        case "Add":
            return {
                ...state,
                basic: [action.payload, ...state.basic]
            }
        case "Dele":
            return{
                ...state,
                basic: state.basic.filter(basi=>basi.id !== action.payload)
            }
        default:
                return state;
    }
}
export default AppReducer;