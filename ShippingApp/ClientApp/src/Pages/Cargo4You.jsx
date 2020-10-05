import * as React from 'react';
import { connect } from 'react-redux';

function Cargo4You () {
  return(
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default connect()(Cargo4You);
