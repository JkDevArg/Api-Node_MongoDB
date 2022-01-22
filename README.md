# Api-Node_MongoDB

## NodeJs + MongoDB
API basica para crear un usuario mediante POST y obtener datos mediantes GET usando POSTMAN


## Instrucciones: 
``` npm install ```

``` npm install -g nodemon```

``` nodemon server.js ```

### Librerias 

```Mongoose```
```express```
```body-parser```

## Carpetas: 

Modelo: ``` models/User.js ```

Controlador: ``` /controllers/users.js ```

API: ```/api/users.js```

-------------------------------------

### Agregar Usuarios:

Method ```POST``` 

http://localhost:4000/api/users/add

```name => value['Nombre'] | username => value['User'] | password => value['123456']```

-------------------------------------

### Consultar Usuarios
Method ```GET```

http://localhost:4000/api/users/all

Muestra una lista de usuarios en json.

-------------------------------------

### Consultar por ID

Method ```GET```

http://localhost:4000/api/users/1234567890abcd [**ID generada al crear un usuario en metodo POST**]

Muestra datos de un usuario con la id especificada.
