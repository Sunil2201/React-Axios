import React from "react";
import axios from "axios";

export default class PersonList extends React.Component{
    state = {
        persons : []
    }

    componentDidMount(){
        axios.get(`https://iostream04.com/tao/api/v1/address/user/60fdc71951ee9f349b822a72`)
        .then(res => {
            const persons = res.data;
            this.setState({persons});
        })
        .catch(err => console.log(err));
    }
    render(){
        return(
        <div>
        <h1>List of Users</h1>
        <ul className="list">
            {
                this.state.persons.map(person=>
                    <li className="item">id:{person.id}<br/> 
                        userId:{person.userId}<br/>
                        house:{person.house}<br/>
                        street:{person.street}<br/>
                        pin:{person.pin}<br/>
                        district:{person.district}<br/>
                        state:{person.state}<br/>
                        country:{person.country}<br/>
                        phone:{person.phone}
                    </li>
                )
            }
        </ul>
        </div>
        )
    }
}