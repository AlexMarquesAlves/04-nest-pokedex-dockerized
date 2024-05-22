import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import axios, { AxiosInstance } from 'axios'
import { Model } from 'mongoose'
import { Pokemon } from 'src/pokemon/entities/pokemon.entity'
import { PokeResponse } from './interfaces/poke-response.interface'

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  private readonly axios: AxiosInstance = axios

  async executeSeed() {
    // Cleaning database
    await this.pokemonModel.deleteMany({}) // delete * from pokemons

    // Populate database
    const { data } = await this.axios.get<PokeResponse>(this.POKEAPI_URL)
    const insertPromisesArray = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]

      // await this.pokemonModel.create({ no, name })

      insertPromisesArray.push(this.pokemonModel.create({ no, name }))
    })
    await Promise.all(insertPromisesArray)

    return `The seed was executed successfully`
  }
}
