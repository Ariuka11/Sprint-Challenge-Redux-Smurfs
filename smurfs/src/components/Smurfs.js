 import React from 'react';
 import {gettingSmurf} from '../actions'
 import {connect} from 'react-redux';

 class Smurfs extends React.Component{

     componentDidMount(){
        this.props.gettingSmurf();
     }

     render(){
         return (
             <div>
                 {this.props.smurfs.map(smurfs => (
                     <div key = {smurfs.id}>
                        <h2>Name: {smurfs.name}</h2>
                        <p>Age: {smurfs.age}</p>
                        <p>Height: {smurfs.height}</p>
                     </div>
                 ))}
             </div>
         )
     }
  }

     const mapStateProps = state => {
         return {
            smurfs: state.smurfs,
            fetchingSmurfs: state.fetchingSmurfs
         }
     }

 export default connect (mapStateProps, {gettingSmurf})(Smurfs); 