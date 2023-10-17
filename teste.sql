--port:5432 

CREATE TABLE inova.Grupo (
                id VARCHAR NOT NULL,
                nome_projeto VARCHAR NOT NULL,
                CONSTRAINT grupo_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Professor (
                id VARCHAR NOT NULL,
                nome VARCHAR(60) NOT NULL,
                matricula VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                CONSTRAINT professor_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX professor_idx
 ON inova.Professor
 ( matricula );

CREATE TABLE inova.Avaliacao (
                id VARCHAR NOT NULL,
                nota_avaliacao REAL NOT NULL,
                professor_id VARCHAR NOT NULL,
                CONSTRAINT avaliacao_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Projeto (
                id VARCHAR NOT NULL,
                tema VARCHAR NOT NULL,
                estande INTEGER NOT NULL,
                grupo_id VARCHAR NOT NULL,
                data_apresentacao DATE NOT NULL,
                avaliacao_id VARCHAR NOT NULL,
                CONSTRAINT projeto_pk PRIMARY KEY (id)
);


CREATE TABLE inova.Aluno (
                id VARCHAR NOT NULL,
                nome VARCHAR(60) NOT NULL,
                curso VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                matricula VARCHAR(9) NOT NULL,
                CONSTRAINT aluno_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX aluno_idx
 ON inova.Aluno
 ( matricula );

CREATE TABLE inova.Integrantes_grupo (
                id VARCHAR NOT NULL,
                aluno_id VARCHAR NOT NULL,
                grupo_id VARCHAR NOT NULL,
                CONSTRAINT integrantes_grupo_pk PRIMARY KEY (id)
);


ALTER TABLE inova.Integrantes_grupo ADD CONSTRAINT grupo_integrantes_grupo_fk
FOREIGN KEY (grupo_id)
REFERENCES inova.Grupo (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE inova.Projeto ADD CONSTRAINT grupo_projeto_fk
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

ALTER TABLE inova.Integrantes_grupo ADD CONSTRAINT aluno_integrantes_grupo_fk
FOREIGN KEY (aluno_id)
REFERENCES inova.Aluno (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;