import { useState } from 'react';

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

  const InputRow = ({ textLabel, handler }) => {
    return (
      <tr>
        <td>
          {textLabel}:
        </td>
        <td>
          <input onChange={(event) => {handler}} />
        </td>
      </tr>
    )
  }


  return (
    <div className="App">
        <table>
          <tbody>
        <tr>
          <td>
        Starting volume: 
          </td> 
          <td>
            <input onChange={(event) => handleVolumeInput(event)} />
          </td>
        </tr>
        <tr>
          <td>
        Starting ABV: 
        </td> 
        <td>
          <input onChange={(event) => handleABVInput(event)} />
        </td>
        </tr>
        <tr>
          <td>
        Target ABV: 
          </td> 
          <td>
            <input onChange={(event) => handleABVTarget(event)} />
          </td>
        </tr>
        </tbody>
        </table>
        <button onClick={
            () => 
            calculateAddition(inputVolume, inputABV, targetABV, output)
            }>Go!</button>
        <table>
        <tbody>
        <tr>
          <td>
        Required additions: 
          </td> 
          <td>
             {output}
          </td>
        </tr>
        <tr>
          <td>
        Final Volume:
          </td> 
          <td>
             {output + inputVolume}
          </td>
        </tr>
        </tbody>
        </table>
    </div>
  );
}

export default App;
