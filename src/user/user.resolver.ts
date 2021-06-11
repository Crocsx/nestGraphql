
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';

import { Provider } from '../graphql'


@Resolver()
export class UserResolver {
  constructor() {}

  @Query()
  async getUser(@Args('id') id: string) {
    return {
      id: '1',
      email: 'test',
      provider: Provider.AMAZON
    };
  }

  
  @Mutation()
  async deleteUser(@Args('id') id: string) {
    return {
      ok: true,
    };
  }
}
