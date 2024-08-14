import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(
    //
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ){}


  async create(createPokemonDto: CreatePokemonDto) {
    try{
    const pokemon = await this.pokemonModel.create(createPokemonDto);
    return pokemon ;
   
    }catch(error){
      //Mongo error 11000 significa que es un registro duplicado
      if(error.code === 11000) {
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`)
      }
      console.log(error);
       throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`);
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {
    let pokemon:Pokemon;


    // si es un numero
    if(!isNaN(+term)){
      pokemon = await this.pokemonModel.findOne({nro:term})
    }

    // si es un mongoID
    if (!pokemon && isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }
    
    // si buscamos por name hacer ignoreCase con regexp
    //**Aquí se utiliza una expresión regular con la opción i, 
    // que hace que la búsqueda sea insensible a mayúsculas y minúsculas. Además, 
    // se asegura de que el término coincida exactamente con el campo name, utilizando los delimitadores ^ y $.
    if (!pokemon){
      pokemon = await this.pokemonModel.findOne({ name: new RegExp('^' + term.trim() + '$', 'i')})
    }

    if (!pokemon) throw new NotFoundException( `Pokemon with id, name or no "${term}" not found`);


    return pokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
