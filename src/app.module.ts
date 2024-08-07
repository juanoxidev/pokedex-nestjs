import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';


@Module({
  imports: [
    //Especificamos el path del directorio de la carpeta public. Modulo siempre va en los imports. Generalmente el contenido static siempre se sirve en el root de la app.
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    PokemonModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
