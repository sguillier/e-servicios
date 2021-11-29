# Proyecto Final Curso React CoderHouse

El proyecto consiste en un mercado de servicios ofrecido por un grupo de famosos. De esta manera se busca de una manera simpatica aplicar las funcionalidades de React.
Como se indica más arriba, este desarrollo es parte del proyecto final del curso de React ofrecido por CoderHouse.

## Sobre la Implementación

1. La intalacion de React fue hecha con `npm create-react-app`
2. Las librerias extras agregadas son:
    * "react-router-dom": "^6.0.2"
    * "firebase": "^9.3.0"    
3. Para el consumo de imagenes se utiliza firebase storage.
4. Para el consumo de datos se utiliza firestore
5. Para la gestión de autentificación se utiliza firebase auth


## Sobre la Funcionalidad

Algunas notas sobre la funcionalidad de la pagina

1. La primera página muestra una lista de cards cada una de ellas mostrando el servicio, precio y la persona que lo ofrece.
2. Cada Card linkea a una url con el detalle del servicio y en donde se puede agregar horas al carrito de compras.
3. Los servicios estan agrupados por categorias cada una de las cuales tiene su propia url. Desde el nav-bar se puede acceder a cada categoria.
4. Si existen itmes en el carrito se puede acceder a el desde el nav-bar. Una vez en el se pueden agregar, quitar o eliminar horas.
5. Para poder envíar el carrito (orden de compra) es necesario haber iniciado sesión.
6. Para el inicio de sesión solo es necesario un correo (puede ser ficticio) y una contraseña.

## Sobre la Seguridad de la Información

Se definieron en firestorm reglas de seguridad que permiten la lectura pública de los datos asociados a los servicios ofrecidos pero se bloquea la escritura y/o edición de estos. Respecto de las órdenes de compra enviadas, éstas sólo pueden ser editadas y leídas por el usuario que las generó, por ello es requisito estar logueado para poder generarlas.

