import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CategoryService } from '../../services/CategoryService';
import { Category, CategoryInput } from '../schema/CategorySchema';

@Service()
@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query((returns) => [Category])
  async categories() {
    return this.categoryService.findAll();
  }

  @Query((returns) => Category)
  async categoryById(@Arg('categoryId') categoryId: string) {
    return this.categoryService.findById(categoryId);
  }

  @Query((returns) => Category)
  async categoryByName(@Arg('categoryName') categoryName: string) {
    return this.categoryService.findByName(categoryName);
  }

  @Mutation((returns) => Category)
  createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    return this.categoryService.create(categoryInput);
  }
}
