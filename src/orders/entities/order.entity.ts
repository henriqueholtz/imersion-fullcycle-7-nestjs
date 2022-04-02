import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'Orders' })
export class Order extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  OrderId: string;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  Amount: number;
}
