import axios from 'axios';

import React,{Component} from 'react';
import './Users.css';
class Users extends Component{
	state={
		users: [] 
	}

    componentDidMount () {

        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
					const users =response.data;
    				console.log("response:"); console.log(response);console.log("");
                this.setState({users: users});
            } ); // END OF POST AXIOS
    }

	render(){

		let list=this.state.users.map((user, index)=>(
			<li key={index}>
                <h3>{user.name}</h3>
                <p>Username: {user.username}</p>
                <p>Grad i adresa: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p>Ime kompanije: {user.company.name}</p>
			</li>
		))

		return(
			<div>
         <h1>Korisnici iz API -a preko axios node.js modula</h1>
			<ul className="UserList"> {list} </ul>
			</div>
		)
	}
}

export default Users;