import React from 'react';
import {connect} from 'react-redux'
import {plusFeat} from '../actions/carActions'
const AdditionalFeature = props => {
  console.log(props.feature)
  const plusFeature = () => {
    props.plusFeat(props.feature)
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={plusFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {plusFeat})(AdditionalFeature);
