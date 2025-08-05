import style from './App.module.css';
import { Link } from 'react-router-dom';  

function App() {               

  return (
    <>                            
      <div className={style["big-bad-1"]}>
      <div style={{textDecoration: 'none'}} className={style["b-bad-1"]}> 
        <Link to="/" >Litefacebook</Link>
        <Link to="/about" className={style["t-1"]} >О нас</Link>
        <Link to="/user">Акаунт</Link>
      </div>
        <h1>Litefacebook - делитесь и общайтесь</h1>
        <p>Litelacebook это - лайтовая социальная сеть где можно лайтово общятся</p>
        <div>
          <h2>Это самая весёлая социальная сеть . Поэтому </h2>
          <div className={style["div-for-button-1"]}>
            <button className={style["button-1"]}>Войдите !</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;                    