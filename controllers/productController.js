const Product = require('../models/productmodel');



exports.getProducts = async ( req , res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


exports.getProduct = async ( req , res ) => {
    try{
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
    }catch(error){
      res.status(500).json({message:error.message});
    }
}


  // Add product using ProductSchema
exports.addProduct = async (req, res) => { 
    try{
        const product = await Product.create (req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
};



//Update a product
exports.updateProduct = async ( req , res ) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id , req.body)

        if (!product){
            return res.status(404).json({message:"Product not found"});
        }
        
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        // res.status(200).json(product);

    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

//Delete a product
exports.deleteProduct = async ( req , res ) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message:"Not available"})
        }

        res.status(200).json({message:"Product delete successfully"});



    }catch(error) {
        res.status(500).json({message:error.message})
    }
}