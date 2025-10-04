import "./App.css";
import Routes from "./Routes";
import Pathway from './component/pages/Pathway';

function App() {

  return (
    <div className="min-h-screen w-full relative">
      {/* Diagonal Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* App content */}
      <div className="relative z-10">
        <Routes />
      </div>
    </div>
  );
}

export default App;
