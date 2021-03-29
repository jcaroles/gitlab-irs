import axios from '../api/request';

export const gitReq = (project) => async (dispatch) => {

    const response = await axios.get(`?search=${project}`)
    
    dispatch({ type: 'CREATE_REQUEST', payload: response.data})
}

export const gitMessage = (project) => async (dispatch, getState) => {
    
    let container = [];
    let message = [];

    const confirmationResponse = await axios.get(`?search=${project}`)
    
    if(getState().git){
        const data = getState().git
        Object.keys(data).map((key, index) => {
            container.push(data[key].id)
            return data[key]
        })
    }

    for(let x = 0; x<container.length; x++) {
        const response = await axios.get(`${container[x]}/repository/commits`)
        message.push({message: response.data[0].message, id:container[x]})
    }

    console.log("THIS IS THE UPDATED MESSAGE CONTAINER", message)


    dispatch({ type: 'GET_MESSAGE', payload: message})

}



