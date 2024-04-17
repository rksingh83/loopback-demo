import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'todoapp',
  connector: 'mongodb',
  url: 'mongodb+srv://codejunkierk:Ankit1997@cluster0.kaglgam.mongodb.net/?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TodoappDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'todoapp';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.todoapp', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
