import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*
Entity to klasa, która konwertuje swoje właściwości na konkretną tabelę w bazie danych.
Każda instancja "Entity" reprezentuje wiersz w tabeli bazy danych.
Klasy "Entity" są zwykle zdefiniowane z dekoratorami,
które mówią TypeORM jak mapować dane między bazą danych a obiektami w kodzie.
Każde pole w klasie "Entity" odpowiada kolumnie w bazie danych.
 */
@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  pizza: string;
}
