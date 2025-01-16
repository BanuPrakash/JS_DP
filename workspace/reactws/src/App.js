import logo from './logo.svg';
import './App.css';
import CloneApp from './clone/CloneApp';
import Input from './store/Input';
import Display from './store/Display';
import DogImages from './decorator/DogImages';

function App() {
  return (
    <div>
         {/* <Input/>
         <Display /> */}
         <DogImages />
    </div>

  );
}

export default App;
