import {repository} from '@loopback/repository';
import {TodoRepository} from '../repositories';
import {Todo} from '../models';
import {get, post, requestBody, param, patch, del} from '@loopback/rest';

export class TodoController {
  constructor(
    @repository(TodoRepository)
    public todoRepository : TodoRepository,
  ) {}

  @post('/todos')
  async create(@requestBody() todo: Todo): Promise<Todo> {
    return this.todoRepository.create(todo);
  }

  @get('/todos')
  async find(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  @get('/todos/{id}')
  async findById(@param.path.number('id') id: number): Promise<Todo> {
    return this.todoRepository.findById(id);
  }

  @patch('/todos/{id}')
  async updateById(@param.path.number('id') id: number, @requestBody() todo: Todo): Promise<void> {
    await this.todoRepository.updateById(id, todo);
  }

  @del('/todos/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.todoRepository.deleteById(id);
  }
}
