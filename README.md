# Solucion Ensolvers
 Desarrollo de Backend y Frontend de CRUD de notas con Api REST y SPA

## Backend

* Api Rest Engine: SprintBoot 3.1.3
* Java: 17
* Database Driver: Mysql

## Commands
* **installation:** `mvnw.cmd install`
* **run:** `mvnw.cmd spring-boot:run` *inicia la aplicacion*

#### Diseno Api REST

```
HTTP GET /all
HTTP GET /archived 
HTTP POST /note
HTTP PUT /note/:id
HTTP POST /note/archive/:id
HTTP POST /note/activate/:id
HTTP DELETE /note/:id
```

## Frontend

* Render Library: React
* HTTP library: Axios
* Styles: CSS Boostrap 

## Commands
* **installation:** `npm run install`
* **start:** `npm run start` *inicia la aplicacion*
