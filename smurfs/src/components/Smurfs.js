 import React from 'react';
 import {gettingSmurf} from '../actions'
 import {connect} from 'react-redux';

 class Smurfs extends React.Component{

     componentDidMount(){
         this.props.gettingSmurf();
     }

     render(){
         console.log("PROPS from Smurfs", this.props)
         console.log("State from Smurfs", this.state)
         
         return (
                <div>
                {this.props.smurfs.map(smurf => (
                    <div key = {smurf.id}>
                        <h2>Name: {smurf.name}</h2>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}
                </div>
         )
     }
  }

     const mapStateProps = state => {
         console.log("mapStateProps",state)
         return {
            smurfs: state.smurfs,
            fetchingSmurfs: state.fetchingSmurfs
         }
     }

 export default connect (mapStateProps, {gettingSmurf})(Smurfs); 

 
