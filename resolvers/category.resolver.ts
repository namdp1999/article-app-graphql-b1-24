import Category from "../models/category.model";

export const resolversCategory = {
  Query: {
    getListCategory: async () => {
      const categories = await Category.find({
        deleted: false
      });

      return categories;
    },
    getCategory: async (_, args) => {
      const { id } = args;

      const category = await Category.findOne({
        _id: id,
        deleted: false
      });

      return category;
    },
  },
  Mutation: {
    createCategory: async (_, args) => {
      const { category } = args;
      
      const newCategory = new Category(category);
      await newCategory.save();

      return newCategory;
    },
    deleteCategory: async (_, args) => {
      const { id } = args;
      
      await Category.updateOne({
        _id: id
      }, {
        deleted: true,
        deletedAt: new Date()
      });

      return "Đã xóa";
    },
    updateCategory: async (_, args) => {
      const { id, category } = args;

      await Category.updateOne({
        _id: id,
        deleted: false
      }, category);

      const data = await Category.findOne({
        _id: id,
        deleted: false
      });

      return data;
    },
  }
}