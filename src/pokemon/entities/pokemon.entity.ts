import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
// al extender de document de mongoose se indica que esta entidad es un document de mongo. El schema va a definir que columans usa la entidad. @Schema Se mapea con la BD. 
@Schema()
export class Pokemon extends Document {

    //mongoid : string lo genera mongo de forma automatica. es unico globalmente.
    // prop define reglas de negocio, por ej que sean unicos los atributos, not null. El indice sabe donde esta este documento.
    @Prop({unique:true, index:true})
    name:string;

    @Prop({unique:true, index:true})
    nro:number;

}

// Creamos el schema.
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);