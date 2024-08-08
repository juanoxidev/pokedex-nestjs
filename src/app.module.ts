import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    //Especificamos el path del directorio de la carpeta public. Modulo siempre va en los imports. Generalmente el contenido static siempre se sirve en el root de la app.
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    // conectar nuestra BD MONGO:   yarn add @nestjs/mongoose mongoose .forRoot(uri de nuestra bd mongo en docker)
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
