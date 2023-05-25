import Header from "../components/Header";
import styled from "styled-components";

export default function Profile() {
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
                                <button>Ver seguidores</button>
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
background-color: yellowgreen;
height: 100vh;
display: flex;
justify-content: center;
`
const FeedContainer = styled.div`
background-color: blue;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 40%;
margin-top: 25px;
`
const ProfileMe = styled.div`
display: flex;
width: 100%;
background-color: brown;

img{
    width: 80px;
    background-color: red;
    border-radius: 50%;
}
span {
    display: flex;
    width: 100%;
    background-color: pink;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
}

div{
    display: flex;
    flex-direction: column;
    width: 72%;

    p{
        margin-bottom: 5px;
    }

    

div:nth-child(3) {
    display: flex;
    background-color: red;
    flex-direction: row;
    justify-content: space-between;
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
    background-color: red;
    flex-direction: column;
   

}

img {
    width: 100%;
    height: 420px;
    background-color: pink;
}

div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
}


`
