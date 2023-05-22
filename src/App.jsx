import { useSelector } from "react-redux";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const { answers, liters, pixels } = useSelector(state => state.quiz);

  console.log(answers)
  

  return (

    <>

      <AppRouter />

    </>

  );

};

export default App