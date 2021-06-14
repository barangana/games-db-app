import "./App.css";
import { getPopularMovies } from "./api/API";

function App() {
  return (
    <div>
      <h1>hello world</h1>
      {getPopularMovies()}
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
}

export default App;
