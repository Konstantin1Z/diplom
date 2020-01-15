import React from 'react';
import '../style.css';
import Menu from "./Menu";


class LeftSide extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {

var color="";
if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
color = JSON.parse(h);
}

let col = {backgroundColor: color};

    return (

<aside className="left" style={{...col}}>

<Menu/>

</aside>  
    )

    }    
  }

export default LeftSide;