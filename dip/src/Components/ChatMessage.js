import React from 'react';
import '../style.css';

class ChatMessage extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {


    return (

<div className="usermMsg">
<div>{this.props.text}</div>
<div><img src="src/img/personaa.png"/></div>	
</div>


    )


    }    
  }

export default ChatMessage;