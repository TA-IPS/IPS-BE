import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';

@Entity()
export class Bssid extends BaseEntity {
    @PrimaryColumn({ type: "varchar", length: 32 })
    bssid: string;

    @Column({ type: "varchar", length: 32 })
    ssid: string;
}
