import {Entity, PrimaryGeneratedColumn, Column, getRepository} from "typeorm";

export interface IParticipant {
    namn: string;
    email: string;
    pris: number;
    avec: string;
    sittplats: string;
    sillis: boolean;
    solenn: boolean;
    representerar: string;
    alkohol: boolean;
    meny: string;
    specialdieter: string;
    buss: boolean;
    kommentarer: string;
}

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

export const createParticipant = async (participant: IParticipant) => {
    const repo = getRepository(Participant);
    const newParticipant = new Participant();
    newParticipant.namn = participant.namn;
    newParticipant.email = participant.email;
    newParticipant.pris = participant.pris;
    newParticipant.avec = participant.avec;
    newParticipant.sittplats = participant.sittplats;
    newParticipant.sillis = participant.sillis;
    newParticipant.solenn = participant.solenn;
    newParticipant.representerar = participant.representerar;
    newParticipant.alkohol = participant.alkohol;
    newParticipant.meny = participant.meny;
    newParticipant.specialdieter = participant.specialdieter;
    newParticipant.buss = participant.buss;
    newParticipant.kommentar = participant.kommentarer;

    await repo.save(newParticipant);
}