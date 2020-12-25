import "./App.css";
import Palette from "./components/ColorPalette/Palette";
import { SEED_PALETTES } from "./utils/seedPalettes";

function App() {
    return (
        <div className="App">
            <Palette palette={SEED_PALETTES[3]} />
        </div>
    );
}

export default App;
