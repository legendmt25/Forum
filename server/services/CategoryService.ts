import Mongoose from 'mongoose';
import { Inject, Service } from 'typedi';
import { CategoryInput } from '../graphql/schema/CategorySchema';
import { ICategory } from '../models/CategoryModel';

@Service()
export class CategoryService {
  constructor(
    @Inject('CATEGORY')
    private readonly categoryModel: Mongoose.Model<ICategory>
  ) {}

  async findAll() {
    return this.categoryModel.find().populate('communities');
  }

  async findByName(name: string) {
    return this.categoryModel.findOne({ name }).populate('communities');
  }

  async findById(id: string) {
    return this.categoryModel.findById(id).populate('communities');
  }

  async create(categoryInput: CategoryInput) {
    if (await this.findByName(categoryInput.name.toString()) != null) {
      throw new Error(`Category ${categoryInput.name} already exists`);
    }
    const category = new this.categoryModel(categoryInput);
    return category.save();
  }

  async deleteById(id: string) {
    const category = this.findById(id);
    this.categoryModel.findByIdAndDelete(id);
    return category;
  }

  async deleteByName(name: string) {
    return this.categoryModel.findOneAndDelete({ name });
  }
}
