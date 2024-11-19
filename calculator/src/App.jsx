import './App.css';
import * as math from 'mathjs';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Alert from './components/Alert';

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(0);
  const [alert, setAlert] = useState({show: false});
  
  function addToText(val){
    const actionKeys = ["+", "-", "*", "/", "."];
    const lastChar = text.charAt(text.length - 1);
    if(actionKeys.includes(val) && actionKeys.includes(lastChar)){
      handleAlert("danger", "Cannot add two actions together");
    }
    else{
      setText(text => [...text, val]); 
    }
  }
  
  function calculateResult(){
    let tempText = text.join().replace(" ", "");
    setResult(math.evaluate(tempText));
  }

  function handleAlert(type, text){
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 3000);    
  }
  function calculate(){
    setResult(math.evaluate(text));
  }
  function clear(){
    setText("");
    setResult(0);
  }

  function handleClick(symbol){
    if(symbol === "="){
      calculate();
    }
    else if(symbol === "Clear"){
      clear();
    }
    else{
      setText(text + symbol);
    }
  }
  return (
    <div className="App">
      <div className="calc-wrapper">
        {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" color="gray" handleClick={handleClick}/>
          <Button symbol="8" color="gray" handleClick={handleClick}/>
          <Button symbol="9" color="gray" handleClick={handleClick}/>
          <Button symbol="/" color="orange" handleClick={handleClick}/>
        </div>
        <div className="row">
          <Button symbol="4" color="gray" handleClick={handleClick}/>
          <Button symbol="5" color="gray" handleClick={handleClick}/>
          <Button symbol="6" color="gray" handleClick={handleClick}/>
          <Button symbol="*" color="orange" handleClick={handleClick}/>
        </div>
        <div className="row">
          <Button symbol="1" color="gray" handleClick={handleClick}/>
          <Button symbol="2" color="gray" handleClick={handleClick}/>
          <Button symbol="3" color="gray" handleClick={handleClick}/>
          <Button symbol="+" color="orange" handleClick={handleClick}/>
        </div>
        <div className="row">
          <Button symbol="0" color="gray" handleClick={handleClick}/>
          <Button symbol="." color="gray" handleClick={handleClick}/>
          <Button symbol="=" color="gray" handleClick={handleClick}/>
          <Button symbol="-" color="orange" handleClick={handleClick}/>
        </div>
        <div className="row">
          <Button symbol="Clear" color="red" handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}