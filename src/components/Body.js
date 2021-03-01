import React, { Component } from "react";
import API from "../utils/API";

class Body extends Component {

    state = {
        result:[],
        search: ""
      };

    componentDidMount() {
        this.searchEmployee(3);
        
    }

    searchEmployee = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));        
       };

    render() {
                
        return (        
            <div className="container">
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