import globe from '../assets/globe.png'

export default function Header() {
    return (
        <header>
                <img src={globe} alt="Globe image" />
                <h1>My Travel Journal</h1>
        </header>
    )
}