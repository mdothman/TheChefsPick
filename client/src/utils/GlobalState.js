import React, {createContext, useReducer, useContext} from "react";

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {

}

const StoreProvider = ({value = [], ...props}) =>{
    const [state, dispatch] = useReducer(reducer,{
        recipeSearchList = [],
    });
    return <Provider value = {[state,dispatch]} {...props} />;
};

const useStoreContext = () =>{
    return useContext(StoreContext);
}

export{StoreProvider, useStoreContext}