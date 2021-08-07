import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav.css';

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            sideBarOpen:"sideBarClose",
        }
    }

    sidebar= () => {
        this.setState({sideBarOpen:"sideBarOpen"})
        
    }
    sidebarclose= () => {
        this.setState({sideBarOpen:"sideBarClose"})
    }
    render() {
        const {sectionId,cart}=this.props;
        const {cSectionId="", aSectionId=""}=sectionId;
        const {sideBarOpen}= this.state;
        return (
            <div id="topbar-navigation">
                <nav className="navbar navbar-expand-lg navbar-light bg-light topbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">ShopLane</Link>
                        <div id="sidebar" className={sideBarOpen}>
                            <i className="fas fa-times" style={{fontSize: 18 +"px", color:"red", marginLeft:161+"px"}} onClick={this.sidebarclose} ></i>
                            <Link to="/" id="sidebarHome" onClick={this.sidebarclose} >Home</Link>
                            <Link to="/#clothing-section" id="sidebartopbar-clothing" onClick={this.sidebarclose} >Clothing</Link>
                            <Link to="/#accessories-section" id="sidebartopbar-accessories"  onClick={this.sidebarclose} >Accessories</Link>
                            
                        </div>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link home" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/#${cSectionId}`} className="nav-link">Clothing</Link>
                                </li>
        
                                <li className="nav-item">
                                    <Link to={`/#${aSectionId}`}  className="nav-link" tabindex="-1" aria-disabled="true">Accessories</Link>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="d-flex align-items-center">
                                
                                <div id="cart-wrapper">
                                    <p id="cart-count">{cart.length}</p>
                                    <Link to="/order"><i className="fas fa-shopping-cart"></i></Link>
                                </div>
                                <i className="fas fa-user-circle user-logo"></i>
                        
                        <button className="navbar-toggler" type="button" onClick={this.sidebar} id="menu-bar" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sectionId :state.sectionReducer.sectionId,
    cart:state.productReducer.cart
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(Navbar)
