import axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getAllTrips = state => state.trips.data.slice().reverse();
export const getTripById = ({ trips }, id) => trips.data.find(trip => trip.id === id);

// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const LOAD_TRIPS = createActionName('LOAD_TRIPS');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadTrips = payload => ({ payload, type: LOAD_TRIPS });


export const loadTripsRequest = () => {
  return async dispatch => {

    dispatch(startRequest({ name: 'LOAD_TRIPS' }));
    try {

      let res = await axios.get(`${API_URL}/api/trips/extended`);

      dispatch(loadTrips(res.data));
      dispatch(endRequest({ name: 'LOAD_TRIPS' }));

    } catch(e) {
      dispatch(errorRequest({ name: 'LOAD_TRIPS', error: e.message }));
    }

  };
};

const initialState = {
  data: [],
  requests: {},
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TRIPS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.message, success: false }} };
    default:
      return statePart;
  }
}