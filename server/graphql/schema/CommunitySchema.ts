import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Post } from './PostSchema';
import { User } from './UserSchema';

@ObjectType()
export class Community {
  @Field((is) => ID)
  id!: String;

  @Field()
  name!: String;

  @Field()
  description!: String;

  @Field((is) => [Post])
  posts!: Post[];

  @Field((is) => User)
  admin!: User;

  @Field((is) => [User])
  moderators!: User[];

  @Field({ nullable: true })
  avatarImage!: String;
}

@InputType()
export class CommunityInput {
  @Field()
  name!: String;

  @Field()
  description!: String;
}
