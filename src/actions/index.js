import axios from '../api/request';

export const gitReq = (project) => async (dispatch) => {

    if(!project){
        return null;
    }

    const response = await axios.get(`?search=${project}`)
    
    dispatch({ type: 'CREATE_REQUEST', payload: response.data})
}

export const gitMessage = (project) => async (dispatch, getState) => {
    
    if(!project){
        return null;
    }

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
        console.log("THIS IS THE RESPONSE IN gitMessage", response)

        if(response.data.length === 0){
            console.log("SUD DIRI")
            message.push({message: "No commits seen", id:container[x]})
            console.log("THIS IS THE UPDATED MESSAGE CONTAINER", message)
        } else if(response.data[0].message !== null){
            message.push({message: response.data[0].message, id:container[x]})
            console.log("THIS IS THE MESSAGE", message)
        } else {
            
        }


    }

    dispatch({ type: 'GET_MESSAGE', payload: message})

    console.log("THE FINAL MESSAGE", message)

    

}


export const gitReset = () => {

    return {type: "RESET"}
  }






