const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    icon:{
        type:String,
    },
    availableCountries:{
        type:Array
    }
});
module.exports = mongoose.model("category",CategorySchema);