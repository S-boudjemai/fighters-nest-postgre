import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fights')
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  referee: string;

  @Column({ name: 'first-fighter' })
  firstFighterName: string;

  @Column({ name: 'second-fighter' })
  secondFighterName: string;

  @Column()
  category: string;
}
