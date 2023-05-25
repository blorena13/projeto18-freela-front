import styled from "styled-components";
import Header from "../components/Header";
import CardFollows from "../components/CardFollows";

export default function Follows() {
    return (
        <Container>
            <Header />
            <FollowsContainer>
                <p> Meus seguidores ou seguindo</p>

                <CardFollows />
            </FollowsContainer>
        </Container>
    )
}

const Container = styled.section`
display: flex;
justify-content: center;
`

const FollowsContainer = styled.section`
display: flex;
background-color: pink;
height: 100vh;
align-items: center;
flex-direction: column;
width: 50%;

p {
    margin-top: 50px;
}


`