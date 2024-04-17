import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({id: true}) id:number;
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
