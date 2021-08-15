import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards from '../Cards'

export class Clothing extends Component {
    render() {
        const {products}=this.props;
        return (
            <div>
                <section className="cards-section" id="clothing-section">
                <h3 className="cards-section-heading">Clothing for Men and Women</h3>
                <div className="d-flex flex-wrap justify-content-center card-wrapper">
                {products.length !==0 ? products.map((item)=> {
                   if(item.isAccessory===false){
                    return <Cards {...item}/>
                   }
                }):<h6 style={{color:"red"}}>Product Not Found</h6>}
                </div>
            </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products : state.products
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(Clothing)
