import { DashProvider } from "./Contexts/DashContext";
import { UserProvider } from "./Contexts/UserContext";
import { RoutesComp } from "./routes";

function App() {
  window.document.title = "BurguerKenzie";
  return (
    <section className="App">
      <UserProvider>
        <DashProvider>
          <RoutesComp />
        </DashProvider>
      </UserProvider>
    </section>
  );
}

export default App;
