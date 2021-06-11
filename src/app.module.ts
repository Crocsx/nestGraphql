import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { languageResolver, timezoneResolver } from './graphql.resolvers';
import { UserModule } from './user/user.module';

const isDebugMode = (): boolean => {
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv === 'local';
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typeDefs: `
      enum Provider {
        AMAZON 
        ${process.env.NODE_ENV === 'production' ? '' : 'GOOGLE'}
      }`,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: isDebugMode(),
      resolvers: {
        Language: languageResolver,
        Timezone: timezoneResolver,
      }
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
