
import './App.css'
import imagenBase from './assets/img/2aN_BASE.jpg'
import rosyMucha from './assets/img/2-rosy-mucha.jpg'
import protectorSolar from './assets/img/protectorSolas.jpeg'
import sakura from './assets/img/sakura.jpeg'
import tocobo from './assets/img/TOCOBO04.jpg'
import cosmeticosCoreanos from './assets/img/maquillajeskincare.jpg'
import lipTatto from './assets/img/liptatto.jpg'
import portadaCoreana from './assets/img/coreana.jpg'
import logoSkinInternational from './assets/img/logoskininternational.png'
import tratamientoVitaminaC from './assets/img/15552_krskin_vc.jpg'

function App() {
  const productos = [
    {
      id: 1,
      nombre: 'Base de maquillaje 2aN',
      imagen: imagenBase,
    },
    {
      id: 2,
      nombre: 'Rosy Mucha',
      imagen: rosyMucha,
    },
    {
      id: 3,
      nombre: 'Protector solar',
      imagen: protectorSolar,
    },
    {
      id: 4,
      nombre: 'Sakura',
      imagen: sakura,
    },
    {
      id: 5,
      nombre: 'TOCOBO',
      imagen: tocobo,
    },
    {
      id: 6,
      nombre: 'Maquillaje y skincare',
      imagen: cosmeticosCoreanos,
    },
    {
      id: 7,
      nombre: 'Lip tattoo',
      imagen: lipTatto,
    },
    {
      id: 8,
      nombre: 'Productos coreanos',
      imagen: portadaCoreana,
    },
    {
      id: 9,
      nombre: 'K-Skin International',
      imagen: logoSkinInternational,
    },
    {
      id: 10,
      nombre: 'Tratamiento vitamina C',
      imagen: tratamientoVitaminaC,
    },
  ]

  return (
    <>
      <header id="encabezado">
        <h1>K-Skin</h1>
        <p>Lo mejor de la estetica Coreana en tu piel</p>
        <img src={logoSkinInternational} alt="K-Skin International" width="800" height="400" />

        <nav id="menu-principal">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#album">Productos</a></li>
          </ul>
        </nav>
      </header>

      <main id="contenido">
        <section id="inicio" className="seccion">
          <h2>Bienvenidos a K-Skin</h2>
          <p>Los mejores productos de Corea estan aqui.</p>
          <p>Puedes encontrar todo lo que necesites.</p>
        </section>

        <section id="album" className="seccion">
          <h2>Revisa nuestros productos</h2>
          <img src={portadaCoreana} alt="Productos de skincare coreano" />
          <div className="galeria">
            {productos.map((producto) => (
              <article key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="pie">
        <p><small>&copy; 2026 K-Skin - Todos los derechos reservados</small></p>
      </footer>
    </>
  )
}

export default App
