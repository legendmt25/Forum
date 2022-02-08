import { IsDate, IsEmail, Length } from 'class-validator';
import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Comment } from './CommentSchema';
import { Community } from './CommunitySchema';
import { Post } from './PostSchema';

@ObjectType()
export class User {
  @Field((is) => ID)
  id!: String;

  @Field()
  @Length(1, 30)
  username!: String;

  password!: String;

  @Field({nullable: true})
  @Length(1, 15)
  firstName!: String;

  @Field({nullable: true})
  @Length(1, 15)
  lastName!: String;

  @Field()
  @IsEmail()
  @Length(1, 30)
  email!: String;

  @Field()
  @IsDate()
  birthDate!: Date;

  @Field({nullable: true})
  gender!: String;

  @Field({nullable: true})
  location!: String;

  @Field((is) => [Community])
  communities!: Community[];

  @Field((is) => [Post])
  posts!: Post[];

  @Field((is) => [Comment])
  comments!: Comment[];
}

@InputType()
export class UserInput implements Partial<User> {
  @Field({nullable: true})
  @Length(1, 30)
  firstName?: String;

  @Field({nullable: true})
  @Length(1, 30)
  lastName?: String;

  @Field({nullable: true})
  location?: String;

  @Field()
  @Length(1, 30)
  @IsEmail()
  email!: String;

  @Field()
  username!: String;

  @Field()
  password!: String;
}
