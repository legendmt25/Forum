import Mongoose from "mongoose";
import { Service, Inject } from "typedi";
import { ICountry } from "../models/CountryModel";

@Service()
export class CountryService {
    constructor(@Inject('COUNTRY') private readonly countryModel: Mongoose.Model<ICountry>) {}
    async findAll() {
        return this.countryModel.find();
    }
}