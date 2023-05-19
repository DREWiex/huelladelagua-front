import { NavBar } from "./layouts/NavBar";
import { AppRouter } from "./routers/AppRouter";

function App() {

  return (

    <>

      <main className='wavify'>

        <NavBar />

        <AppRouter />

      </main>

    </>

  );

};

export default App