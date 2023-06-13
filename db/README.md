## Install dependencies

```
yarn add @nestjs/typeorm typeorm pg
```

## Add following functionality to participants module:

- Add a new participant
- Get all participants
- Get a single participant
- Update a participant
- Delete a participant

## Start the app

```
yarn start:dev
```




## psql
- każdy dodaje siebie do tabeli ‘participants’
- dodajemy kolumnę ‘pizza’ do tabeli
- każdy dodaje swoją ulubioną pizzę
- wyszukujemy wszystkich którzy lubią pizzę hawajską
- usuwamy kolumnę ‘pizza’
- każdy usuwa siebie


```
dodajemy siebie
INSERT INTO participants (first_name, last_name) VALUES ('Bob', 'Knot');

wyszukujemy siebie
SELECT * FROM participants WHERE first_name='John' AND last_name='Doe';

dodanie kolumny pizza
ALTER TABLE participants ADD COLUMN pizza VARCHAR(20);

dodajemy pizze ktora lubimy
UPDATE participants SET pizza='Hawaiian' WHERE first_name='John' AND last_name='Doe';

wyszukujemy siebie - czy jest pizza
SELECT * FROM participants WHERE first_name='John' AND last_name='Doe';

wyszukujemy wszystkich którzy lubią hawajską
SELECT * FROM participants WHERE pizza ILIKE 'hawaiian';

usuwamy kolumnę
ALTER TABLE participants DROP COLUMN pizza;

usuwamy wszystkich którzy lubią pizzę hawajską
DELETE FROM participants WHERE pizza ILIKE 'hawaiian' OR pizza ILIKE 'hawaian';

Usuwamy siebie
DELETE FROM participants WHERE first_name = 'your_first_name' AND last_name = 'your_last_name';

usuwamy tabelę
DROP TABLE participants;

```
