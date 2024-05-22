import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { PokemonService } from 'src/pokemon/pokemon.service'
import { PokeResponse } from './interfaces/poke-response.interface'

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}

  POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  private readonly axios: AxiosInstance = axios

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(this.POKEAPI_URL)
    const pokemon = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]

      console.log({ no, name })
      pokemon.push({ no, name })
      this.pokemonService.create({ no, name })
    })

    return { pokemon }
  }
}
