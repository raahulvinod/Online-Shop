function getProducts(req, res) {
    res.render('admin/products/all-products');
}

function getNewProduct(req, res) {
    res.render('admin/products/new-products');
}

function createNewProduct(req, res) {
    console.log(req.body);
    console.log(req.file);

    res.render('admin/products/all-products');
}

module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct
}


