    import React, { Component } from 'react';
   import Register from './Register';
   import Header from './Header';
   import Footer from './Footer';
   import Tile from './Tile';
   import Message from './Message';
   import { HashRouter as Router, Route, Link } from 'react-router-dom'
    // import {Route} from 'react-router-dom';



   class App extends Component {
    render() {
  
     
  
      return (
        <Router>
        <div className="contanier-is-fluid">
        <div className="notification">
          <Header title="Let's Test"
             subtitle="Welcome to the beginners journey to the testing world"/>
             
  
                
                 <Route path="/Register"  exact render={
                  ()=> {
                    return(<Register/>)
                  }
                }/>
        </div>
        
        <Route path="/" exact render={
                ()=> {
                  return(<Message />)
                }
              }/>
              
                        
          
        
        <Route exact path="/" render={
              () => {
                return (
                  <div className="section is-paddingless">
                    <div className="column">
                      <h1 className="has-text-centered is-size-3 has-text-weight-bold has-text-black">Learn to test</h1>
                    </div>
                    <div className="section is-paddingless">
                      <div className="columns card-content">
                        {/* <Link className="column" to="/black"><Tile className="image"src="images/manual.png" linkText="Testing" /></Link> */}
                        {/* <Link className="column2" to="/Men"><Tile src="images/automated-testing-5.png" linkText="Automated-test" /></Link> */}
                        <Link className="column" to="/white"><Tile src="images/history of test.jpg" linkText="History" /></Link>
                      </div>
                      
                    </div>
                  </div>
                )
              }
            } />
       
                    


          
              
              <Footer/>   
  
        </div>
        </Router>
      );
    }
  }
  
  export default App;