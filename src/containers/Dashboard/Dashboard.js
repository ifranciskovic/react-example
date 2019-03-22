
import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Numbers from '../../components/Numbers/Numbers';
import Cars from '../../components/Cars/Cars';
import Phones from '../../components/Phones/Phones';
import Users from '../../components/Users/Users';

import './Dashboard.css';

class Dashboard extends Component {
    state={
        subtitle:'Subotica',
        description:'Priprema za test znanja'
    }
    render () {
        return (
            <div className="Dashboard">
                <Header title="IT Obuka" subtitle={this.state.subtitle} description={this.state.description} />
                <Numbers />
                <Cars />
                <Phones />
                <Users />
            </div>
        )
    }
}

export default Dashboard;