import selectors from './productSelectors';
import actions from './productActions';

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
};