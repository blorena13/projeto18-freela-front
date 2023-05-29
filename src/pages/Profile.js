import { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const [profile, setProfile] = useState([]);
    const {token } = useContext(InfoContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const url = `${process.env.REACT_APP_API_URL}/profile`;
    //     const config = {
    //         headers:
    //        { Authorization: `Bearer ${token}`}
    //     }

    //     const promise = axios.get(url, config);
    //     promise.then((res) => {
    //         setProfile(res.data);
    //     })
    //     promise.catch(err => console.log(err.response.data.mensagem));
    // }, []);

    return (

        <ProfileContainer>
            <Header />
            <FeedContainer>
                <ProfileMe>
                    <span>
                        <img />
                        <div>
                            <p>Fulano de tal</p>
                            <p>biografia</p>

                            <div>
                                <button onClick={()=> navigate("/:type")}>Ver seguidores</button>
                                <button>Ver quem eu sigo</button>
                            </div>


                        </div>
                    </span>
                </ProfileMe>
                <Feed>
                    <span>
                        <img />
                        <div> <p>
                        <ion-icon name="heart-outline"></ion-icon>
                            pessoas curtiram sua foto</p>
                            <p>hora e data</p>
                        </div>
                        <p> descrição adorei essa foto</p>
                    </span>
                </Feed>

            </FeedContainer>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.section`
background-color: #FFFFFF;
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
 button {
    border-radius: 50px;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #ed344d;
    border: 1px solid #FFFFFF;
 }
    

div:nth-child(3) {
    display: flex;
    width: 300px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
}
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
    background-color:#ed344d;
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
