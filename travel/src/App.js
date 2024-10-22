import './App.css';

function App() {
  return (
    <div className="App">
      <!-- Cabecera -->
      <header class="site-header main-container">
        <img src="img/logo.png" alt="logotipo" />
      </header>

      <!-- Menu de navegación -->
      <div class="contenedor-nav">
        <nav class="navegacion-principal contenedor">
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Blog</a>
          <a href="#">Tienda</a>
          <a href="#">Contacto</a>
        </nav>
      </div>

      <!-- Contenedor principal -->
      <main class="main-container">
        <!-- contenedor artículos-->
        <section class="articulos">
          <article class="entrada">
            <h2>Viajar a Londres</h2>
            <p><img src="img/imagen_1.jpg" alt="Imagen Viaje a Londres">Lorem ipsum dolor sit amet, ï í ñ consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="boton">Leer Más</a>
          </article>
          <article class="entrada">
            <h2>Puente De la Torre</h2>
            <img src="img/imagen_2.jpg" alt="Imagen Puente De la torre">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="boton">Leer Más</a>
          </article>
          <article class="entrada">
            <h2>Metro de Londres</h2>
            <img src="img/imagen_3.jpg" alt="Imagen Metro de Londres">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="boton">Leer Más</a>
          </article>
        </section>

        <!-- Barra lateral -->
        <aside class="sidebar">
          <section class="otras-entradas">
            <h2>Otros Posts</h2>
            <ul>
              <li><a href="#">Entrada 1</a></li>
              <li><a href="#">Entrada 2</a></li>
              <li><a href="#">Entrada 3</a></li>
              <li><a href="#">Entrada 4</a></li>
            </ul>
          </section>
        </aside>
      </main>
      <!--.contenedor-->

      <!-- Datos de pie de página -->
      <footer>
        <div class="secciones-footer main-container">
          <section class="nosotros">
            <h2>Sobre Nosotros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. </p>
          </section>
          <section class="menu">
            <h2>Webs amigas</h2>
            <nav class="web-amigas">
              <a href="#">Excursiones premium</a>
              <a href="#">Circuitos únicos</a>
              <a href="#">Cruceríssimo</a>
              <a href="#">TodoViaje</a>
            </nav>
          </section>
        </div>

        <p class="copyright">BlogdeViajes - Todos los derechos Reservados 2019 &copy;</p>
      </footer>
    </div>
  );
}

export default App;
