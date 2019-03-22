import React,{Component} from 'react';
import phonesData from './phones.json';
class Phones extends Component{
	state={
		phones: phonesData 
    }
    render(){

		let list=this.state.phones.map((phone, index)=>(
			<li key={index}>
                 <p>{phone.brand}</p>
			     <p>{phone.type}</p> 
                 <p>Price: {phone.price} EUR</p> 
                 <p>Zemlja proizvodnje: {phone.country}</p> 
			</li>
		))

		return(
			<div>
         <h1>Telefoni iz JSON file-a</h1>
			<ul> {list} </ul>
			</div>
		)
	}
}

export default Phones;