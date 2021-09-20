import React, {Fragment} from 'react';
import Header from './Components/Header';
import Form from './Components/Form'

function App() {
  return (
    <Fragment>
        <Header/>
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form/>
              </div>
              <div className="col m6 s12">
                2
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
