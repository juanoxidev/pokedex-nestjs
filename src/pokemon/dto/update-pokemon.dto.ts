import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

// Partial type hace que todas los atributos del dto createPokemonDTO son opcionales.
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
