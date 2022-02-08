import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserInput, User } from '../schema/UserSchema';
import UserService from '../../services/UserService';
import { Service } from 'typedi';

@Service()
@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query((returns) => User, { nullable: true })
  async user(@Arg('userId') userId: string) {
    return this.userService.findById(userId);
  }

  @Mutation((returns) => User)
  async addUser(@Arg('userData') userData: UserInput) {
    return this.userService.create(userData);
  }

  @Mutation((returns) => User)
  async deleteUser(@Arg('userId') userId: string) {
    return this.userService.deleteById(userId);
  }
}
