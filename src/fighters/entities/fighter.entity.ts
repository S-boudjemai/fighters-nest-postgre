import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('fighters')
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  nationality: string;

  @Column()
  weight: number;

  @Column()
  category: string;
}
