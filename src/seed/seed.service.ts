import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

@Injectable()
export class SeedService {
  POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=650'
  private readonly axios: AxiosInstance = axios

  async executeSeed() {
    const { data } = await this.axios.get(this.POKEAPI_URL)

    return { data }
  }
}
