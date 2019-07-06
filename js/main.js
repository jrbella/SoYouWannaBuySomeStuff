
//defining navbar code
let navbarTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="">So You Wanna Buy Some Stuff</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="">Deals</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">Location</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">Depatments</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" href="myCart.html">My Cart </a>
                </li>

        </ul>
    </nav>    
`

function newContent() {
    var navbar = document.getElementById("navBar").innerHTML = navbarTemplate;
    
}
