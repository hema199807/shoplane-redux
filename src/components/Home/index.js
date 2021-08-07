import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../redux/actions/index'
import Cards from '../Cards'
import Banner from '../Banner'
import loader from './loader/preloader.gif'
import '../Cards/card.css'


export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:"",
            orgProducts:[],
            loading:true
        }
    }
    
    componentDidMount () {
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(({data})=>{
          this.props.getProducts(data);
          this.setState({orgProducts:this.props.products, loading:false});
        }
        );
        window.scrollTo(0, 0)
    }
    setSearchValue=(onSearchValue)=>{
        const {orgProducts}=this.state;
        this.setState({searchValue:onSearchValue});
        const updatedProduct=orgProducts.filter(({name, brand})=>{
            let searchProduct;
         if(searchProduct=name.toLowerCase().includes(onSearchValue) || brand.toLowerCase().includes(onSearchValue)){
            return searchProduct;
        }
        })
        console.log(onSearchValue, updatedProduct);
        this.props.getProducts(updatedProduct)
       
    }
    
    render() {
        const {products,sectionId}=this.props;
         const {cSectionId="", aSectionId=""}=sectionId;
        const {searchValue,loading}=this.state;
        return (
            <div>
                { loading=== true ?<div id="loading-div"><img src={loader}/></div>:<>
                <Banner searchValue={searchValue} handleSearchValue={this.setSearchValue}/>
                {/* <h1>Home-{name}-{age}-{address}</h1> */}
             
                <section className="cards-section" id={cSectionId}>
                <h3 className="cards-section-heading">Clothing for Men and Women</h3>
                <div className="d-flex flex-wrap justify-content-center card-wrapper">
                {products.length !==0 ? products.map((item)=> {
                   if(item.isAccessory===false){
                    return <Cards {...item}/>
                   }
                }):<h6 style={{color:"red"}}>Product Not Found</h6>}
                </div>
                </section>
                <section className="cards-section" id={aSectionId}>
                <h3 className="cards-section-heading">Accessories for Men and Women</h3>
                <div className="d-flex flex-wrap justify-content-center card-wrapper">
                {products.length !==0 ? products.map((item)=> {
                   if(item.isAccessory===true){
                    return <Cards {...item}/>
                   }
                }):<h6 style={{color:"red"}}>Product Not Found</h6>}
                </div>
                </section>
                </>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sectionId :state.sectionReducer.sectionId,
    products : state.productReducer.products
})

const mapDispatchToProps = (dispatch)=> ({
    getProducts : (payload) => dispatch(getProduct(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
