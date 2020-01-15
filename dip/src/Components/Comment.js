import React from 'react';
import '../style.css';

class Comment extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  

  }

  render() {


    return (

<div className="comment">

<div>
<img src="src/img/person-male.png" />
<div>{this.props.name}</div>
</div>  

<div>
<div id="dat">{this.props.date}</div> 
<div>{this.props.text}</div> 

</div>


</div>  
    )

    }    
  }

export default Comment;