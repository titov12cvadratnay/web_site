import { Link } from 'react-router-dom';  
import style from './App.module.css';

function App() {

  return (
    <>
      <div>
        <div className={style["big-bad-1"]}>
          <div style={{textDecoration: 'none'}} className={style["b-bad-1"]}> 
            <Link to="/" >Litefacebook</Link>
            <Link to="/about" className={style["t-1"]} >О нас</Link>
            <Link to="">Акаунт</Link>
          </div>
        </div>
        <h1>О нас</h1>
        <p>Мы делаем общение доступным . и это бета версия 😁😀</p>
      </div>
    </>
  );
}

export default App;
