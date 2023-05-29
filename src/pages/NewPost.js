import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

export default function NewPost() {

    const [form, setForm] = useState({ photo: "", description: "" });
    const navigate = useNavigate();
    const { token } = useContext(InfoContext);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function createPost(e) {
        e.preventDefault();

        const urlPost = `${process.env.REACT_APP_API_URL}/newPost`;
        const body = { photo: form.photo, description: form.description };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(urlPost, body, config);
        promise.then(res => {
            navigate("/home/me");
        })
        promise.catch(err => {
            console.log(err.response.data);
        })
    }
    return (
        <>
            <Header />
            <PostContainer>

                <p> NOVO POST </p>
                <span>
                    <form onSubmit={createPost}>

                   
                        <input
                            required
                            placeholder="Foto"
                            type="imagem"
                            name="photo"
                            value={form.photo}
                            onChange={handleForm}
                        />

                        <input
                            required
                            placeholder="Descrição"
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleForm}
                        />

                        <button>CRIAR POST</button>
                    </form>
                </span>
            </PostContainer>
            <Footer />
        </>

    )
}

const PostContainer = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 input{
    background-color: #ed344d;
    color: #FFFFFF;
 }

 input::placeholder{
    color: #FFFFFF;
 }

 p{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: #ed344d;
    margin-top: 100px;
    margin-bottom: 50px;
 }

 span {
    display: flex;
    width: 70%;
    justify-content: center;
 }

 form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 80%;
 }

 button{
    background-color: #ed344d;
    width: 50%;
    padding: 12px;
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
    color:#FFFFFF;
 }
 `