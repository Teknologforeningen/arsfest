import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Participant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    namn: string;

    @Column()
    email: string;

    @Column()
    pris: number;

    @Column()
    avec: string;

    @Column()
    sittplats: string;

    @Column()
    sillis: boolean;

    @Column()
    solenn: boolean;

    @Column()
    representerar: string;

    @Column()
    alkohol: boolean;

    @Column()
    meny: string;

    @Column()
    specialdieter: string;

    @Column()
    buss: boolean;

    @Column()
    kommentar: string;
}
