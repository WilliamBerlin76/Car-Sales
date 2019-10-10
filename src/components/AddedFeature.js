import React from 'react';
import {connect} from 'react-redux';
import {removeFeat} from '../actions/carActions';

const AddedFeature = props => {
  const removeFeature = e => {
    console.log(props.feature[0].id)
    return props.removeFeat(props.feature[0].id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      
      {props.feature.map(item => {
        return(
          <button className="button" onClick={removeFeature}>{item.name}</button>
        )
      })}
      
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return{
    feature: state.car.features
  }
}

export default connect(mapStateToProps, {removeFeat})(AddedFeature);
