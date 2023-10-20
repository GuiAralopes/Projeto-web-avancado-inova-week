DROP schema IF EXISTS inova CASCADE;

CREATE schema IF NOT EXISTS inova;

CREATE TABLE inova.Grupo (
                id INTEGER NOT NULL,
                nome_projeto VARCHAR NOT NULL,
                CONSTRAINT grupo_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Professor (
                id INTEGER NOT NULL,
                nome VARCHAR(60) NOT NULL,
                matricula VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                CONSTRAINT professor_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX professor_idx
 ON inova.Professor
 ( matricula );

CREATE TABLE inova.Avaliacao (
                id INTEGER NOT NULL,
                nota_avaliacao REAL NOT NULL,
                professor_id INTEGER NOT NULL,
                CONSTRAINT avaliacao_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Projeto (
                id INTEGER NOT NULL,
                tema VARCHAR NOT NULL,
                estande INTEGER NOT NULL,
                grupo_id INTEGER NOT NULL,
                data_apresentacao DATE NOT NULL,
                avaliacao_id INTEGER NOT NULL,
                CONSTRAINT projeto_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Aluno (
                id INTEGER NOT NULL,
                nome VARCHAR(60) NOT NULL,
                curso VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                matricula VARCHAR(9) NOT NULL,
                grupo_id INTEGER NOT NULL,
                CONSTRAINT aluno_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX aluno_idx
 ON inova.Aluno
 ( matricula );

ALTER TABLE inova.Projeto ADD CONSTRAINT grupo_projeto_fk
FOREIGN KEY (grupo_id)
REFERENCES inova.Grupo (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE inova.Aluno ADD CONSTRAINT grupo_aluno_fk
FOREIGN KEY (grupo_id)
REFERENCES inova.Grupo (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE inova.Avaliacao ADD CONSTRAINT professor_avaliacao_fk
FOREIGN KEY (professor_id)
REFERENCES inova.Professor (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE inova.Projeto ADD CONSTRAINT avaliacao_projeto_fk
FOREIGN KEY (avaliacao_id)
REFERENCES inova.Avaliacao (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;