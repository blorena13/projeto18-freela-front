import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "/home/lorena/projeto18-freela-front/src/assets/logo.png";

export default function SignUp() {

    const [form, setForm] = useState({
        name: "", 
        email: "", 
        image: "", 
        bio: "", 
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm (e){
        e.preventDefault();

        if(form.password !== form.confirmPassword) return alert("As senhas não são iguais!");
        delete form.confirmPassword;

        const urlPost = `${process.env.REACT_APP_API_URL}/signUp`;
        const body = {
            name: form.name, 
            email: form.email, 
            profileImage: form.image, 
            bio: form.bio, 
            password: form.password
        };
        const promise = axios.post(urlPost, body);
        promise.then(res => {
            navigate("/signIn");
        });
        promise.catch(err => {
            console.log(err.response.data.message);
            console.log("Problemas ao conectar com o servidor!");
        })

    }

    return (

        <SignUpContainer>
            <img src={logo} />
            <form onSubmit={submitForm}>
                <input
                    required
                    placeholder="Nome"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />

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
                    placeholder="Foto de perfil"
                    type="Imagem"
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                />

                <input
                    required
                    placeholder="Biografia (até 200 caracteres)"
                    type="text"
                    name="bio"
                    value={form.bio}
                    onChange={handleForm}
                />
                <input
                    required
                    placeholder="Senha"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleForm}
                />
                <input
                    required
                    placeholder="Confirme sua senha"
                    type="password"
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={handleForm}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Link to={`/signIn`}>Já possui uma conta? Entre agora!</Link>
        </SignUpContainer>

    )
}

const SignUpContainer = styled.section`
background-color: #ed344d;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;


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
    margin-top: 10px;
    margin-bottom: 20px;
    color:#FFFFFF;
}
img {
    width: 250px;
    margin-top: 15px;
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