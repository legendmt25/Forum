import { IsDate } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { Comment } from './CommentSchema';
import { User } from './UserSchema';

@ObjectType()
export class Post {
  @Field((is) => ID)
  id!: String;

  @Field()
  title!: String;

  @Field({ nullable: true })
  str!: String;

  @Field((is) => User)
  user!: User;

  @Field((is) => [Comment])
  comments!: Comment[];

  @Field()
  @IsDate()
  createdAt!: Date;
}

@InputType()
export class PostInput {
  @Field()
  title!: String;

  @Field()
  str?: String;
}
