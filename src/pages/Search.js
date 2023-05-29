import styled from "styled-components";
import Header from "../components/Header";
import CardSearch from "../components/CardSearch";
import Footer from "../components/Footer";

export default function Search() {
    return (
        <Container>
            <Header />
            <SearchContainer>
                <span>
                    <input
                        type="text"
                        placeholder="Buscar..."
                    />
                    <ion-icon name="search-outline"></ion-icon>
                </span>

                <CardSearch />
            </SearchContainer>
            <Footer />
        </Container>
    )
}

const Container = styled.section`
display: flex;
justify-content: center;

`

const SearchContainer = styled.section`
display: flex;
height: 100vh;
width: 75%;
margin-top: 80px;
flex-direction: column;
align-items: center;

span {
display: flex;
background-color: #ed344d;
flex-direction: row;
height: 50px;
align-items: center;
border-radius: 50px;
width:80%;
margin-top: 10px;
font-size: 30px;


ion-icon {
    margin-right: 15px;
    color: #FFFFFF;
}
}

input{
    background-color: #ed344d;
    color: #ffffff;
    border: none;
}

input::placeholder{
    color: #FFFFFF;
}



`