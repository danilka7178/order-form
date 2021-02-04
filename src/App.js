import { useSelector, useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import { handleNext, handleReset } from "./store/steps/actions"


function App() {
  const { step, steps } = useSelector(asd => asd.stepVault);
  const dispatch = useDispatch();

  const clickNextStep = () => {
    dispatch(handleNext())
  }

  const clickResetStep = () => {
    dispatch(handleReset())
  }

  return (
    <div className="App">
      <h3>Текущий шаг: {step}</h3>
      {steps.map((obj) => {
        return (
          <div key={`${obj.id}_${obj.name.substr(0, 5)}`}>
            <p>{obj.id}</p>
            <p>{obj.name}</p>
            <p>{obj.content}</p>
          </div>
        )
      })
      }
      {step !== steps.length ? (
        <div>
          <Button
            variant="outline-secondary"
          >
            Назад</Button>
          <Button
            variant={step === steps.length - 1 ? "success" : "primary"}
            className="btn-next"
            onClick={clickNextStep}
          >
            {step === steps.length - 1 ? "Оплатить" : "Далее"}</Button>
        </div>
      ) :
        (
          <Button
            variant="info"
            className="btn-next"
            onClick={clickResetStep}
          >Вернуться на первый шаг</Button>
        )}
    </div>
  );
}

export default App;
