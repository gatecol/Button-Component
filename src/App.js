import React from "react";
import Button from "./components/Button";
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="headline">Buttons</h1>
      
      <div className="buttonBox">
        <p>Variant</p>
        <Button />
        <Button variant="outline" />
        <Button variant="text" />
      </div>

      <div className="buttonBox">
        <p>Disable shadow</p>
        <Button disableShadow />
      </div>

      <div className="buttonBox">
        <p>Disabled</p>
        <Button disabled />
        <Button variant="text" disabled />
      </div>

      <div className="buttonBox">
        <p>Start icon</p>
        <Button startIcon="bi-shop" color="primary"/>
        <Button endIcon="bi-shop" color="primary"/>
      </div>

      <div className="buttonBox">
        <p>Size</p>
        <Button size="sm" color="primary" />
        <Button size="md" color="primary" />
        <Button size="lg" color="primary" />
      </div>

      <div className="buttonBox">
        <p>Color</p>
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>
      
    </div>
  );
}

export default App;
