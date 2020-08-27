import React, { useReducer } from 'react';
import { uuid as uuidv4 } from 'uuid';
import Context from './Context';
import reducer from './reducer';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 0,
        name: 'John Doe',
        email: 'nope@nope.com',
        phone: '111-222-3333',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Jane Doe',
        email: 'nope1@nope.com',
        phone: '111-222-4444',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Joe Shmoe',
        email: 'nope2@nope.com',
        phone: '111-222-5555',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Jane Shmoe',
        email: 'nope3@nope.com',
        phone: '111-222-6666',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContactState;
