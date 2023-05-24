import { useSelector } from "react-redux";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const { answers, liters, euros, pixels } = useSelector(state => state.quiz);

  // console.log(answers);
  // console.log(liters);
  // console.log(euros);
  // console.log(pixels);
  

  return (

    <>
    

      <AppRouter />

    </>

  );

};

export default App