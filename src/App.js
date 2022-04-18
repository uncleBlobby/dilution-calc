import { useState } from 'react';
import './App.css';

const App = () => {

  const [inputVolume, setInputVolume] = useState(0);
  const [inputABV, setInputABV] = useState(0);
  const [targetABV, setTargetABV] = useState(0);

  const [output, setOutput] = useState(0);

  const handleVolumeInput = (event) => {
    console.log(event.target.value)
    setInputVolume(parseInt(event.target.value));
    console.log(`input volume ${inputVolume}`)
  }

  const handleABVInput = (event) => {
    console.log(event.target.value)
    setInputABV(parseInt(event.target.value));
    console.log(`input ABV: ${inputABV}`)
  }

  const handleABVTarget = (event) => {
    console.log(event.target.value)
    setTargetABV(parseInt(event.target.value));
    console.log(`target ABV: ${targetABV}`)
  }

  const calculateAddition = (inputVolume, inputABV, targetABV, output) => {
    output = ((inputVolume * inputABV) / targetABV) - inputVolume;
    setOutput(output);
    console.log(`input volume: ${inputVolume}`)
    console.log(`input ABV: ${inputABV}`)
    console.log(`target ABV: ${targetABV}`)
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
            <input className='digitInput' onChange={(event) => handleVolumeInput(event)} /> liters
          </td>
        </tr>
        <tr>
          <td>
        Starting ABV: 
        </td> 
        <td>
          <input className='digitInput' onChange={(event) => handleABVInput(event)} /> %
        </td>
        </tr>
        <tr>
          <td>
        Target ABV: 
          </td> 
          <td>
            <input className='digitInput' onChange={(event) => handleABVTarget(event)} /> %
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
             {output} liters
          </td>
        </tr>
        <tr>
          <td>
        Final Volume:
          </td> 
          <td>
             {output + inputVolume} liters
          </td>
        </tr>
        </tbody>
        </table>
    </div>
  );
}

export default App;
