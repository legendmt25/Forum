import { createWriteStream } from 'fs';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import path from 'path';
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

  @Mutation((returns) => Community)
  async changeAvatar(
    @Arg('communityId') communityId: string,
    @Arg('file', () => GraphQLUpload) file: FileUpload
  ) {
    return await this.communityService.updateAvatar(communityId, file);
  }

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
    @Arg('categoryName') categoryName: string,
    @Arg('adminId') adminId: string,
    @Arg('communityInput') communityInput: CommunityInput
  ) {
    return this.communityService.create(categoryName, adminId, communityInput);
  }

  @Mutation((returns) => Community)
  async deleteById(@Arg('communityId') communityId: string) {
    return await this.communityService.deleteById(communityId);
  }

  @Mutation((returns) => Community)
  async joinCommunity(
    @Arg('communityId') communityId: string,
    @Arg('userId') userId: string
  ) {
    return this.communityService.joinCommunity(communityId, userId);
  }
}
