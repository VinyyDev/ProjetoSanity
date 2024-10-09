import {defineField, defineType} from 'sanity'

export const pessoaType = defineType({
  name: 'Pessoa',
  title: 'pessoa',
  type: 'document',
  fields: [
    defineField({
        name: "nome",
        type: 'string',
    }),
   
    defineField({
        name: "dataNacimento",
        type: 'datetime',
    }),
    defineField({
        name: "email",
        type: 'string',
    }),
    defineField({
        name: "telefone",
        type: 'string',
    }),
    defineField({
        name: "imagemPerfil",
        type: 'image',
    }),
    defineField({
        name: "endereco",
        type: 'endereco',
    }),
    
    
  ],
})