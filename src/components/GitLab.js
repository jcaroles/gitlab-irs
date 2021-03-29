import React, { useState } from 'react';
import { connect } from 'react-redux';

import { gitReq, gitMessage } from '../actions';
import GitView from './GitView';


const GitLab = (props) => {
    const [search, setSelectedSearch] = useState('');

    const onInputChange = (evt) => {
        setSelectedSearch(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.gitReq(search);
        props.gitMessage(search);
        console.log("I CAME HERE!")
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
          </div>
        </form>

        <div>
        <GitView/>
        </div>
        

    </div>)
}

export default connect(null, { gitReq, gitMessage })(GitLab);