import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../redux/actions/index'
import Accessories from '../Accessories'
import Banner from '../Banner'
import loader from './loader/preloader.gif'
import '../Cards/card.css'
import Clothing from '../Clothing/index'


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
        
        const {searchValue,loading}=this.state;
        return (
            <div>
                { loading=== true ?<div id="loading-div"><img src={loader}/></div>:<>
                <Banner searchValue={searchValue} handleSearchValue={this.setSearchValue}/>
              
             
                <Clothing />
                <Accessories />
                
                </>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products : state.products,
})

const mapDispatchToProps = (dispatch)=> ({
    getProducts : (payload) => dispatch(getProduct(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
