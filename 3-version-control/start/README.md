# Kontrola Wersji

## Zadania
### 1. Tworzenie nowego lokalnego repozytorium i wypychanie go do repozytorium zdalnego
1. Stwórz nowy katalog, zainicjalizuj w nim lokalne repozytorium git 
2. Stwórz nowe lokalne zdalne git w serwisie GitHub
3. Połącz lokalne repozytorium ze zdalnym 
4. Stwórz plik w lokalnym katalogu, dodaj go do śledzonych przez git (`git add`), następnie go skommituj (`git commit`) oraz wypchnij do repozytorium zdalnego (`git push`). Zaobserwuj zmiany w repozytorium zdalnym

### 2. Dodawanie plików do `.gitignore`
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `gitignore-[TWOJE_IMIĘ]`
2. Stwórz plik o nazwie `secret-[TWOJE_IMIĘ].txt`
3. Dodaj jego nazwę do pliku `.gitignore`


### 3. Otwieranie Pull Requestów
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `pr-flow-[TWOJE_IMIĘ]`
2. W katalogu `participants` stwórz plik nazywając go swoim imieniem (np. `michal.txt`)
3. Skomituj swoją zmianę (`git commit`) i wypchnij ją do repozytorium zdalnego (`git push`)
4. Stwórz Pull Request, opisując go poprawnie

### 4. Komentowanie Pull Requestów
1. Skomentuj jeden z otwartych Pull requestów

### 5. Dołączanie zmian z innej gałęzi do swojej gałęzi kodu
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `merging-[TWOJE_IMIĘ]`
2. 

### 6. Rozwiązywanie konfliktów
1. Wychodząc z gałęzi `main`, stwórz nową gałąź (`git checkout -b` lub `git switch -c`) nazwij ją `conflicts-[TWOJE_IMIĘ]`


### 7. Testowanie
1. zainstaluj paczkę `jest` (linki w sekcji "Zasoby")
2. Dodaj przypadki testowe do funkcji `reverseString` oraz `isAdultAge`
3. Zaktualizuj skrypt `test` wewnątrz `package.json`. Zamień obecną komendę na komendę `jest`
4. Stwórz skrypt `test:coverage` wewnątrz `package.json`. Niech wywołuje on komendę `jest --coverage`
4. Stwórz skrypt `test:watch` wewnątrz `package.json`. Niech wywołuje on komendę `jest --watch`

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