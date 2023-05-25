import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {

    const [form, setForm] = useState({ email: "", password: ""});
    const navigate = useNavigate();

    function handleForm(e){
        setForm(({...form, [e.target.name]: e.target.value}));
    }

    function submitForm(e){
        e.preventDefault();

        const urlPost = `${process.env.REACT_APP_API_URL}/signIn`;
        const body = {email: form.email, password: form.password};

        const promise = axios.post(urlPost, body);
        promise.then(res => {
            navigate("/home/me");
        });
        promise.catch(err => {
            console.log(err.response.data.mensagem);
        })

    }
    return (
        <SignInContainer>
            <p>Login/ imagem da logo</p>
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

            <Link to={`/signUp`}>Primeira vez? Cadastre-se</Link>
        </SignInContainer>
    )
}

const SignInContainer = styled.section`
background-color: yellowgreen;
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
    width: 50%;
    padding: 12px;
    border-radius: 5px;
    border: none;
}
`