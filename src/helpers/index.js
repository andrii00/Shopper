const countCartTotalSum = (cart) => {
    const mappedCart = JSON.parse(JSON.stringify(cart));
    mappedCart.totalSum = cart.Products.reduce((sum, b) => sum + b.price * b.ProductsShoppingCarts.count, 0)

    return mappedCart;
}

module.exports = {
    countCartTotalSum
};
