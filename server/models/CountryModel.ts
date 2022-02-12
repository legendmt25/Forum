import Mongoose from 'mongoose';

export interface ICountry {
  iso2: string;
  iso3: string;
  county: string;
}

export const CountrySchema: Mongoose.Schema = new Mongoose.Schema({
  iso2: { type: String, required: true },
  iso3: { type: String, required: true },
  country: { type: String, required: true },
});

export default Mongoose.model<ICountry & Mongoose.Document>(
  'Country',
  CountrySchema
);
