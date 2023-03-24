import { createStore } from 'easy-peasy';
import { persist } from 'easy-peasy';
import global from './global';

const model = {
  ...global,
};

const store = createStore(persist(model));

export default store;
