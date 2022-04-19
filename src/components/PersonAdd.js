import React, {useState} from "react";
import axios from "axios";

const PersonAdd = ()=>{
    const[data, setData] = useState({
        userId: "",
        house: "",
        street: "",
        pin:"",
        district:"",
        state:"",
        country:"",
        phone:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            userId: data.userId,
            house: data.house,
            street: data.street,
            pin: data.pin,
            district: data.district,
            state: data.state,
            country: data.country,
            phone: data.phone
        };
        axios.post("https://iostream04.com/tao/api/v1/address/create", userData).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
        })
        .catch(error=>{
            console.log(error.response)
        })
    }
    

    return(
        <div>
            <h1>Enter Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userId">
                 User Id
                 <input
                    type="string"
                    name="userId"
                    value={data.email}
                    onChange={handleChange}
                 />
                </label>
                <label htmlFor="house">
                    House
                    <input
                    type="text"
                    name="house"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="street">
                    Street
                    <input
                    type="text"
                    name="street"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="pin">
                    Pin
                    <input
                    type="number"
                    name="pin"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="district">
                    District
                    <input
                    type="text"
                    name="district"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="state">
                    State
                    <input
                    type="text"
                    name="state"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="country">
                    Country
                    <input
                    type="text"
                    name="country"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="phone">
                    Phone
                    <input
                    type="number"
                    name="phone"
                    value={data.password}
                    onChange={handleChange}
                    />
                </label>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default PersonAdd