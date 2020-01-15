import React from 'react';
import '../style.css';
//import art from './../b.json';
import AD from "./ArticleData.js";
import PreArticle from "./PreArticle";
import Article from "./Article";


class Blog extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, search: ""};    
  
this.searchf = this.searchf.bind(this); 
 

  }

back = (valueB) => {this.setState({ id: valueB });}
getId = (valueId) => {this.setState({ id: valueId });}


searchf(event)
{this.setState({search: event.target.value});}



  render() {

let f="";
//f = art.map(art => <PreArticle key={art.id} id={art.id} getId={this.getId} title={art.title} author={art.autor} date={art.date} imgmin={art.imgmin} pretext={art.pretext}/>);  
f = AD.map(art => <PreArticle key={art.id} id={art.id} getId={this.getId} title={art.title} author={art.autor} date={art.date} imgmin={art.imgmin} pretext={art.pretext}/>);  


let f1="";
if(this.state.search != "")
{
//f1=art.filter(item => item.title.includes(this.state.search) == true);
//f = f1.map(art => <PreArticle key={art.id} id={art.id} getId={this.getId} title={art.title} author={art.autor} date={art.date} imgmin={art.imgmin} pretext={art.pretext}/>);  
f1=AD.filter(item => item.title.includes(this.state.search) == true);
f = f1.map(art => <PreArticle key={art.id} id={art.id} getId={this.getId} title={art.title} author={art.autor} date={art.date} imgmin={art.imgmin} pretext={art.pretext}/>);  



}


if(this.state.id != 0)
{
//f=<Article id={this.state.id} text={art[this.state.id-1].text} title={art[this.state.id-1].title} author={art[this.state.id-1].autor} date={art[this.state.id-1].date} img={art[this.state.id-1].imgmin} back={this.back} />;
f=<Article id={this.state.id} text={AD[this.state.id-1].text} title={AD[this.state.id-1].title} author={AD[this.state.id-1].autor} date={AD[this.state.id-1].date} img={AD[this.state.id-1].imgmin} back={this.back} />;


}


    return (

<div className="blog">

<h1>Блог</h1>
<div className="poisk">Поиск <input type="search" onChange={this.searchf} /></div>
<hr/>
{/*this.state.id*/}
<div className="artiklBlok">

{f}

</div>
{this.state.id}
</div>  
    )

    }    
  }

export default Blog;