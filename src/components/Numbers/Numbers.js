import React,{Component} from 'react';

import './Numbers.css';
class Numbers extends Component{
    state={
        numbers:[],
        num:null
    }
    componentDidMount(){
        let newNumbers=this.state.numbers;
        for (let i=0; i<10; i++) {
            let randomNumbers=Math.floor(Math.random()*100+1)
            newNumbers.push(randomNumbers);
            this.setState({numbers:newNumbers})
        }
    }
    removeItem=(index)=>{
        let newNumbers=this.state.numbers
        newNumbers.splice(index,1)
        this.setState({numbers:newNumbers})
  }

    render(){
        let showNumbers=this.state.numbers.map((number, index)=>(
            <li onClick={()=>this.removeItem(index)} key={index}>
            {number}
            </li>

        ))
        return(
            <div>
                <h2>Nizovi brojeva</h2>
                <ul>
                    {showNumbers}
                </ul>
            </div>
        )
    }
}

export default Numbers