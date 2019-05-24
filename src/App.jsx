import React from 'react';
import Product from './Components/casestudy';

var count=1;
class AppComp extends React.Component {
              render() {
                        React.Children.map( this.props.children, function() { 
                              console.log ('child', count++); } );
                        return (<ul>
                                    { this.props.children }
                                </ul>)
                       }
};

/*class AppComp extends React.Component {
    
    render()
    {
        var names=['Ember', 'BackboneJS', 'ReactJS', 'Jasmine'];
        return <div>Hello, { names } </div>
       }
    {
             var names=['Ember', 'BackboneJS', 'ReactJS', 'Jasmine'];
             let divStyle = {
                color: 'red',
              };
             return <div>
                 <div style = {divStyle}>Hello, { names }</div> 
                 
             </div>
            }
}*/


/*class AppComp extends React.Component {
    render() {
              var x=25, y=30
              return (<div>                
                           <h3> Evaluating expression </h3><br/>
                           <h4> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h4>
                      </div>)
             }
}*/


/*class AppComp extends React.Component
{
    render()
    {
        return <h1>Hello World JSX</h1>
    }
} */


/* class AppComp extends React.Component 
{
    render(){
               return(<div>
                         <h3>ReactJS:</h3>
                         <img src="./image/react.PNG" width="120" height="120"/>
                         <p> React is a JavaScript library for creating User Interfaces,
                             open sourced to the world  by Facebook and  Instagram team in 2013.<br/>
                             React’s main goal is to make development of UI components easy and modular.
                             It is intended to ease the process of building<br/> large applications using
                             data that changes over time.</p>
                                                          
                    </div>);
            }
}
*/



export default AppComp