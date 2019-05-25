import React,{Component} from 'react';
import UserList from './component/user-list';
import axios from 'axios';

export default class User extends Component
{
   
    constructor()
    {
        super();
        this.userList='TR';
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //console.log(response);
            this.userList='fsdfsd'
        })
    }

    render(){
        return (
            <div className="container">
                <div className="col-md-3">
                    <UserList data={['Sachin','Dravis']}/>
                </div>
            </div>
            
        )
    }

}