import React from 'react'
import { connect } from 'react-redux'
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="CartDropdown">
            <div className="cartItems">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <br/>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({ cartItems: selectCartItems(state) })

export default connect(mapStateToProps)(CartDropdown)