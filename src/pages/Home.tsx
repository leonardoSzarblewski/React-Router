import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function productOpen() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Página home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        <button type="button" onClick={productOpen}>
          Ver produtos
        </button>
      </nav>
    </div>
  );
}
