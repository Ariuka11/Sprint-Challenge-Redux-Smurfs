import React from 'react';
import {connect} from 'react-redux';
import {createSmurf, } from '../actions'



class SmurfForm extends React.Component{

    state = {
        newSmurf : {
            name: '',
            age: '',
            height: ''
        }
    }

  
    
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleUpdate = e => {
        e.preventDefault();
     
        this.props.createSmurf(this.state.newSmurf);
        this.setState({
                    newSmurf: {
                        name: '',
                        height: '',
                        age: ''
                    }
    })

      
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleUpdate}>
                    <input 
                    onChange = {this.handleChange}
                    type = 'name'
                    placeholder = 'name'
                    value = {this.state.name} />
                    <input 
                    onChange = {this.handleChange}
                    type = 'number'
                    placeholder = 'age'
                    value = {this.state.age} />
                    <input 
                    onChange = {this.handleChange}
                    type = 'number'
                    placeholder = 'height'
                    value = {this.state.height} />
                    <button value = 'submit' >Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})


export default connect (mapStateToProps, {createSmurf,})(SmurfForm);