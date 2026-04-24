<<<<<<< HEAD
# Moralesperez

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# ApiFamilia

Proyecto dividido en dos partes:

- `angular/`: frontend en Angular
- `demo/`: backend en Spring Boot

## Requisitos

- Node.js 20+ o compatible con Angular CLI
- Java 17
- MySQL

## Frontend

```bash
cd angular
npm install
npm start
```

Abre `http://localhost:4200`.

## Backend

Antes de iniciar, configura estas variables de entorno:

- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Ejemplo en PowerShell:

```powershell
$env:DB_URL="jdbc:mysql://localhost:3306/proyecto_integrantes"
$env:DB_USERNAME="root"
$env:DB_PASSWORD="tu_password"
$env:GOOGLE_CLIENT_ID="tu_google_client_id"
$env:GOOGLE_CLIENT_SECRET="tu_google_client_secret"
```

Luego inicia el backend:

```bash
cd demo
.\mvnw.cmd spring-boot:run
```

Base URL del backend: `http://localhost:8080`

## Endpoints utiles

- `GET /api/integrantes`
- `POST /api/integrantes`
- `DELETE /api/integrantes/{id}`
- `GET /api/user`
- `POST /api/logout`
- `GET /oauth2/authorization/google`
>>>>>>> 24d213e28adaee412f0c46fd11bb41aa73e8e953
