import React, { useState } from 'react';
import { connect } from 'react-redux';

import { gitReq, gitMessage, gitReset } from '../actions';
import GitView from './GitView';


const GitLab = (props) => {
    const [search, setSelectedSearch] = useState('');
    const [check, setCheck] = useState(true);

 
    const onInputChange = (evt) => {
        setSelectedSearch(evt.target.value)
    }

    const onSubmit = (evt) => {
        props.gitReset();
        evt.preventDefault();
        props.gitReq(search);
        props.gitMessage(search);
        setCheck(!check)
        
    }
    

    return (
    <div className="ui segment ui container" style={{marginTop: '10px'}}>
         <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="videoSearch">Project Search</label>
            <input
            className="fetch-request"
              type="text"
              id="projectSearch"
              value={search}
              onChange={onInputChange}
            ></input>
            <button className="ui secondary button" style={{marginTop:'15px'}}>Search</button>
          </div>
        </form>

        <div>
        <GitView/>
        </div>
        

    </div>)
}

export default connect(null, { gitReq, gitMessage, gitReset })(GitLab);