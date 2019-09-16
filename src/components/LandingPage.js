import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LandingPage = ({ startLogin }) => (
    <div className='box-layout'>
    
        <div className="box-layout__box">
            <div className="box-layout__content">
                <img className="logo" src="/media/wallet-savior.svg" alt="Logo" />
                <h3 className="sub-heading"><em>Expense tracking made easy</em></h3>
                <p className="box-text">We help you effortlessly track where your money goes so you can focus on earning more of it.</p>
                <ul className="box-text">
                    <li>Add and edit expenses</li>
                    <li>Categorize expenses by description</li>
                    <li>Easily search for past expenses</li>
                </ul>
                <button className="button btn-box" onClick={startLogin}>Login with Google</button>
                <p>Created by Omar Plasencia</p>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LandingPage);