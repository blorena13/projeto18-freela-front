import Header from "../components/Header";
import styled from "styled-components";

export default function NewPost() {
    return (
        <>
        <Header />
        <PostContainer>
            
            <p> NOVO POST </p>
            <span>
            <form>
                <input
                    required
                    placeholder="Foto"
                    type="foto"
                    name="foto"

                />

                <input
                    required
                    placeholder="Descrição"
                    type="descricao"
                    name="descricao"

                />
                <button>CRIAR POST</button>
            </form>
            </span>
        </PostContainer>
        </>
        
    )
}

const PostContainer = styled.section`
 display: flex;
 height: 100vh;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 span {
    display: flex;
    background-color: orange;
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
    background-color: pink;
 }
 `