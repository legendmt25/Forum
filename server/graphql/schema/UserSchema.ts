import { IsBoolean, IsDate, IsEmail, Length } from 'class-validator';
import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Gender } from '../../models/UserModel';
import { Comment } from './CommentSchema';
import { Community } from './CommunitySchema';
import { Post } from './PostSchema';

@ObjectType()
export class UserOptions {
  @Field({ defaultValue: false })
  inboxMessages!: Boolean;
  @Field({ defaultValue: false })
  upvotesOnComments!: Boolean;
  @Field({ defaultValue: false })
  upvotesOnPosts!: Boolean;
  @Field({ defaultValue: false })
  newFollowers!: Boolean;
}

@InputType()
export class UserOptionInput {
  @Field()
  @IsBoolean()
  inboxMessages!: Boolean;
  @Field()
  @IsBoolean()
  upvotesOnComments!: Boolean;
  @Field()
  @IsBoolean()
  upvotesOnPosts!: Boolean;
  @Field()
  @IsBoolean()
  newFollowers!: Boolean;
}

@ObjectType()
export class User {
  @Field((is) => ID)
  id!: String;

  @Field()
  @Length(1, 30)
  username!: String;

  password!: String;

  @Field({ nullable: true })
  @Length(1, 30)
  firstName!: String;

  @Field({ nullable: true })
  @Length(1, 30)
  lastName!: String;

  @Field()
  @IsEmail()
  @Length(1, 100)
  email!: String;

  @Field()
  @IsDate()
  createdAt!: Date;

  @Field({ nullable: true })
  @IsDate()
  birthDate!: Date;

  @Field({ nullable: true })
  gender!: String;

  @Field({ nullable: true })
  location!: String;

  @Field((is) => [Community])
  communities!: Community[];

  @Field((is) => [Post])
  posts!: Post[];

  @Field((is) => [Comment])
  comments!: Comment[];

  @Field((is) => UserOptions, { defaultValue: new UserOptions() })
  options!: UserOptions;
}

@InputType()
export class UserInput implements Partial<User> {
  @Field({ nullable: true })
  @Length(1, 30)
  firstName?: String;

  @Field({ nullable: true })
  @Length(1, 30)
  lastName?: String;

  @Field({ nullable: true })
  location?: String;

  @Field()
  @Length(1, 100)
  @IsEmail()
  email!: String;

  @Field({ nullable: true })
  birthDate!: Date;

  @Field((is) => String, { nullable: true })
  gender!: Gender;

  @Field()
  username!: String;

  @Field()
  password!: String;
}

@InputType()
export class UserCredentialsInput implements Partial<User> {
  @Field()
  username!: String;

  @Field()
  password!: String;
}
