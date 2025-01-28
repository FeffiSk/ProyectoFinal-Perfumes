import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import PerfumeList from "./components/PerfumeList";

const productos = [
  { id: 1, nombre: 'Perfume Floral', categoria: 'floral' },
  { id: 2, nombre: 'Perfume Cítrico', categoria: 'cítrico' },
  { id: 3, nombre: 'Perfume Amaderado', categoria: 'amaderado' },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categoria/:categoria" element={<PerfumeList />} /> {}
      </Routes>
    </Router>
  );
}

const ProductosPorCategoria = () => {
  const { categoria } = useParams();
  const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);

  return (
    <div>
      <h2>Productos en la categoría: {categoria}</h2>
      <ul>
        {productosFiltrados.length === 0 ? (
          <li>No hay productos en esta categoría.</li>
        ) : (
          productosFiltrados.map((producto) => (
            <li key={producto.id}>{producto.nombre}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;