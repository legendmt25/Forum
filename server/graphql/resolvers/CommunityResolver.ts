import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CommunityService } from '../../services/CommunityService';
import UserService from '../../services/UserService';
import { Community, CommunityInput } from '../schema/CommunitySchema';

@Service()
@Resolver()
export class CommunityResolver {
  constructor(
    private readonly communityService: CommunityService,
    private readonly userService: UserService
  ) {}

  @Query((returns) => [Community])
  async communities() {
    return await this.communityService.findAll();
  }

  @Query((returns) => Community)
  async community(@Arg('communityId') communityId: string) {
    return await this.communityService.findById(communityId);
  }

  @Mutation((returns) => Community)
  async createCommunity(
    @Arg('adminId') adminId: string,
    @Arg('communityInput') communityInput: CommunityInput
  ) {
      return this.communityService.create(adminId, communityInput);
  }

  @Mutation((returns) => Community)
  async deleteById(@Arg('communityId') communityId: string) {
    return await this.communityService.deleteById(communityId);
  }
}
