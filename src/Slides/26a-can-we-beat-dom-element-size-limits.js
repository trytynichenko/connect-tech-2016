import React from 'react';
import Slide from '../Components/Slide'
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import image from '../../public/browser-limits-cutoff.png';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>
        Can we beat DOM element size limits?
      </h1>
      <ul>
        <Step><li>DOM elements have size limits (eg Chrome 33.5M pixels, IE 1.5M pixels)</li></Step>
        <Step><li>You can't scroll past the threshold</li></Step>
        <Step><li>Layout gets wonky as you approach the threshold</li></Step>
      </ul>
      <Step>
        <img
          height={300}
          role='presentation' 
          src={image}
          width={332}
        />
      </Step>
    </Slide>
  </Stepper>
);
