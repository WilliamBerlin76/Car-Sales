import {PLUS_FEATURE} from '../actions/carActions';
import {REMOVE_FEATURE} from '../actions/carActions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const carReducer = (state = initialState, action) => {
    console.log(action, state)
    switch(action.type){
        case PLUS_FEATURE: 
            console.log('action.payload')
            return{
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            };
        case REMOVE_FEATURE:
            console.log('made it to the reducer', action.payload);
            return{
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(i => {
                        return (
                            
                            i.id !== action.payload
                        ) 
                    })
                }
            }
        default:
            return state
    }
}