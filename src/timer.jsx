import React from 'react';
    class Timer extends React.Component{
                constructor(props){
                                   super(props);                                             
                                   this.handleClick = this.handleClick.bind(this);
                                   this.start = this.start.bind(this);
                                   this.state = { secondsElapsed: 0 };
                                 }
                 start(){ 
                         this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
                        }
                 handleClick(e){
                                this.interval = setInterval(this.start, 1000);
                               }
                 render(){
                          return (<div>
                                       <button onClick = {this.handleClick}> Start timer </button>
                                       <h2> Seconds Elapsed: {this.state.secondsElapsed} </h2>
                                  </div>);
                          }
    }
    export default Timer;