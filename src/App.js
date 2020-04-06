import React, {useState, useEffect} from 'react';
import './App.css';
import {Form, FormGroup, Button, Input} from 'reactstrap'

function App() {

  const [onOff, setOnOff] = useState(true)
  const [time, setTime] = useState(1)  
  const [perc, setPerc] = useState(25)
  const [perc2, setPerc2] = useState(75)
  const [color1, setColor1] = useState(0)
  const [color2, setColor2] = useState(125)

  useEffect((perc, perc2) => {
      const interval = setInterval(() => {
        if(onOff === true){
          if(perc === 25){
            perc = 75
            setPerc(perc) 
          }else{
            perc = 25
            setPerc(perc)
          }
  
  
          if(perc2 === 75){
            perc2 = 25
            setPerc2(perc2)
          }else{
            perc2 = 75
            setPerc2(perc2)
          }
        }else{
          
        }
      }, (time * 1000)) 

      return () => clearInterval(interval);
  }, [onOff])

  let red = {
    backgroundColor: `hsl(${color1}, 100%, ${perc}%)`, 
  }

  let green = {
    backgroundColor: `hsl(${color2}, 100%, ${perc2}%)`
  }

  function change(e , value){
    e.preventDefault()
    if(value === true){
      value = false
      return value
    }else{
      value = true
      return value
    }
  }

  let on = 'On'

  if(onOff === true){
    on = 'On'
  }else{
    on = 'Off'
  }

  return (
    <div className="App">
      <div className="container cont">
        <div className="row mb-4">
          <h1 className="col-12 text-center">Lights Of Christmas</h1>
        </div>
        <Form onSubmit={e => setOnOff(change(e, onOff))} className="container mb-5">
          <FormGroup  className="row">
            <Input type='number' className="col-3 mr-1" placeholder="change the interval of time controlling" onChange={e => setTime(e.target.value)}></Input>
            <Input type="number" className="col-3 mr-1" placeholder="color 1" onChange={e => setColor1(e.target.value)}></Input>
            <Input type="number" className="col-3 mr-1" placeholder="color 2" onChange={e => setColor2(e.target.value)}></Input>
            <Button color="primary" className="col-2" type="submit">{on}</Button> 
          </FormGroup>
        </Form>
        <div className="row justify-content-center">
          <div className="ml-4 light" style={red}></div>
          <div className="ml-4 light" style={green}></div>
          <div className="ml-4 light" style={red}></div>
          <div className="ml-4 light" style={green}></div>
          <div className="ml-4 light" style={red}></div>
          <div className="ml-4 light" style={green}></div>
          <div className="ml-4 light" style={red}></div>
          <div className="ml-4 light" style={green}></div>
          <div className="ml-4 light" style={red}></div>
          <div className="ml-4 light" style={green}></div>
          <div className="ml-4 light" style={red}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
