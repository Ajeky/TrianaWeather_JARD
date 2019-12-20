# **Triana Weather** ☁️
_Esta aplicación esta diseñada para monitorizar algunos parámetros como temperatura, humedad, calidad del aire..._

## **Como probar nuestra API REST** ##
Primero hemos de importar los datos adjuntados en formato JSON a nuestra base de datos mongoDB.  
Una vez hecho esto, podemos logearnos con cualquiera de los usuarios especificados a continuación e ir probando los endpoints.  
Fin, fácil rápido y sencillo.

## **Usuarios y contraseñas**  
(La aplicación crashea si nos equivocamos con el logIn, ojo)

**Rol usuario:**  
username: usuario  
contraseña: 1234

**Rol manager:**  
username: manager  
contraseña: manager

**Rol admin:**  
username: admin  
contraseña: admin

## Json 🗄️
Primero necesitaremos nuestro Json para tener datos de prueba en nuestra base de datos:

[Descarga: haz click aqui](https://drive.google.com/open?id=1ajFzIVTMHwBnz8r60KCJ4YMrcMIdpKqI)

### Colección "**users**"

```
{
    "_id": ObjectId("111111111111111111111111"),
    "rol": "USER",
    "estaciones_registradas": [],
    "estaciones_mantenidas": ["111111111111111111111111", "222222222222222222222222", "333333333333333333333333"],
    "username": "usuario",
    "email": "usuario@usuario.com",
    "nombre_completo": "Usuario",
    "fecha_creacion": "2019-12-19T09:36:43.296Z",
    "password": "$2a$12$Ut2O7/xnBS1AphDx1VXmquHEtH3Turczp49feKjo/Pw7WiOsdufdu"
}

{
    "_id": ObjectId("222222222222222222222222"),
    "rol": "MANAGER",
    "estaciones_registradas": ["111111111111111111111111", "222222222222222222222222", "333333333333333333333333"],
    "estaciones_mantenidas": ["444444444444444444444444"],
    "username": "manager",
    "email": "manager@manager.com",
    "nombre_completo": "Manager",
    "fecha_creacion": "2019-12-19T09:54:53.116Z",
    "password": "$2a$12$3QmdiVJu9hXoTu1IYeKrMuxstaccgKTW4SxLJoVprvTIMFYgOUPNK"
}

{
    "_id": ObjectId("333333333333333333333333"),
    "rol": "ADMIN",
    "estaciones_registradas": ["444444444444444444444444", "555555555555555555555555"],
    "estaciones_mantenidas": ["555555555555555555555555"],
    "username": "admin",
    "email": "admin@admin.com",
    "nombre_completo": "Admin",
    "fecha_creacion": "2019-12-19T09:56:53.805Z",
    "password": "$2a$12$I7rv5jxKv3rNrA9RMSvLm.kNeDFn1nIDsm0vgzofK7vxC0f86RETC"
}
``` 

### Colección "estaciones"
```
{
    "_id": ObjectId("111111111111111111111111"),
    "localizacion": "37.377599, -6.002588",
    "nombre": "Av. de la República Argentina",
    "usuarioRegistra": "222222222222222222222222",
    "usuarioMantiene": "111111111111111111111111"
}

{
    "_id": ObjectId("222222222222222222222222"),
    "localizacion": "37.380335, -6.007530",
    "nombre": "El Teatro de Triana",
    "usuarioRegistra": "222222222222222222222222",
    "usuarioMantiene": "111111111111111111111111"
}

{
    "_id": ObjectId("333333333333333333333333"),
    "localizacion": "37.385254, -6.003269",
    "nombre": "Monumento Triana al arte flamenco",
    "usuarioRegistra": "222222222222222222222222",
    "usuarioMantiene": "111111111111111111111111"
}

{
    "_id": ObjectId("444444444444444444444444"),
    "localizacion": "37.384230, -6.000783",
    "nombre": "Calle Betis",
    "usuarioRegistra": "333333333333333333333333",
    "usuarioMantiene": "222222222222222222222222"
}

{
    "_id": ObjectId("555555555555555555555555"),
    "localizacion": "37.391446, -6.010173",
    "nombre": "Centro Comercial Torre Sevilla",
    "usuarioRegistra": "333333333333333333333333",
    "usuarioMantiene": "333333333333333333333333"
}
```

### Colección "weatherdatas"
```
{
    "_id": ObjectId("111111111111111111111111"),
	"lluvia" : 0,
	"velocidad_viento": 5,
	"direccion_viento" : 99,
    "temperatura": 28.5,
    "humedad" :20 ,
    "calidad_aire" : 100,
    "presion" : 950,
    "estacion" : "111111111111111111111111",
    "fecha": "2017-05-17T18:00:00.000Z"
}

{
    "_id": ObjectId("222222222222222222222222"),
	"lluvia" : 0,
	"velocidad_viento": 20,
	"direccion_viento" : 120,
    "temperatura": 26,
    "humedad" :30 ,
    "calidad_aire" : 79,
    "presion" : 980,
    "estacion" : "111111111111111111111111",
    "fecha": "2017-07-21T18:00:00.000Z"
}

{
    "_id": ObjectId("333333333333333333333333"),
	"lluvia" : 60,
	"velocidad_viento": 60,
	"direccion_viento" : 100,
    "temperatura": 15,
    "humedad" :80 ,
    "calidad_aire" : 67,
    "presion" : 1000,
    "estacion" : "111111111111111111111111",
    "fecha": "2017-11-30T18:00:00.000Z"
}

{
    "_id": ObjectId("444444444444444444444444"),
	"lluvia" : 20 ,
	"velocidad_viento": 30,
	"direccion_viento" : 120,
    "temperatura": 20,
    "humedad" :60 ,
    "calidad_aire" : 80,
    "presion" : 960,
    "estacion" : "111111111111111111111111",
    "fecha": "2018-02-14T18:00:00.000Z"
}

{
    "_id": ObjectId("555555555555555555555555"),
	"lluvia" : 0 ,
	"velocidad_viento": 5,
	"direccion_viento" : 80,
    "temperatura": 26,
    "humedad" :10 ,
    "calidad_aire" : 95,
    "presion" : 940,
    "estacion" : "111111111111111111111111",
    "fecha": "2018-05-26T18:00:00.000Z"
}

{
    "_id": ObjectId("666666666666666666666666"),
	"lluvia" : 0,
	"velocidad_viento": 20,
	"direccion_viento" : 120,
    "temperatura": 26,
    "humedad" :30 ,
    "calidad_aire" : 79,
    "presion" : 980,
    "estacion" : "222222222222222222222222",
    "fecha": "2017-07-21T18:00:00.000Z"
}

{
    "_id": ObjectId("777777777777777777777777"),
	"lluvia" : 60,
	"velocidad_viento": 60,
	"direccion_viento" : 100,
    "temperatura": 15,
    "humedad" :80 ,
    "calidad_aire" : 67,
    "presion" : 1000,
    "estacion" : "222222222222222222222222",
    "fecha": "2017-11-30T18:00:00.000Z"
}

{
    "_id": ObjectId("888888888888888888888888"),
	"lluvia" : 20 ,
	"velocidad_viento": 30,
	"direccion_viento" : 120,
    "temperatura": 20,
    "humedad" :60 ,
    "calidad_aire" : 80,
    "presion" : 960,
    "estacion" : "222222222222222222222222",
    "fecha": "2017-02-14T18:00:00.000Z"
}

{
    "_id": ObjectId("999999999999999999999999"),
	"lluvia" : 0 ,
	"velocidad_viento": 4,
	"direccion_viento" : 20,
    "temperatura": 37,
    "humedad" :5 ,
    "calidad_aire" : 85,
    "presion" : 950,
    "estacion" : "222222222222222222222222",
    "fecha": "2018-07-14T18:00:00.000Z"
}

{
    "_id": ObjectId("101010101010101010101010"),
	"lluvia" : 50 ,
	"velocidad_viento": 50,
	"direccion_viento" : 32,
    "temperatura": 5,
    "humedad" :60,
    "calidad_aire" : 90,
    "presion" : 1020,
    "estacion" : "222222222222222222222222",
    "fecha": "2018-12-20T18:00:00.000Z"
}

{
    "_id": ObjectId("121212121212121212121212"),
	"lluvia" : 0,
	"velocidad_viento": 20,
	"direccion_viento" : 120,
    "temperatura": 26,
    "humedad" :30 ,
    "calidad_aire" : 79,
    "presion" : 980,
    "estacion" : "333333333333333333333333",
    "fecha": "2017-07-21T18:00:00.000Z"
}

{
    "_id": ObjectId("131313131313131313131313"),
	"lluvia" : 60,
	"velocidad_viento": 60,
	"direccion_viento" : 100,
    "temperatura": 15,
    "humedad" :80 ,
    "calidad_aire" : 67,
    "presion" : 1000,
    "estacion" : "333333333333333333333333",
    "fecha": "2017-11-30T18:00:00.000Z"
}

{
    "_id": ObjectId("141414141414141414141414"),
	"lluvia" : 20 ,
	"velocidad_viento": 30,
	"direccion_viento" : 120,
    "temperatura": 20,
    "humedad" :60 ,
    "calidad_aire" : 80,
    "presion" : 960,
    "estacion" : "333333333333333333333333",
    "fecha": "2018-02-14T18:00:00.000Z"
}

{
    "_id": ObjectId("151515151515151515151515"),
	"lluvia" : 0 ,
	"velocidad_viento": 5,
	"direccion_viento" : 80,
    "temperatura": 26,
    "humedad" :10 ,
    "calidad_aire" : 95,
    "presion" : 940,
    "estacion" : "333333333333333333333333",
    "fecha": "2018-05-26T18:00:00.000Z"
}

{
    "_id": ObjectId("161616161616161616161616"),
	"lluvia" : 0,
	"velocidad_viento": 5,
	"direccion_viento" : 99,
    "temperatura": 28.5,
    "humedad" :20 ,
    "calidad_aire" : 100,
    "presion" : 950,
    "estacion" : "333333333333333333333333",
    "fecha": "2017-05-17T18:00:00.000Z"
}

{
    "_id": ObjectId("171717171717171717171717"),
	"lluvia" : 0,
	"velocidad_viento": 20,
	"direccion_viento" : 120,
    "temperatura": 26,
    "humedad" :30 ,
    "calidad_aire" : 79,
    "presion" : 980,
    "estacion" : "444444444444444444444444",
    "fecha": "2017-07-21T18:00:00.000Z"
}

{
    "_id": ObjectId("181818181818181818181818"),
	"lluvia" : 60,
	"velocidad_viento": 60,
	"direccion_viento" : 100,
    "temperatura": 15,
    "humedad" :80 ,
    "calidad_aire" : 67,
    "presion" : 1000,
    "estacion" : "444444444444444444444444",
    "fecha": "2017-11-30T18:00:00.000Z"
}

{
    "_id": ObjectId("191919191919191919191919"),
	"lluvia" : 20 ,
	"velocidad_viento": 30,
	"direccion_viento" : 120,
    "temperatura": 20,
    "humedad" :60 ,
    "calidad_aire" : 80,
    "presion" : 960,
    "estacion" : "444444444444444444444444",
    "fecha": "2017-02-14T18:00:00.000Z"
}

{
    "_id": ObjectId("202020202020202020202020"),
	"lluvia" : 0 ,
	"velocidad_viento": 4,
	"direccion_viento" : 20,
    "temperatura": 37,
    "humedad" :5 ,
    "calidad_aire" : 85,
    "presion" : 950,
    "estacion" : "444444444444444444444444",
    "fecha": "2018-07-14T18:00:00.000Z"
}

{
    "_id": ObjectId("212121212121212121212121"),
	"lluvia" : 50 ,
	"velocidad_viento": 50,
	"direccion_viento" : 32,
    "temperatura": 5,
    "humedad" :60,
    "calidad_aire" : 90,
    "presion" : 1020,
    "estacion" : "444444444444444444444444",
    "fecha": "2018-12-20T18:00:00.000Z"
}

{
    "_id": ObjectId("232323232323232323232323"),
	"lluvia" : 0,
	"velocidad_viento": 20,
	"direccion_viento" : 120,
    "temperatura": 26,
    "humedad" :30 ,
    "calidad_aire" : 79,
    "presion" : 980,
    "estacion" : "555555555555555555555555",
    "fecha": "2017-07-21T18:00:00.000Z"
}

{
    "_id": ObjectId("242424242424242424242424"),
	"lluvia" : 60,
	"velocidad_viento": 60,
	"direccion_viento" : 100,
    "temperatura": 15,
    "humedad" :80 ,
    "calidad_aire" : 67,
    "presion" : 1000,
    "estacion" : "555555555555555555555555",
    "fecha": "2017-11-30T18:00:00.000Z"
}

{
    "_id": ObjectId("252525252525252525252525"),
	"lluvia" : 20 ,
	"velocidad_viento": 30,
	"direccion_viento" : 120,
    "temperatura": 20,
    "humedad" :60 ,
    "calidad_aire" : 80,
    "presion" : 960,
    "estacion" : "555555555555555555555555",
    "fecha": "2017-02-14T18:00:00.000Z"
}

{
    "_id": ObjectId("262626262626262626262626"),
	"lluvia" : 0 ,
	"velocidad_viento": 4,
	"direccion_viento" : 20,
    "temperatura": 37,
    "humedad" :5 ,
    "calidad_aire" : 85,
    "presion" : 950,
    "estacion" : "555555555555555555555555",
    "fecha": "2018-07-14T18:00:00.000Z"
}

{
    "_id": ObjectId("272727272727272727272727"),
	"lluvia" : 50 ,
	"velocidad_viento": 50,
	"direccion_viento" : 32,
    "temperatura": 5,
    "humedad" :60,
    "calidad_aire" : 90,
    "presion" : 1020,
    "estacion" : "555555555555555555555555",
    "fecha": "2018-12-20T18:00:00.000Z"
}
```


## Gestion de usuarios 👥
1. Petición para registrar un usuario (POST) (Sin autentificar): ``` localhost:3000/users/register ```  
Body (ejemplo):  
```json
{
	"username": "ajeky",
	"email": "alvaromarquez98@gmail.com",
	"nombre_completo": "Álvaro Márquez Mata",
	"rol": "ADMIN",
	"password": "QueVivaNuevaGuinea"
}
```  

2. Petición para loguear un usuario (POST) (Sin autentificar): ``` localhost:3000/api/users/login ```  
Body (ejemplo):  
```json
{
	"username": "admin",
	"password": "admin"
}
```  

3. Petición obtener todos los usuarios (GET) (Rol admin): ``` localhost:3000/api/users/ ```

## Gestion de estaciones meteorologicas 🛰️
1. Petición obtener todas las estaciones (GET) (Rol manager): ``` localhost:3000/api/stations/ ```  

2. Petición para obtener los datos de una estación (GET) (Rol manager): ``` localhost:3000/api/stations/:id ```  
ID de ejemplo: ```111111111111111111111111```  

3. Crear una nueva estación (POST) (Rol manager): ``` localhost:3000/api/stations ```  

4. Petición para modificar los datos de una estación (PUT) (Rol manager): ``` localhost:3000/api/stations/:id ```  
ID de ejemplo: ```111111111111111111111111```  

5. Petición eliminar los datos de una estación (DELETE) (Rol manager): ``` localhost:3000/api/stations/:id ```

## Gestion de datos meteorologicos 🌡️
1. Registra una nueva entrada de datos meteorológicos de una estación (POST) (Rol manager): ``` localhost:3000/api/weather ```  

2. Petición para obtener los datos meteorológicos en base a su ID (GET) (Cualquier rol): ``` localhost:3000/api/weather/:id ```  
ID de ejemplo: ```111111111111111111111111```  

3. Petición para obtener los datos meteorológicos de una estación (GET) (Cualquier rol): ``` localhost:3000/api/stations/:id/weather ```  
ID de ejemplo: ```111111111111111111111111```  

4. Petición para obtener todos los datos meteorológicos de todas las estaciones para el día de hoy (GET) (Cualquier rol): ``` localhost:3000/api/weather/today ```  

5. Petición para obtener los datos meteorológicos de una estación para un rango de fechas (GET) (Cualquier rol): ``` localhost:3000/api/stations/:id/weather/from/:from/to/:to ```  
ID de ejemplo: ```111111111111111111111111```  
Formato :from y :to: DD-MM-YYYY (15-04-1998)  

6. Petición para obtener todos los datos meteorológicos de todas las estaciones para un rango de fechas: ``` localhost:3000/api/weather/from/:from/to/:to ```  
Formato :from y :to: DD-MM-YYYY (15-04-1998)

## Apartados de ampliación ➕
![No lo hisimos profe perdona](https://cdn.memegenerator.es/imagenes/memes/full/22/62/22628728.jpg)



