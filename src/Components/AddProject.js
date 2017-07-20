import React, { Component } from 'react';

class AddProject extends Component {
constructor(){
  super();

  this.state ={
    newProject: {}
  }
}
static defaultProps = {
  categories: ["Web Design", "Mobile Development", "Web Development"]
}
   handleSubmit(e){
     e.preventDefault();
  if(this.refs.title.value === ''){
    alert('There is no title')
  } else {
    this.setState({
      newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject)
      })

     };
   }
  render() {

   let categoriesOption = this.props.categories.map(category => {
      return <option key= {category} value ={category}>{category}</option>
    });
    return (
      <div >
      <h3>Add Projects</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>

        <div>
         <label>Title</label><br/>
         <input type= "text" ref="title"/>
        </div>

        <div>
         <label>Category</label><br/>
           <select ref = "category">
              {categoriesOption}
           </select>
        </div>
        <br/>
        <input type="submit" value ="Submit"></input>
       </form>
      </div>
    );
  }
}

export default AddProject;
