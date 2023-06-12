## How to start

1. Install dependencies

```
npm ci
```

2. Create .env file

Based on the _.env.example_ file, create a _.env_ file. Fill in the environment variable values according to the trainer's instructions.

3. Start the app

```
npm start
```

4. Server is running on http://localhost:3010.

## List of endpoints

- [GET /](http://localhost:3010)
- [GET /basic-auth](http://localhost:3010/basic-auth)
- [POST /jwt/sign-in](http://localhost:3010/jwt/sign-in)
- [GET /jwt/secured](http://localhost:3010/jwt/secured)
- [GET /sql](http://localhost:3010/sql)

### Example of XSS

```
<script>alert('hello world!')</script>
```

### Example of SQL injection

```
'; DELETE FROM users WHERE "username" = 'username1'; --
```
