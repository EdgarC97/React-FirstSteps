import './App.css'
import {TwitterFollowCard}  from './TwitterFollowCard.jsx'

export default function App() {
    return(
        <section className = "App">
            <TwitterFollowCard isFollowing userName="EdgarC97">
                Edgar Cardona 
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="Juan9Ca8">
                Juan Camilo Rojas 
            </TwitterFollowCard>
        </section>
    );
}