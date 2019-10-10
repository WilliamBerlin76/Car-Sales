import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      
      {props.car.features.length > 0  ? (
        <>
        <p>click an item to remove it</p>
        <ol type="1">
          <AddedFeature key={props.car.features.id} feature={props.car.features} />
        </ol>
        </>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
