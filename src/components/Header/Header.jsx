import { NavLink } from "react-router-dom";
import './Header.css'

function Header(){
    return(
        <>
        <header className="header-container">

            <div className="navi">
                <ul>
                    <li>
                        <NavLink 
                        to={'/'} 
                        className={({ isActive }) => isActive ? 'active' : 'inactive'}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/produtos'} 
                        className={({ isActive }) => isActive ? 'active' : 'inactive'}
                        >Carros</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/criar-produto'} 
                        className={({ isActive }) => isActive ? 'active' : 'inactive'}
                        >Adicionar</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        </>
    );
}
export default Header;