import { useParams, useNavigate } from "react-router";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  function returnPage() {
    navigate(-1);
  }

  return (
    <div>
      <button type="button" onClick={returnPage}>
        Voltar
      </button>

      <h1>Detalhes</h1>

      <span>
        ID do produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
