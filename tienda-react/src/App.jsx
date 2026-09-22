
import './App.css'
import heroImage from './assets/hero.png'

function App() {
  const productos = [
    {
      id: 1,
      nombre: 'Neón Aurora',
      descripcion: 'Obra digital abstracta con tonos violeta, azul y brillo moderno.',
      precio: 149.99,
      imagen: heroImage,
    },
    {
      id: 2,
      nombre: 'Paisaje Futurista',
      descripcion: 'Escena digital minimalista inspirada en ciudades del mañana.',
      precio: 199.99,
      imagen: heroImage,
    },
    {
      id: 3,
      nombre: 'Magma Dreams',
      descripcion: 'Composición visual vibrante con textura y movimiento artístico.',
      precio: 249.99,
      imagen: heroImage,
    },
    {
      id: 4,
      nombre: 'Minimal Motion',
      descripcion: 'Pieza elegante y moderna para espacios creativos y contemporáneos.',
      precio: 99.99,
      imagen: heroImage,
    },
  ]

  return (
    <>
      <header id="encabezado">
        <h1>Arte Digital</h1>
        <p>Creaciones visuales para espacios modernos</p>

        <nav id="menu-principal">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#registro">Registro</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main id="contenido">
        <section id="inicio" className="seccion">
          <h2>Bienvenidos a Arte Digital</h2>
          <p>Descubre piezas únicas creadas con creatividad, tecnología y estilo contemporáneo.</p>
          <p>Transformamos ideas en arte visual para inspirar, decorar y personalizar cada espacio.</p>

          <div className="contenedor-video">
            <video autoPlay muted loop controls className="video-promocional">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </div>
        </section>

        <section id="productos" className="seccion">
          <h2>Explora nuestra colección digital</h2>
          <h3>Obras modernas para hogares, estudios y oficinas</h3>

          <div className="galeria">
            {productos.map((producto) => (
              <article key={producto.id} className="tarjeta">
                <div className="espacio-imagen">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <h3>{producto.nombre}</h3>
                <p className="descripcion">{producto.descripcion}</p>
                <p className="precio">Precio: ${producto.precio.toFixed(2)}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="seccion">
          <h2>Sobre nuestra galería</h2>
          <p>Seleccionamos obras digitales originales pensadas para ofrecer estilo, identidad y energía visual.</p>
          <p>Desde piezas abstractas hasta ilustraciones minimalistas, cada diseño está pensado para inspirar.</p>
        </section>
      </main>

      <footer id="pie">
        <p><small>&copy; 2026 Arte Digital - Todos los derechos reservados</small></p>
      </footer>
    </>
  )
}

export default App
