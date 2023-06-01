import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import logo from "../assets/logo.png";

export default function SignIn() {

    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const {  setToken } = useContext(InfoContext);

    function handleForm(e) {
        setForm(({ ...form, [e.target.name]: e.target.value }));
    }

    function submitForm(e) {
        e.preventDefault();

        const urlPost = `${process.env.REACT_APP_API_URL}/signIn`;
        const body = { email: form.email, password: form.password };

        const promise = axios.post(urlPost, body);
        promise.then(res => {
            setToken(res.data.token);
            navigate("/home/me");
        });
        promise.catch(err => {
            console.log(err.response.data.mensagem);
        })

    }
    return (
        <SignInContainer>
            <img src={logo}/>
            <form onSubmit={submitForm}>
                <input
                    required
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />

                <input
                    required
                    placeholder="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <button>Entrar</button>
            </form>

            <p><Link to={`/signUp`}>Primeira vez? Cadastre-se</Link></p>
        </SignInContainer>
    )
}

const SignInContainer = styled.section`
background-color: #ed344d;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 70%;
}

button {
    background-color: #d0354a;
    width: 50%;
    padding: 12px;
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
    color:#FFFFFF;
    cursor: pointer;
}

img {
    width: 250px;
    
}
a {
    margin-bottom: 100px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif}
`