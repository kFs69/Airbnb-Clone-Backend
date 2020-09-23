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
import Place from './Place';

@Entity('reservations')
class Reservation {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: string;

  @Column()
  place_id: string;

  @ManyToOne(() => Place)
  @JoinColumn({ name: 'place_id' })
  place: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Reservation;