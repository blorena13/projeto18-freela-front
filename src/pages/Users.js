import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

export default function Users(){

    const [follow, setFollow]= useState(false);
    const [like, setLike] = useState(false);
    return (

        <UsersContainer>
            <Header />
            <FeedContainer>
                <ProfileMe>
                    <span>
                        <img />
                        <div>
                            <p>Fulano de tal</p>
                            <p>biografia</p>

                            <div> { 
                            follow ? <button onClick={()=> setFollow(false)}>Seguindo</button>
                             : <button onClick={()=> setFollow(true)}>Seguir</button>} 
                                
                            </div>


                        </div>
                    </span>
                </ProfileMe>
                <Feed>
                    <span>
                        <img />
                        <div> <p>
                            { 
                            like ?  <ion-icon onClick={()=> setLike(true)} name="heart"></ion-icon> 
                            : <ion-icon onClick={()=> setLike(false)} name="heart-outline"></ion-icon>}

                            curtir</p>
                            <p>hora e data</p>
                        </div>
                        <p> descrição adorei essa foto</p>
                    </span>
                </Feed>

            </FeedContainer>
            <Footer />
        </UsersContainer>
    )
}

const UsersContainer = styled.section`
height: 100%;
display: flex;
justify-content: center;
`
const FeedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 40%;
margin-top: 90px;
`
const ProfileMe = styled.div`
border: 1px solid #f5f5f5;
background-color: #ed344d;
display: flex;
width: 100%;
border-radius: 5px;

img{
    width: 80px;
    border-radius: 50%;
}
span {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
}

div{
    display: flex;
    flex-direction: column;
    width: 72%;

    p{
        margin-bottom: 7px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    }

    p:nth-child(2){
        font-size: 11px;
    }

    }

    button {
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #ed344d;
    border: 1px solid #FFFFFF;
    width: 40%;
    margin-top: 10px;
 }
`

const Feed = styled.div`
display: flex;
margin-top: 15px;
width: 100%;

span {
    display: flex;
    width: 100%;
    padding: 20px;
    background-color: #ed344d;
    flex-direction: column;
    border-radius: 5px;

p{
    font-size: 15px;
    color: #FFFFFF;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
}

}

img {
    width: 100%;
    height: 420px;
    background-color: pink;
    border-radius: 5px;
}

div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 5px;

    p{
        font-size: 15px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        align-items: center;
        display: flex;
    }

   
    ion-icon {
        margin-right: 5px;
        align-items: center;
        font-size: 18px;
    }
}


`

