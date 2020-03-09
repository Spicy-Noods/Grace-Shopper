import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/cart'
import Checkouts from '../../react-express-stripe/frontend/Checkout'

function Checkout(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => props.checkout(props.cart)}
      >
        Pay
      </button>
      <Checkouts />
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  checkout: cart => dispatch(checkout(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
