import {createContext,useReducer} from 'react'
import AlertReducers from './AlertReducers'


 const AlertContext = createContext()

export const AlertProvider = ({children}) => {
const initialState = null

const SetAlert = (msg, type)=> {
dispatch({
    type: 'SET_ALERT',
    payload: {msg, type}
})
setTimeout(()=>dispatch ({
    type: 'REMOVE_ALERT'
}), 5000)
}

const [state,dispatch] = useReducer(AlertReducers, initialState)
return <AlertContext.Provider value={{
alert: state, SetAlert
}}>{children}</AlertContext.Provider>
}


export default AlertContext