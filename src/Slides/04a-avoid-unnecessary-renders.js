import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import ScuChart from '../Components/ScuChart';

export default () => (
  <Stepper numSteps={6}>
    <Slide>
      <h1>Avoid unnecessary renders</h1>
      <Step>
        <div>
          <p>React recursively renders elements when state changes*.</p>
          <ScuChart scu='all' />
        </div>
      </Step>
      <Step><h2>This is important because:</h2></Step>
      <ul>
        <Step><li>Slow for big applications</li></Step>
        <Step><li>Virtual DOM is faster than DOM, but still not free</li></Step>
      </ul>
      <Step><h2>So how do we handle this?</h2></Step>
    </Slide>
  </Stepper>
);
