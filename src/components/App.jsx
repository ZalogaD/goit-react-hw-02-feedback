import React from 'react';

class App extends React.Component {
  handleClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Відгуки</h1>
        <button onClick={() => this.handleClick('good')}>Добре</button>
        <button onClick={() => this.handleClick('neutral')}>Нейтрально</button>
        <button onClick={() => this.handleClick('bad')}>Погано</button>
        <h2>Статистика:</h2>
        <p>Добре: {good}</p>
        <p>Нейтрально: {neutral}</p>
        <p>Погано: {bad}</p>
      </div>
    );
  }
}

export default App;
