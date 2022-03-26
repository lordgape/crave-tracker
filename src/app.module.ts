import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MilestoneModule } from './milestone/milestone.module';

// TODO: Implement database connection using an ORM.

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MilestoneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
