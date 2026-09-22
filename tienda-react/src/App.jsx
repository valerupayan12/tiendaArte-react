import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
        {/*<!-- creamos variable productos (diccionario) -->*/}
    const productos = [
      { id: 1, nombre: 'Modelo A', descripcion: 'Modelo 3d', precio: '499.99'},
      { id: 2, nombre: 'Modelo B', descripcion: 'Modelo oleo', precio: '199.99'},
      { id: 3, nombre: 'Modelo C', descripcion: 'Modelo en greda', precio: '299.99'},
      { id: 4, nombre: 'Modelo D', descripcion: 'Modelo en vidrio', precio: '99.99'},
    ]
    return (
    <>
          
        {/*<!-- ENCABEZADO PRINCIPAL (HEADER) -->*/}
      <header id="encabezado"> {/*<!-- Cabecera del sitio con fondo verde agua -->*/}
          <h1>Arte Digital</h1> {/*<!-- Nombre principal del establecimiento -->*/}
          <p>El mejor arte contemporáneo</p> {/*<!-- Eslogan de la veterinaria -->*/}
          
          {/*<!-- NAV: MENÚ DE NAVEGACIÓN -->*/}
          <nav id="menu-principal"> {/*<!-- Envoltorio del menú principal -->*/}
              <ul> {/*<!-- Lista desordenada de opciones del menú -->*/}
                  <li><a href="#inicio">Inicio</a></li> {/*<!-- Enlace a la sección de bienvenida -->*/}
                  <li><a href="productos.html">Productos</a></li> {/*<!-- Clic: Permanece en el catálogo de productos -->*/}
                  <li><a href="#album">Productos</a></li> {/*<!-- Enlace directo a la parte de servicios y productos del inicio -->*/}
                  <li><a href="registro.html">Registro</a></li>
                  <li><a href="login.html">Login</a></li>
              </ul>
          </nav>
      </header>


        {/*<!-- CONTENIDO PRINCIPAL (MAIN) -->*/}
    <main id="contenido"> {/* Contenedor principal de la página */}
          
          {/*<!-- SECCIÓN 1: INICIO Y PRESENTACIÓN -->*/}
          <section id="inicio" className="seccion"> {/*<!-- Sección inicial de bienvenida -->*/}
              <h2>Bienvenidos a Arte Digital</h2> {/*<!-- Título principal de bienvenida -->*/}
              <p>Te damos solo lo mejor del arte contemporáneo.</p> {/*<!-- Descripción general del negocio -->*/}
              <p>¡Tu tranquilidad y satisfacción son nuestra prioridad!</p> {/*<!-- Mensaje motivacional -->*/}

              {/*<!-- CONTENEDOR DEL VIDEO PROMOCIONAL -->*/}
              <div className="contenedor-video"> {/*<!-- Contenedor para centrar el video -->*/}
                  <video autoplay muted loop controls className="video-promocional"> {/*<!-- Video con reproducción automática y en bucle -->*/}
                      <source src="video/presentacion.mp4" type="video/mp4"/> {/*<!-- Ruta del archivo de video -->*/}
                      Tu navegador no soporta la reproducción de video HTML5. {/*<!-- Texto de respaldo si no funciona -->*/}
                  </video>
              </div>
          </section>

          {/*<!-- SECCIÓN 2: ÁLBUM Y GALERÍA DE DESTACADOS -->*/}
          <section id="album" className="seccion"> {/*<!-- Sección con servicios y productos destacados -->*/}
              <h2>¡Revisa Nuestra Galería de Arte!</h2> {/*<!-- Título de la galería -->*/}
              <h3>Conoce lo mejor del arte contemporáneo</h3> {/*<!-- Subtítulo informativo -->*/}

              {/*<!-- GALERÍA EN CUADRÍCULA -->*/}
                            <div className="galeria">
                                {productos.map((producto) => (
                                 <article key={producto.id} className="tarjeta"> {/* Tarjeta individual para cada producto */}
                  <div className="espacio-imagen"> {/*<!-- Contenedor para la imagen del producto -->*/}
                      <img src={producto.imagen} alt={producto.nombre} /> {/*<!-- Imagen del producto -->*/}
                  </div>
                  <h3>{producto.nombre}</h3> {/*<!-- Título del producto -->*/}
                  <p className="descripcion">{producto.descripcion}</p> {/*<!-- Descripción del producto -->*/}
                  <p className="precio">Precio: {producto.precio}</p> {/*<!-- Precio del producto -->*/}
                </article>
                                ))}
                            </div>
          </section>

          {/*<!-- SECCIÓN DE INFORMACIÓN INSTITUCIONAL -->*/}
          <section className="seccion"> {/*<!-- Sección adicional con información general de la clínica -->*/}
              <h2>Sobre nuestra galeria de arte</h2> {/*<!-- Título de la sección -->*/}
              <p>Vendemos los mejores trabajos de arte local.</p> {/*<!-- Descripción de mascotas atendidas -->*/}
              <p>Ofrecemos una amplia selección de obras únicas y creativas.</p> {/*<!-- Resumen de servicios y productos -->*/}
          </section>
      </main> 
      {/*<!-- PIE DE PÁGINA (FOOTER) -->*/}
      <footer id="pie"> {/*<!-- Pie de página final del sitio -->*/}
          <p><small>&copy; 2025 Arte Digital - Todos los derechos reservados</small></p> {/*<!-- Derechos reservados -->*/}
      </footer>

    </>
    )
}
  
export default App
