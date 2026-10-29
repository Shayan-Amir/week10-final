// import the stylesheet for this page
import "./App.css";
// bring in MarketCard from its file
import MarketCard from "./components/MarketCard.jsx";
import PageHeader from "./components/PageHeader.jsx"

// define the App component as a function
function App() {
  // return a row that holds the cards
  return (
    <>
    <PageHeader name="Florida Home Prices" tagline="Case-Shiller index, Jun 2026"/>
      <div className="card-row">
        {/* Miami: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard index={447.519} change={2.29} />
        {/* Tampa: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="Tampa" index={369.611} change={-1.23} />
        {/* National: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="National" index={332.294} change={1.62} />
      </div>
    </>
  );
}

// make App available to main.jsx
export default App;
