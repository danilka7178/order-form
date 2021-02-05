import { MyStepper, MainButtons } from "./components";
import { Contacts, DeliveryChoose, PaymentChoose, SummaryInfo } from "./pages";
import { useSelector } from "react-redux";

function App() {
  const step = useSelector(state => state.stepVault.step);

  return (
    <div className="App">
      <MyStepper />
      {step === 0 ? <Contacts /> :
        step === 1 ? <DeliveryChoose /> :
          step === 2 ? <PaymentChoose /> :
            step === 3 ? <SummaryInfo /> :
              null}
      <MainButtons />
    </div>
  );
}

export default App;
