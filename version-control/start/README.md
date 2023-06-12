# Kontrola Wersji

## Zadania
### 1. Ściąganie repozytorium zdalnego, dodawanie zmian i otwieranie Pull Requesta
1. Sklonuj repozytorium https://github.com/dotintent/git-exercises
2. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `pr-flow-[TWOJE_IMIĘ]`
3. W katalogu `participants` stwórz plik nazywając go swoim imieniem (np. `michal.txt`). Dodaj dowolną treść we wnętrzu tego pliku
4. Skomituj swoją zmianę (`git commit`) i wypchnij ją do repozytorium zdalnego (`git push`)
5. Otwórz nowy Pull Request, opisując go poprawnie
6. Poszukaj innych otwartych Pull Requestów w repozytorium, skomentuj oraz zaakceptuj jeden z nich
7. Kiedy otrzymasz akceptację swojego Pull Requesta, kliknij przycisk "Merge" aby dołączyć go do gałęzi `main`

### 2. Tworzenie nowego lokalnego repozytorium i wypychanie go do repozytorium zdalnego
1. Stwórz nowy katalog, zainicjalizuj w nim lokalne repozytorium git 
2. Stwórz nowe lokalne zdalne git w serwisie GitHub
3. Połącz lokalne repozytorium ze zdalnym 
4. Stwórz plik w lokalnym katalogu, dodaj go do śledzonych przez git (`git add`), następnie go skomituj (`git commit`) oraz wypchnij do repozytorium zdalnego (`git push`). Zaobserwuj zmiany w repozytorium zdalnym

### 3. Ignorowanie plików
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `ignoring-[TWOJE_IMIĘ]`
2. Stwórz plik o nazwie `secret-[TWOJE_IMIĘ].txt`
3. Dodaj jego nazwę do pliku `.gitignore`
4. Zaobserwuj co dzieje się przy próbie skomitowania zmiany

### 7. Testowanie
1. zainstaluj paczkę `jest` (linki w sekcji "Zasoby")
2. stwórz nowy plik `util.test.js`
3. Dodaj w nim przypadki testowe do funkcji `reverseString` oraz `isAdultAge`
4. Zaktualizuj skrypt `test` wewnątrz `package.json`. Zamień obecną komendę na komendę `jest`
5. Stwórz skrypt `test:coverage` wewnątrz `package.json`. Niech wywołuje on komendę `jest --coverage`
6. Stwórz skrypt `test:watch` wewnątrz `package.json`. Niech wywołuje on komendę `jest --watch`

### 8. CI-CD
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazywając ją `ci-exercise-[TWOJE_IMIĘ]`
1. Stwórz nowy plik dla workflow GitHub Action `.github/workflows/ci-[TWOJE_IMIĘ].yaml`. (Jeśli struktura katalogów `.github/workflows/` jeszcze nie istnieje, stwórz ją)
2. Stwórz w tym pliku workflow CI/CD posługując się szablonem z pliku `ci-cd.template.yaml`, uzupełniając swoim imieniem szablon [TWOJE_IMIĘ] w kroku `say-hello-to-ci`
3. skomituj swoje zmiany (`git commit`) i wypchnij je do repozytorium zdalnego (`git push`)
3. otwórz Pull Request do brancha `main`, pamiętając o uzupełnieniu pola `description` krótkim wyjaśnieniem tego, co wnoszą Twoje zmiany (np. **Ten PR dodaje nowy workflow CI**)
4. Przejdź do sekcji `Actions` na stronie repozytorim w serwisie GitHub (`https://github.com/dotintent/workshop-backend-for-dummies/actions`), obserwuj działanie swojego workflow
5. W sekcji `steps` pliku workflow, stwórz nowy krok który będzie odpalał testy. Moesz go nazwać np. `Run tests`. W polu `run` podaj `npm run test`

## Zasoby
- Jest [package on npm](https://www.npmjs.com/package/jest) [official jest website](https://jestjs.io/)