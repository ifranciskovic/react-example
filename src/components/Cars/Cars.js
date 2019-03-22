import React,{Component} from 'react';

class Cars extends Component{
	state={
		cars: [
			{ "name":"Ford", "model":"Mustang", "power": 124, "price": 12000 },
			{ "name":"BMW", "model":"X5", "power": 187, "price": 13000 },
			{ "name":"Skoda", "model":"SuperB", "power": 67, "price": 11000 },
			{ "name":"Fiat", "model":"Panda", "power": 47, "price": 10000 },
		]
    }
    
    render(){	
        let list=this.state.cars.map((car, index)=>(
            <li key={index}>
            {car.name}
        </li>
    ))

    return(
        <div>
            <h1>Nizovi od stringa</h1>
            <ul> {list} </ul>
        </div>
    )
}
}

export default Cars;
