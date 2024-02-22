import React, {Component} from "react"
import {MenuItems} from "./MenuItems"
import "./navbar.css"
import { Button } from "./Button"
class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">HFrontEnd
                Mastermind 
                
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.checked ? "fas fa-times" : "fas fa-bars"}></i>
                    

                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        console.log(item);
                        return(
                    <li key={index}>
                        <a className={item.cName} 
                        href={item.url}>
                            {item.title}
                    </a></li>

                            
                        )
                    })}


                </ul>
                <Button>
                    Sign in</Button>
            </nav>
        )
    }
} 
export default Navbar