import { useState } from 'react';
import { FormDePalo } from './components/FormDePalo';
import { Wavify } from './components/Wavify';

function App() {

  const [count, setCount] = useState(0);


  return (

    <>

      {/* <FormDePalo count={count} setCount={setCount} /> */}

      <Wavify />

    </>

  );

};

export default App