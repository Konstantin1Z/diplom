import React from 'react';
import '../style.css';
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import Main from "./Main";
import Home from "./Home";
import {BrowserRouter} from "react-router-dom";
//import {BrowserRouter , Router,Switch,Route,Link,Redirect,useParams,useRouteMatch} from "react-router-dom";
// import {BrowserRouter as Router } from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";
//import {browserHistory, Router, Route} from 'react-router';
//var browserHistory = ReactRouter.browserHistory;

class App extends React.Component{
    
// constructor(){  
//         super();  
//         this.state = {all: 0};     
//     }

    render() {  

    
         return (  
           
<BrowserRouter>
           <div className="Basic">  
             
            <Header/>
            <div className="midl">
              <LeftSide/>

              <Main/>

              <RightSide/>
            </div>
            <Footer/> 

           </div> 

</BrowserRouter>

        )  
    }  
}
export default App;