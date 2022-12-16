import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getRoutines } from './actions/routines';
import Form from "./components/Form/Form";
import Routines from "./components/Routines";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  return (
    <div>
      <Routines />
      <Form />
    </div>
  );
}

export default App;
