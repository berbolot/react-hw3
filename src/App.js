import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Title from './components/title/Title';



function App() {

  const user = {name: "Anna", age: 19} 

  return (
    <div className="App">
     <Footer content={user}/>
     <Header content={user}/>
     <Title/>
    </div>
  );
}

export default App;
