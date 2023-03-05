import './header.scss'
import Logo from '../../pic/logo.png'

const Header = () => {

    return (
        <>
            <nav>
                <img className={'logo'} src={Logo} alt="Calculator" />
                <h1>Calculator <br/> Premium</h1>
            </nav>
        </>
    )
}

export default Header