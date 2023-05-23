import styled, { css } from 'styled-components';
import './App.css';

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: #BF4F74;
      color: white;
    `}
  `
  return (
    <div className="App">
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}

export default App;
