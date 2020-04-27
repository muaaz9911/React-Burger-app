import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/buildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js'
import axios from 'axios';
import Axios from '../../axios-orders';
import Error from './Error';

import spinner from '../../components/UI/Spinner/Spinner';



const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component {
   

    constructor(props) {
        super(props)
    
        this.state = {
             
             ingredients:null,
             totalPrice: 4,
              purchasable: false,
              purchasing: false,
              loading:false,
              error:false,
              errormessage:''
              

        }
    }

    componentDidMount () {
        axios.get( 'https://react-my-burger-8c0a2.firebaseio.com/ingredients.json' )
            .then( response => {
                this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

updatepurchasestate=()=>{
     if(this.state.totalPrice>4){
         this.setState({purchasable:true})
     }
}


purchaseHandler = () => {
    console.log(' beforehandler');
    this.setState({purchasing: true},()=>{console.log(' FTER handler');
    console.log(this.state.purchasing); });
    
}

purchaseCancelHandler = () => {
    this.setState({purchasing: false});
}

 addingredient = (type) => {
    this.updatepurchasestate();
      const oldcount = this.state.ingredients[type];
      const updatedcount = oldcount+1 ;
      const updatedingredient = { ...this.state.ingredients };
             updatedingredient[type] = updatedcount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedingredient } );

        this.updatepurchasestate();
     
        
 }

 removingingredient = (type) => {
    const oldcount = this.state.ingredients[type];
    if(oldcount<=0){
        return;
    }
    const updatedcount = oldcount-1 ;
    const updatedingredient = { ...this.state.ingredients };
           updatedingredient[type] = updatedcount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState( { totalPrice: newPrice, ingredients: updatedingredient } );
      this.updatepurchasestate();
     
      
}

purchaseContinueHandler = () => {
    // alert('You continue!');
    this.setState( { loading: true } );
    const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
            name: 'Max Schwarzmüller',
            address: {
                street: 'Teststreet 1',
                zipCode: '41351',
                country: 'Germany'
            },
            email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
    }


    Axios.post('/orders.json' , order).
         then( 
               response => {
                   
                   this.setState({ loading: false, purchasing: false });
                   console.log('in response'+response);
                   console.log(response);
               }
            ).
         catch(error => {
            console.log('error ouucured');
            console.log(error);
            if(error){
            this.setState({ loading: false , error:true, errormessage:'some error occured' });
            }
        });
         
}

    render() {

        


        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if ( this.state.ingredients ) {
            burger = (
                <div>
                <Burger  ingredients={this.state.ingredients} price= {this.state.totalPrice} ></Burger>
               <BuildControls ingredientadded = {this.addingredient} 
               ingredietremoved = {this.removingingredient}
               price= {this.state.totalPrice}
               purchasable = {this.state.purchasable}
               ordered={this.purchaseHandler}
               ></BuildControls>
               </div>
            );
            orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} 
            price= {this.state.totalPrice} />;
        }

        if ( this.state.loading ) {
                orderSummary = <Spinner/>;
            }
      
        if ( this.state.error ) {
            orderSummary = <Error errormessage={this.state.errormessage}></Error>;
        }


        return (
            <React.Fragment>
                <Modal  show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                 </Modal>
                 {burger}
               
            </React.Fragment>
        )
    }
}

export default BurgerBuilder
