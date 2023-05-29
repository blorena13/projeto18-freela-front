import styled from "styled-components";
import Header from "../components/Header";
import CardFollows from "../components/CardFollows";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function Follows() {

    const [follows, setFollows] = useState([]);
    const { token } = useContext(InfoContext);
    const { type } = useParams();

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/me/${type}`;
        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promise = axios.get(url, config);
        promise.then((res) => {
            setFollows(res.data);
        })
        promise.catch(err => console.log(err.response.data.mensagem));

    }, []);

    return (
        <Container>
            <Header />
            <FollowsContainer>
                <p> Meus seguidores ou seguindo</p>

                <CardFollows />
            </FollowsContainer>
            <Footer />
        </Container>
    )
}

const Container = styled.section`
display: flex;
justify-content: center;
`

const FollowsContainer = styled.section`
display: flex;
height: 100vh;
align-items: center;
flex-direction: column;
width: 50%;
margin-top: 120px;
font-family: 'Ubuntu', sans-serif;
font-weight: 700;
font-size: 35px;
color: #ed344d;


`