import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <>
            <div className={style.container}>
                <ul className={style.container_styling}>
                    <li>
                        <figure><img src={logo} alt="Logo Social Brothers"/></figure>
                    </li>
                    <div className={style.container_navigation}>
                        <li><NavLink
                            className={({isActive}) => isActive ? style.active : style.default}
                            to="/">Home</NavLink></li>
                        <li><NavLink
                            className={({isActive}) => isActive ? style.active : style.default}
                            to="/blog">Blog</NavLink></li>
                    </div>

                </ul>
            </div>
        </>
    )
}

export default Header;
