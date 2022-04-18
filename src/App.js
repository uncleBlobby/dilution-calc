import { useState } from 'react';
import './App.css';

const App = () => {

  const [inputVolume, setInputVolume] = useState(0);
  const [inputABV, setInputABV] = useState(0);
  const [targetABV, setTargetABV] = useState(0);

  const [output, setOutput] = useState(0);

  const handleVolumeInput = (event) => {
    checkAllFieldsForInvalidInput(event);
    setInputVolume(Number(event.target.value));
  }

  const handleABVInput = (event) => {
    checkAllFieldsForInvalidInput(event);
    setInputABV(Number(event.target.value));
  }

  const handleABVTarget = (event) => {
    checkAllFieldsForInvalidInput(event);
    setTargetABV(Number(event.target.value));
  }

  const calculateAddition = (inputVolume, inputABV, targetABV, output) => {
    output = ((inputVolume * inputABV) / targetABV) - inputVolume;
    setOutput(output);
  }

  const resetAllFields = () => {
    let inputs = document.getElementsByClassName('digitInput');
    for ( let i = 0; i < inputs.length; i++ ) {
      inputs[i].value = '';
    }
    setInputVolume(0);
    setInputABV(0);
    setTargetABV(0);
    setOutput(0);
  }

  const checkAllFieldsForInvalidInput = (event) => {
    let inputs = document.getElementsByClassName('digitInput');
    const reg = new RegExp(/^\d*\.?\d*$/);
    for ( let i = 0; i < inputs.length; i++ ) {
      if ( (!reg.test(inputs[i].value)) && (inputs[i].value !== '' )) {
        inputs[i].classList.add('digitInput-INVALID');
      } else if ( (reg.test(inputs[i].value)) || (inputs[i].value === '')) {
        inputs[i].classList.remove('digitInput-INVALID');
      }
    }  
  }


  return (
    <div className="App">
      <h1>Dilution Calculator</h1>
        <table>
          <tbody>
        <tr>
          <td>
        Starting volume: 
          </td> 
          <td>
            <input id='volInput' className='digitInput' onChange={(event) => handleVolumeInput(event)} /> liters
          </td>
        </tr>
        <tr>
          <td>
        Starting ABV: 
        </td> 
        <td>
          <input id='ABVInput' className='digitInput' onChange={(event) => handleABVInput(event)} /> %
        </td>
        </tr>
        <tr>
          <td>
        Target ABV: 
          </td> 
          <td>
            <input id='targetABVInput' className='digitInput' onChange={(event) => handleABVTarget(event)} /> %
          </td>
        </tr>
        </tbody>
        </table>
        <button onClick={
            () => 
            calculateAddition(inputVolume, inputABV, targetABV, output)
            }>Go!</button>
        <button onClick={() => resetAllFields(inputVolume,inputABV,targetABV, output)}>Reset</button>
        <table>
        <tbody>
        <tr>
          <td>
        Required additions: 
          </td> 
          <td>
             {output.toFixed(2)} liters
          </td>
        </tr>
        <tr>
          <td>
        Final Volume:
          </td> 
          <td>
             {(output + inputVolume).toFixed(2)} liters
          </td>
        </tr>
        </tbody>
        </table>
    </div>
  );
}

export default App;
