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
  host: string;

  @Column('varchar')
  title: string;

  @Column('text')
  description: string;

  @Column('smallint')
  guests: number;

  @Column('smallint')
  bedroom: number;

  @Column('smallint')
  double_bed: number;

  @Column('smallint')
  sofa_bed: number;

  @Column('smallint')
  single_bed: number;
  
  @Column('smallint')
  bath: number;
  
  @Column('float')
  price: number;
  
  @Column('text')
  aditional_rules: string;

  @Column('text', { array: true })
  photos: Array<string>;

  @Column('varchar')
  country: string;

  @Column('varchar')
  state: string;

  @Column('varchar')
  territory: string;

  @Column('varchar')
  city: string;

  @Column('smallint')
  room_type: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Place;