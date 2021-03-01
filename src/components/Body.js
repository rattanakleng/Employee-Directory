import React, { Component } from "react";
import Search from './Search';
import API from "../utils/API";

class Body extends Component {

    state = {
        result:[],
        search: ""
      };
  // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.searchEmployee(50);
        
    }

    searchEmployee = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));        
       };

       handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ search: value });
        
        console.log(this.state.search);
    }
// When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
      };

     render() {
                
        return (        
            <div className="container">

                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                
                <div className="row">    
               {this.state.result.map(user =>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
    
                            <img src={user.picture.large} className="card-img-top" alt="Profile img" />
    
                            <div className="card-body">
                        
                                <h5 className="card-title"> {user.name.first} {user.name.last} </h5>
            
                                <p className="card-text">Email: {user.email}</p>
                            </div>
                        </div>
                    </div>
                    
                )}
    
                </div>            
            </div>        
        )
    }
}

export default Body;