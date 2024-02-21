import { dataSourceOptions } from './typeorm-config';
import { DataSource } from 'typeorm';

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;