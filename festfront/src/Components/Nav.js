const Nav = () => {
    return (
        <nav className="nav">
            <a className="nav-link-header" href="./">
                <h1 className="nav-header">
                TF
                <br />
                150
                </h1>
            </a>
            <ul className="nav-ul">
                <li className="nav-li">
                <a href="./anmalan">Deltagaranmälan</a>
                </li>
                <li className="nav-li">
                <a href="./">Basinfo</a>
                </li>
                <li className="nav-li">
                <a href="./fotoinfo">Fotoinfo</a>
                </li>
                <li className="nav-li">
                <a href="./coronainfo">Coronainfo/FAQ</a>
                </li>
                <li className="nav-li">
                <a href="./fundraising">Fundraising</a>
                </li>
                <li className="nav-li">
                <a href="./historik">Historik</a>
                </li>
                <li className="nav-li">
                <a href="./vettoetikett">Vett och Etikett</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;