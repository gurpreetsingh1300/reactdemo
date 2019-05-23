import React from 'react';
//import createReactClass from 'create-react-class';


class AppComp extends React.Component{
  render(){
           return (<form>
                         <h2>Login</h2>
                         <input type="text" placeholder="Name" />
                         <br/><br/>
                         <input type="password" placeholder="password" />
                         <br/><br/>
                         <input type="submit" nvalue="log" />                 
                  </form>);
           }
};

export default AppComp;

/*
class AppComp extends React.Component 
{ 
  render() 
  {
    return React.createElement("h1", {}, "Hello World!!!");
  }
}
export default  AppComp;
*/

/*
var AppComp = createReactClass({
  render: function() {
                      return React.createElement("h1", {}, "Hello World!!!");
                     }
});

export default  AppComp;
*/

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
