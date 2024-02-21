import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1708540614492 implements MigrationInterface {
    name = 'Init1708540614492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fingerprint" ("id" SERIAL NOT NULL, "attempt" integer NOT NULL, "x" integer NOT NULL, "y" integer NOT NULL, "z" integer NOT NULL, "AP1" double precision, "AP2" double precision, "AP3" double precision, "AP4" double precision, "AP5" double precision, "AP6" double precision, "AP7" double precision, "AP8" double precision, "AP9" double precision, "AP10" double precision, "AP11" double precision, "AP12" double precision, "AP13" double precision, "AP14" double precision, "AP15" double precision, "AP16" double precision, "AP17" double precision, "AP18" double precision, "AP19" double precision, "AP20" double precision, CONSTRAINT "PK_8f1c3d8326a0907d1c7a5961f32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fingerprint"`);
    }

}
