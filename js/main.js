
//defining navbar code
let navbarTemplate = `
<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  <a class="navbar-brand" href="index.html">So you wanna buy some stuff?!!  </a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navb" class="navbar-collapse collapse hide">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Deals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Locations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Departments</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="myCart.html">My Cart</a>
    </li>
    </ul>

    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><span class="fas fa-user"></span> Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="signOn.html"><span class="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
  </div>
</nav>   
`

function newContent() {
    var navbar = document.getElementById("navBar").innerHTML = navbarTemplate;
}
