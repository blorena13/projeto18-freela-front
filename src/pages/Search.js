import styled from "styled-components"
import Header from "../components/Header"
import CardSearch from "../components/CardSearch"

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
background-color: pink;
width: 75%;
margin-top: 60px;
flex-direction: column;
align-items: center;

span {
display: flex;
background-color: white;
flex-direction: row;
height: 50px;
align-items: center;
border-radius:15px;
width:80%;
margin-top: 10px;
font-size: 30px;
}



`