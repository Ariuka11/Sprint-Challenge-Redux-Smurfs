import React from 'react';
import {connect} from 'react-redux';
import {createSmurf, } from '../actions'


class SmurfForm extends React.Component{

    state = {
            name: '',
            age: '',
            height: ''
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addSmurf = e => {
        e.preventDefault()
        const { name, age, height } = this.state
        this.props.createSmurf({ name, age, height })
        this.setState({name: '', age: '', height: ''})
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.addSmurf}>
                    <input
                    name = 'name' 
                    onChange = {this.handleChange}
                    type = 'name'
                    placeholder = 'name'
                    value = {this.state.name} />
                    <input 
                    name = 'age'
                    onChange = {this.handleChange}
                    type = 'number'
                    placeholder = 'age'
                    value = {this.state.age} />
                    <input 
                    name = 'height'
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

const mapStateToProps = state => {
    console.log('post props', state)
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error,
        addingSmurf: state.addingSmurf
    }
    
}


export default connect (mapStateToProps, {createSmurf})(SmurfForm);