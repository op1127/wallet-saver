import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Waterbill'}))
store.dispatch(addExpense({description: 'Gasbill', amount: 1000, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 165000}))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);;
console.log(visibleExpenses);

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

