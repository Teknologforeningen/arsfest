const Nav = () => {
    return (
        <nav class="nav">
            <a href="./">
                <h1 class="nav-header">
                TF
                <br />
                150
                </h1>
            </a>
            <ul class="nav-ul">
                <li class="nav-li">
                <a href="./anmalan">Deltagaranmälan</a>
                </li>
                <li class="nav-li">
                <a href="./">Basinfo</a>
                </li>
                <li class="nav-li">
                <a href="./fotoinfo">Fotoinfo</a>
                </li>
                <li class="nav-li">
                <a href="./coronainfo">Coronainfo/FAQ</a>
                </li>
                <li class="nav-li">
                <a href="./fundraising">Fundraising</a>
                </li>
                <li class="nav-li">
                <a href="./historik">Historik</a>
                </li>
                <li class="nav-li">
                <a href="./vettoetikett">Vett och Etikett</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;