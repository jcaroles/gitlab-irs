import Tippy from 'react-tooltip';
import { connect } from 'react-redux';


const GitLab = (props) => {

const displayMessage = (id) => {
    return (<div>
            {props.gitMessage.map(value => {
                if(value.id === id){
                    return <div key={value.id}>{value.message}</div>
                } 
                return null;
            })}
             </div>)
}

const displayValues = () => {
    

    if(props.gitMessage[0] === undefined) {
        return (<div class="ui icon message">
        <i class="search icon"></i>
        <div class="content">
          <div class="header">
            It might take a while to fetch some content after searching.
          </div>
          <p>So please wait.</p>
        </div>
      </div>)
    }

    if(props.gitMessage[0] !== undefined) {
        
        return <div className="ui relaxed divided list">{props.git.map(value => {
            return (
            <div className="item" key={value.id}>
                <i className="large github middle aligned icon"></i>
                <div className="content">         
                        <a href={`${value.web_url}`} className="header" data-tip data-for={`${value.id}`}>{value.name}</a>
    
                        <Tippy id={`${value.id}`} place="left" effect="solid">
                        Last Commit: {displayMessage(value.id)}
                        </Tippy>  
                </div>
            </div>
            )
    
            })}  
            </div>

    } else {
        <div> Loading ...</div>

    }
}

    return (
    <div className="ui message" style={{marginTop: '20px'}}>
        {displayValues() ? displayValues() : <div className="header">Please wait a while after searching as it may take a while...</div>}

        
    </div>)
}

const mapStateToProps = (state) => {
    return {git : Object.values(state.git), gitMessage: Object.values(state.gitMessage)}
}

export default connect(mapStateToProps)(GitLab);