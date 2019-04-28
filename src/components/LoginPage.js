import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
    <video className='box-layout__video' autoPlay muted loop>
        <source src='/media/Home_work.mp4' type='video/mp4'></source>
        <source src='/media/Home_work.webm' type='video/webm'></source>
    </video>
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Tracker</h1>
            <p>Expense tracking made easy</p>
            <button className='button' onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);