import './App.css';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        ビギナーズハッカソン
      </h1>
      <TextField id="outlined-search" label="メールアドレスを入力する" type="search" />
    </div>
  );
}

export default App;
