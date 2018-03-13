import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { createUser,updateUser,userLoading } from '../actions/userActions';

class TodosForm extends Component {
  
  constructor() {
    super();
    this.state = {
      user:{
        username:'',
        email:''
      },
      isEdit:false,
      isValid:false,
      isLoading:false
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.currentUser).length) {
      this.setState({isEdit:true});
      this.setState({user: Object.assign({}, nextProps.currentUser)});
    }
    this.setState({isLoading:nextProps.users.isLoading});
  }
    
  onChange = (event)=> {
    const {name, value } = event.target;
    const user = {...this.state.user};
    user[name] = value;
    this.setState({user});
    this.validateFields()
  }
  
  validateFields = ()=> {
    const isValidForm = (this.state.user.username!=='' && this.state.user.email!=='');
    this.setState({isValid:isValidForm});
  }
  
  resetForm = ()=> {
    const user = {
      username:'',
      email:''
    }
    this.setState({user});
    this.setState({isEdit:false});
  }

  addUser = ()=> {
        this.props.actions.userLoading();
        const user = {...this.state.user};
        if(!this.state.isEdit) {
          this.props.actions.createUser(user);
        } else {
          this.props.actions.updateUser(user);
        }
        this.resetForm()           
    }
    
    render() {
      const {username,email} = this.state.user;
      const {isLoading} = this.state;
      return(<div>
        {isLoading &&
          <div className="progress">
            <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              <span className="sr-only">40% Complete (success)</span>
            </div>
          </div>
        }
        <form>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="username" value={username} onChange={this.onChange}  className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" value={email} onChange={this.onChange}  className="form-control" id="email" />
            </div>
            <button type="button" disabled={!this.state.isValid} onClick={this.addUser} className="btn btn-primary">{(!this.state.isEdit? 'Create' : 'Edit')}</button>
            </form>
        </div>)    
    }
}

const mapStateToProps = (state) =>{
    return {
        users:state.users,
        currentUser:state.users.currentUser
    }
}

const mapdispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators({createUser,updateUser,userLoading},dispatch)
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(TodosForm);