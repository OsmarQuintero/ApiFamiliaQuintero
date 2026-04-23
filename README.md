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
