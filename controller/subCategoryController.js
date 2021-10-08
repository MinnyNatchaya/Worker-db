const { SubCategory } = require('../models');

exports.getAllSubCategorys = async (req, res, next) => {
  try {
    const subCategory = await SubCategory.findAll();
    res.json({ subCategory });
  } catch (err) {
    next(err);
  }
};

exports.getSubCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findAll({ where: { id } });
    res.json({ subCategory });
  } catch (err) {
    next(err);
  }
};

exports.createSubCategory = async (req, res, next) => {
  try {
    const { name, id } = req.body;
    const subCategory = await SubCategory.create({
      name,
      categoryId: id
    });
    res.status(201).json({ subCategory });
  } catch (err) {
    next(err);
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, category_id } = req.body;
    const [rows] = await SubCategory.update({ name, category_id }, { where: { id } });
    //[1]
    if (rows === 0) {
      return res.status(400).json({ message: 'Fail to update sub category' });
    }
    res.status(200).json({ message: 'Success update sub category' });
  } catch (err) {
    next(err);
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await SubCategory.destroy({ where: { id } });
    //1
    if (rows === 0) {
      return res.status(400).json({ message: 'Fail to delete sub category' });
    }
    res.status(200).json({ message: 'Success delete sub category' });
  } catch (err) {
    next(err);
  }
};