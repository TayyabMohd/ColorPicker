import "./App.css";
import ColorPicker from "./components/ColorPicker";
function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "indigo",
    "magenta",
    "lime",
    "crimson",
    "khaki",
    "olive",
    "plum",
    "teal",
    "aquamarine",
    "sienna",
    "lavender",
    "salmon",
    "peachpuff",
    "maroon",
    "powderblue",
    "seagreen",
    "steelblue",
  ];
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
