import { useState } from "react"

export function TwitterFollowCard({ userName, children }) {
    const [isFollowing, setFollowing] = useState(false)

    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className='tw-followCard-avatar'
                    src="https://avatars.githubusercontent.com/u/163922176?v=4"
                    alt={`Avatar ${children}`} />
                <div className='tw-followCard-info' >
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName' >@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}