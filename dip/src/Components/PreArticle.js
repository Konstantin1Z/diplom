import React from 'react';
import '../style.css';
import {Link} from "react-router-dom";
class PreArticle extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {


let linka ="/Blog/" + this.props.id;


var koma=0;

if (localStorage.getItem("Komenti") != null) 
{
var h = localStorage.getItem("Komenti");
var hh = JSON.parse(h);

let fg = hh.filter(item => item.id == this.props.id);
koma = fg.length;
}
else
koma=0;


    return (

<div className="preArticle">
<h2>{this.props.title}</h2>
<img src={this.props.imgmin}/>
<div className="ArticleT">{this.props.pretext}</div>
<div className="ArticleB" onClick={() => {this.props.getId(this.props.id)}}><Link to={linka}>Читать</Link></div>
<div className="ArticleO">
<div><i className="fas fa-user-circle icon-1x"></i>{this.props.author}</div>
<div><i className="fa fa-calendar"></i>{this.props.date}</div>
<div><i className="fa fa-comment"></i>Комментариев: {koma}</div>
</div>

</div>  
    
    )

    }    
  }

export default PreArticle;