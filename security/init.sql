CREATE TABLE IF NOT EXISTS users (
  "id" SMALLINT NOT NULL,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,

  PRIMARY KEY ("id")
);

-- Seed
INSERT INTO users (id, username, password) VALUES 
  (1, 'username1', 'bdf9dad9be1d35abf7297b3ca161b8a3bf10d144118eb295413f53c81320a1f05a0175c3ae1ec7b3b90ccb8bbd45134f0eccaefdf8be2e07cecabdb1534f0cc7.22c019df6ef33217385445bb3e6821cf'),
  (2, 'username2', 'bdf9dad9be1d35abf7297b3ca161b8a3bf10d144118eb295413f53c81320a1f05a0175c3ae1ec7b3b90ccb8bbd45134f0eccaefdf8be2e07cecabdb1534f0cc7.22c019df6ef33217385445bb3e6821cf'),
  (3, 'username3', 'bdf9dad9be1d35abf7297b3ca161b8a3bf10d144118eb295413f53c81320a1f05a0175c3ae1ec7b3b90ccb8bbd45134f0eccaefdf8be2e07cecabdb1534f0cc7.22c019df6ef33217385445bb3e6821cf');
