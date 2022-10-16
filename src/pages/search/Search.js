import { useLocation } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";

// components
import RecipeList from "../../components/RecipeList";

// styles
import "./Search.css";
import { useTheme } from "../../hooks/useTheme";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const { documents, error, isPending } = useCollection("recipes", [
    "title",
    "==",
    query,
  ]);

  // in case of using fetch API (useFetch file)
  // const { data, isPending, error } = useFetch(
  //   `http://localhost:3000/recipes?q=${query}`
  // );

  const { mode } = useTheme();

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {documents && <RecipeList recipes={documents} />}
    </div>
  );
}
