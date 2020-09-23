import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';

@Entity('places')
class Place {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  host_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'host_id' })
  user: string;

  @Column('timestamp with time zone')
  checkin: Date;

  @Column('timestamp with time zone')
  checkout: Date;

  @Column('smallint')
  adult: number;

  @Column('smallint')
  children: number;

  @Column('smallint')
  infants: number;

  @Column('smallint')
  amount: number;

  @Column('text', { array: true })
  photos: Array<string>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Place;