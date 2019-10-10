import React from 'react';
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      
      {props.feature.map(item => {
        return(
          <button className="button">{item.name}</button>
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

export default connect(mapStateToProps, {})(AddedFeature);
