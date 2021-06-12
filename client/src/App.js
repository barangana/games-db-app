import "./App.css";
import { callApi } from "./api/API";

function App() {
  return (
    <div>
      <h1>hello world</h1>
      {callApi()}
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
}

export default App;
