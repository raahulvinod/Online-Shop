const Product = require("../models/product.model");

function getCart(req, res) {
    res.render('customer/carts/cart');
}

async function addCartItem(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.body.productId)

    } catch(error) {
        next(error);
        return;
    }
    const cart = res.locals.cart;

    cart.addItem(product);
    req.session.cart = cart;

    res.status(201).json({
        message: 'Cart updated!',
        newTotalItems: cart.totalQuantity
    });
}

function updateCartItem(req, res) {
    const cart = res.locals.cart;

    const updatedItemData = cart.updateItem(req.body.productId, req.body.quantity);
    req.session.cart = cart;

    res.json({
        message: 'Item updated!',
        updateCartData: {
            newTOtalQuantity: cart.totalQuantity,
            newTotalPrice: cart.newTotalPrice,
            updatedItemPrice: updatedItemData.updatedItemPrice
        }
    })
}

module.exports = {
    addCartItem: addCartItem,
    getCart: getCart,
    updateCartItem: updateCartItem
}