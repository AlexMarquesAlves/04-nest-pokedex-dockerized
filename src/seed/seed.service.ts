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

  POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  private readonly axios: AxiosInstance = axios

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(this.POKEAPI_URL)

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]

      const _pokemon = await this.pokemonModel.create({ no, name })
    })

    return `The seed was executed successfully`
  }
}
