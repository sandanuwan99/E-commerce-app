const CategorySchema = require("../model/CategoryScema");
//save(Post)
const createCategory = (req, res) => {
    console.log("Hi this is body data");
    console.log(req.body);
}
//update(put)
const updateCategory = (req, res) => {
    console.log(req.body);
}
//delete (delete)
const deleteCategory = (req, res) => {
    console.log(req.body);
}
//find by id (get)
const findCategoryById = (req, res) => {
    console.log(req.body);
}
//find all (get)
const findAllCategories = (req, res) => {
    console.log(req.body);
}
module.exports = {createCategory,updateCategory,deleteCategory,findCategoryById,findAllCategories}
