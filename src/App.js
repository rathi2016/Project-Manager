import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      projects:[
        {
          title: "Buisness Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Ecommerse Shopping Cart",
          category: "Web Design"
        },
      ]
    }

  }
  render() {
    return (
      <div className="App">
        My app
        <Projects projects ={this.state.projects}/>
      </div>
    );
  }
}

export default App;
