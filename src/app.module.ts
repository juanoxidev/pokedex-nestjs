import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    //Especificamos el path del directorio de la carpeta public. Modulo siempre va en los imports
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }) 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
