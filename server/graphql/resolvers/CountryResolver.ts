import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CountryService } from '../../services/CountryService';
import { Country } from '../schema/CountrySchema';

@Service()
@Resolver()
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query((returns) => [Country])
  async countries() {
    return await this.countryService.findAll();
  }
}
