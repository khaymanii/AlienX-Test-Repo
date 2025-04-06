import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <Alert
        type="success"
        title="Success!"
        message="Everything is on track."
      />
      <Alert type="warning" title="Warning!" message="Check your settings." />
      <Alert type="failure" title="Error!" message="Something went wrong." />
    </div>
  );
}

export default App;
