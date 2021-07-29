import {BrowserRouter, Route, Link} from 'react-router-dom'
import homescreen from './screens/homescreen'
import coursescreen from './screens/coursescreen'
import './App.css';

function App() {
    const openMenu=()=>{
        document.getElementById("sidbar").style.width = "250px";
    }

    const closeMenu=()=>{
        document.getElementById("sidbar").style.width = "0px";
    }

  return (
    <BrowserRouter>
    <div class="grid-container">
        <header class="header">
            <div class="brand">
                <button class="button" id="buttn" onClick={openMenu}>&#9776;</button>
                <Link to="/">EDX</Link>
            </div>
            <div class="header-links">
                <a href="signin.html">Sign in</a>
                <a href="cart.html">Cart</a>
            </div>
        </header>
        <aside class="sidebar" id="sidbar">
            <h3>
                Subject Categories
            </h3>
            <button class="sidebar-close" onClick={closeMenu}>&times;</button>
            <ul>
                <li>
                    <a href="math.html">Math</a>
                </li>
                <li>
                    <a href="physics.html">Physics</a>
                </li>
            </ul>
        </aside>
        <main class="main">
            <div class="content">
                <Route path = "/courses/:id" component ={coursescreen}></Route>
                <Route path ="/" exact={true} component = {homescreen}></Route>
                
            </div>
        </main>
        <footer class="footer">All rights reserved</footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
