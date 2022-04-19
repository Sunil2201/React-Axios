import React from "react";
import axios from "axios";

export default class PersonRemove extends React.Component{
state = {
    id:''
}

 handleChange = event =>{
    this.setState({id: event.target.value});
}

 handleSubmit = event =>{
    event.preventDefault();

    axios.delete(`https://iostream04.com/tao/api/v1/address/user/${this.state.id}`).then(res=>{
        console.log(res);
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error.response);
    })
}
render(){
return(
    <div>
        <h1>Enter Details</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="id">
            Person Id
            <input
            type="string"
            name="id"
            onChange={this.handleChange}
            />
        </label>
        <button type="submit">Delete</button>
        </form>
    </div>
)
}
}

