
import { createContext,useReducer} from "react";
import GFinderReducer from "./GFindereducers";


const GFinderContext = createContext()

export const GFinderProvider =({children}) =>{
const initialState = {
    users : [],
    repos: [],
    loading: false,
    user: {}
}

const [state, dispatch] =useReducer(GFinderReducer, initialState)


// Fetch initial users (testing purposes)
    const FetchUsers = async() =>{
            setLoading();
        const response = await fetch (`${process.env.REACT_APP_URL}/users`,{
            headers: {
                Authorization: `token ${process.env.REACT_APP_TOKEN}`
            }
        })

        const data = await response.json()
        dispatch ({
            type: 'GET_USERS',
            payload: data
        })
    }

    const SearchUsers = async(text) =>{
        setLoading();
    const params = new URLSearchParams({
        q: text
    })

    const response = await fetch (`${process.env.REACT_APP_URL}/search/users?${params}`,{
        headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`
        }
    })

    const {items} = await response.json()
    dispatch ({
        type: 'GET_USERS',
        payload: items,
    })
}

const getUser = async(login) =>{
    setLoading();

const response = await fetch (`${process.env.REACT_APP_URL}/users/${login}`,{
    headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`
    }
})

if(response.status === 404){
    window.location='/notfound'}
else{
    const data = await response.json()
dispatch ({
    type: 'GET_USER',
    payload: data,
})
}
}


const getRepos = async(login) =>{
    setLoading();

    const params = new URLSearchParams({
        sort: 'created',
        per_page:10
    })


const response = await fetch (`${process.env.REACT_APP_URL}/users/${login}/repos?${params}`,{
    headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`
    }
})

if(response.status === 404){
    window.location='/notfound'}
else{
    const data = await response.json()
dispatch ({
    type: 'GET_REPO',
    payload: data,
})
}
}




const ClearUsers = ()=> {
    dispatch({
        type: 'CLEAR_USERS',
        payload: [],
    })
}

const setLoading = () => dispatch({type: 'SET_LOADING'})

return <GFinderContext.Provider value = {{
users: state.users,
loading: state.loading,
user: state.user,
FetchUsers,
SearchUsers,
ClearUsers,
repos: state.repos,
getUser,
getRepos
}}>{children}</GFinderContext.Provider>
}

export default GFinderContext