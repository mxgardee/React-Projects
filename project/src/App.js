import React, { Component } from 'react';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';
// import JumboTronComponent from './JumboTronComponent';
// import UserForm from './UserForm';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {
    // const isValid = true;
    return (
      <div>
        <Header />
        {/* <GitHub /> */}
        {/* <JumboTronComponent /> */}
        {/* <UserForm />  */}
        {/* <Products /> */}
          {/* <Button variant="primary" disabled={!isValid}>Default</Button> */}
         {/* <Rating rating="1"/>
         <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>  */}
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import Products from './Products';

// function App() {
//   return (
//     <div className="App">
//       <Products />
//     </div>
//   );
// }
// export default App;

class Header extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>            
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>                  
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch> 
            <Route path="/github/user/:login/:id" component={GitHubUser} />                                                                
            <Route path="/github" component={GitHub} />              
            <Route exact path="/" component={Home} />             
            <Route path="/*" component={NotFound} />                       
          </Switch>   
        </div>  
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render(){
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}
