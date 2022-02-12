import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Country {
  @Field((is) => ID)
  id!: String;

  @Field()
  iso2!: string;
  
  @Field()
  iso3!: string;

  @Field()
  country!: String;
}
