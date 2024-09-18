# ShoeStore API

Esta es una API REST para gestionar marcas y productos de una tienda de zapatos. Utiliza `Node.js` con `Express`, una base de datos `MySQL` y soporte para plantillas `EJS`.

## Instalación

1. Clona este repositorio.

   ```bash
   git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-Ginagonzalezgut
   ```

2. Instala las dependencias necesarias con el siguiente comando:

```bash
npm install
```

3. Crea un archivo .env en la raíz del proyecto con la siguiente información:

```bash
PORT=tu_puerto
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
```

4. Asegúrate de tener una base de datos MySQL creada llamada `shoestore` y de tener las tablas marcas y productos configuradas. Puedes usar el fichero `db/shoestore.sql` para crearlos.

5. Inicia el servidor:

`npm run dev`

## Endpoints

### Obtener todas las marcas

`GET /marcas`

Retorna un listado de todas las marcas de la tienda.

### Obtener todos los productos

`GET /productos`

Retorna un listado de todos los productos de la tienda.

### Crear una nueva marca

`POST /marcas`

Crea una nueva marca en la base de datos.

#### Parámetros del cuerpo (JSON)

- nombre: Nombre de la marca
- logo_url: URL del logo de la marca

### Obtener una marca por ID

`GET /marcas/:id`

Retorna una marca específica según su ID.

### Actualizar una marca por ID

`PUT /marcas/:id`

Actualiza una marca en la base de datos según su ID.

#### Parámetros del cuerpo (JSON)

- nombre: (opcional) Nombre de la marca.
- logo_url: (opcional) URL del logo de la marca.

### Eliminar una marca por ID

`DELETE /marcas/:id`

Elimina una marca específica de la base de datos según su ID.

### Ver marcas en una página web

`GET /web/marcas`

Renderiza una página web que muestra las marcas usando la plantilla EJS.

### Dependencias

- Express
- MySQL2
- EJS
- dotenv
- cors
