import './Home.css'
import "./../../../src/index.css"

export function Home() {
    return <div className="home">
        <div className='container flex'>
            <h1>
            Stay On Track, <span>Stay Ahead.</span> 
            </h1>
        
            <p>
            Effortlessly steer through your tasks and stay one step ahead of the game.
            </p>
        
            <button className='get-started-btn'>Get Started</button>
        </div>
    </div>
}