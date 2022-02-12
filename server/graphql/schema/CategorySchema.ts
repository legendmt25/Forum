import { ICommunity } from '../../models/CommunityModel';
import { ObjectType, ID, Field, InputType } from 'type-graphql';
import { Community } from './CommunitySchema';

@ObjectType()
export class Category {
  @Field((is) => ID)
  id!: String;

  @Field()
  name!: String;

  @Field((is) => [Community])
  communities!: Community[];
}

@InputType()
export class CategoryInput implements Partial<Category> {
  @Field()
  name!: String;
}
