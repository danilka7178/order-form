import { MyStepper, MainButtons } from "./components";
import { Contacts, DeliveryChoose } from "./pages";
import { useSelector } from "react-redux";

function App() {
  const step = useSelector(state => state.stepVault.step);

  return (
    <div className="App">
      <MyStepper />
      {step === 0 ? <Contacts /> :
        step === 1 ? <DeliveryChoose /> :
          null}
      <MainButtons />
    </div>
  );
}

export default App;
