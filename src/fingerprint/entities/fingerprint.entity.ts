import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity()
export class Fingerprint extends BaseEntity {
    @PrimaryGeneratedColumn("increment", { type: "int" })
    id: number;

    @Column({ type: "int"})
    attempt: number;

    @Column({ type: "int"})
    x: number;

    @Column({ type: "int"})
    y: number;

    @Column({ type: "int"})
    z: number;

    @Column({ type: "float", nullable: true })
    AP1: number;

    @Column({ type: "float", nullable: true })
    AP2: number;

    @Column({ type: "float", nullable: true })
    AP3: number;

    @Column({ type: "float", nullable: true })
    AP4: number;

    @Column({ type: "float", nullable: true })
    AP5: number;

    @Column({ type: "float", nullable: true })
    AP6: number;

    @Column({ type: "float", nullable: true })
    AP7: number;

    @Column({ type: "float", nullable: true })
    AP8: number;

    @Column({ type: "float", nullable: true })
    AP9: number;

    @Column({ type: "float", nullable: true })
    AP10: number;

    @Column({ type: "float", nullable: true })
    AP11: number;

    @Column({ type: "float", nullable: true })
    AP12: number;

    @Column({ type: "float", nullable: true })
    AP13: number;

    @Column({ type: "float", nullable: true })
    AP14: number;

    @Column({ type: "float", nullable: true })
    AP15: number;

    @Column({ type: "float", nullable: true })
    AP16: number;

    @Column({ type: "float", nullable: true })
    AP17: number;

    @Column({ type: "float", nullable: true })
    AP18: number;

    @Column({ type: "float", nullable: true })
    AP19: number;

    @Column({ type: "float", nullable: true })
    AP20: number;
}
