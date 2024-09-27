import './App.css'
import {TwitterFollowCard}  from './TwitterFollowCard.jsx'

export default function App() {
    return(
        <section className = "App">
            <TwitterFollowCard isFollowing userName="EdgarC97">
                Edgar Cardona 
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="BrayanLanda">
                Brayan Acosta 
            </TwitterFollowCard>
        </section>
    );
}