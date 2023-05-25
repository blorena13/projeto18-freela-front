import styled from "styled-components"

export default function Header(){
    return (
    <HeaderContainer>
        <p> fulano de tal teste</p>
    </HeaderContainer>
    )
}

const HeaderContainer = styled.section`
display: flex;
background-color: red;
width: 100%;
height: 50px;
position: fixed;

`