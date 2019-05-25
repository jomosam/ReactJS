import React,{Component} from 'react';

//let userListArr;
export default class UserList extends Component{
    
    constructor(props)
    {
        super(props);
        
        console.log(this)  
        console.log('saS')        
    }
    render(){
        return(
            <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <div>{this.props.data}</div>
            </div>
        </div>
        )
        
    }
}