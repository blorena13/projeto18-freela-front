import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            image: form.image, 
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
            <p>Cadastro/ imagem da logo</p>
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