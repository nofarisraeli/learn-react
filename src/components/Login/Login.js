import React, { useState } from 'react';
import {Redirect, withRouter}  from 'react-router-dom'
import Input from '../Input/Input'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/logo/lion-icon.png'

function Login(props) {

    const loginUserDetails = { username: '', password: '' }
    const [userState, setUserState] = useState(loginUserDetails)

    const handleChange = (event) => setUserState({
        ...userState,
        [event.target.name]: [event.target.value],
    })


    const loginHandle = () => {
        // console.log(userState);
        props.history.push('/HomePage')
    }

    return (
        <div>
            <Header text="AKUNA MATATA" imgSrc={logo} class="Logo" />
            <div className="Login">
                <Input name="username" labelName="Username: " inputType="text" parentFunction={handleChange} />
                <Input name="password" labelName="Password: " inputType="password" parentFunction={handleChange} />
                <Button variant="contained" size="medium" color="primary" onClick={loginHandle}>Login</Button>
            </div>
            <Footer text="THIS IS OUR MOTTO" />
        </div>
    );
}

export default withRouter(Login);