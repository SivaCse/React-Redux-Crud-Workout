import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { updateUser,deleteUser,currentUser } from '../actions/userActions';

class TodosList extends Component {

    listRow = (users)=>{
        const userRows = users.map((user,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <button onClick={()=>this.onEdit(index,user)} className="btn btn-primary">Edit</button>
                    <button onClick={()=>this.removeUser(user)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        })
        return userRows;
    }

    onEdit = (id,user)=>{
        user.id = id;
        this.props.actions.currentUser(user);
    }

    removeUser = (user)=>{
        this.props.actions.deleteUser(user);
    }

    render() {
        const { users } = this.props;
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listRow(users)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        users:state.users.users
    }
}

const mapdispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators({updateUser,deleteUser,currentUser},dispatch)
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(TodosList);
