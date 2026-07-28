import "../assets/styles/Home.css"

export default function Home() {
    return (
        <div className="home">
            <strong className="streak">
                <span className="fire">🔥</span>
                <span>Streak</span>
                <span className="count">12</span>
            </strong>
            <p className="coins">Coins 🪙 : 00000</p>
            <p className="score">Score 🎰 : 00000</p>
            <div className="hero">
                <div className="orbit orbit-1">🥄</div>
                <div className="orbit orbit-2">🥕</div>
                <div className="orbit orbit-3">🍄</div>
                <div className="orbit orbit-4">🧄</div>
                <div className="orbit orbit-5">🧪</div>
                <div className="orbit orbit-6">🔪</div>
                <h1 className="title">Mystic Kitchen</h1>
            </div>
            <div className="play-btn-wrapper">
                <button className="play-btn">Play</button>
            </div>
            <div className="guide-btn-wrapper">
                <button className="guide-btn">How To Play?</button>
            </div>
        </div>
    )
}