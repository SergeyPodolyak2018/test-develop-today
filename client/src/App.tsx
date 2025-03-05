import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LayoutSingleRecipe from "./components/LayoutSingleRecipe";
import LayoutRecipes from "./components/LayoutRecipes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/recipes" replace={true} />} />
          <Route path="/recipes" element={<LayoutRecipes />} />
          <Route path="/recipes/:id" element={<LayoutSingleRecipe />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
