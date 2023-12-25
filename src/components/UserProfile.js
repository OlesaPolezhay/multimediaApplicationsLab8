import React from "react";
import myPhoto from './Панда.png';

function UserProfile(props) {
    return (
        <div className="resume-container">
            <div className="resume">
                <div className="profile-card">
                    <img src={props.photo} alt="User" className="profile-photo" />
                    <h1>{props.name}</h1>
                    <p>{props.profession}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

function MyApp() {
    const user = {
        name: "Панда",
        profession: "Їсти",
        description: "\n" +
            "Панда - це великий ссавець з вираженими чорно-білими смугами, який є символом Китаю та одним із " +
            "найвідоміших видів ведмедів. Вони мають масивне тіло, велику голову з виразними очима та чорно-білим " +
            "окрасом, який надає їм вигляд неповторності. Панди відомі своєю харизмою та спокійним характером, а також " +
            "тим, що вони харчуються переважно бамбуком. Ці милі тварини є символом миролюбності та врівноваженості.",
        photo: myPhoto
    };

    return <UserProfile {...user} />;
}

export default MyApp;
