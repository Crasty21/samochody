import {useState} from 'react';
import Naglowek from './komponenty/Naglowek.jsx';
import KartaSamochodu from './komponenty/KartaSamochodu.jsx';
import PrzedstawSie from './komponenty/PrzedstawSie.jsx';

function App() {

  const samochody = [
    ['BMW M3', 'Sportowy samochód z mocnym silnikiem.', '510 KM'],
    ['Audi RS6', 'Szybkie i luksusowe kombi.', '600 KM'],
    ['Mercedes C63', 'Sportowy Mercedes o świetnych osiągach.', '476 KM'],
    ['Volkswagen Golf GTI', 'Popularny samochód sportowy.', '245 KM'],
    ['Porsche 911', 'Legenda niemieckiej motoryzacji.', '385 KM'],
    ['Toyota Supra', 'Japońskie sportowe coupe.', '340 KM'],
    ['Nissan GT-R', 'Samochód o bardzo dobrym przyspieszeniu.', '570 KM'],
    ['Volkswagen Passat', 'Wygodny samochód na długie trasy.', '150 KM']
  ];

  const ciekawostki = [
    'Pierwszy samochód z silnikiem spalinowym powstał w XIX wieku.',
    'Porsche 911 jest produkowane od 1964 roku.',
    'ABS pomaga podczas gwałtownego hamowania.',
    'Aerodynamika wpływa na osiągi samochodu.',
    'Samochody elektryczne nie potrzebują tradycyjnej skrzyni biegów.'
  ];

  const [szukaj, ustawSzukaj] = useState('');
  const [ciemnyMotyw, ustawCiemnyMotyw] = useState(true);
  const [imie, ustawImie] = useState(localStorage.getItem('imie') || '');

  const ciekawostka = ciekawostki[
    Math.floor(Math.random() * ciekawostki.length)
  ];

  const znalezioneSamochody = samochody.filter(samochod =>
    samochod[0].toLowerCase().includes(szukaj.toLowerCase())
  );

  function zapiszImie(noweImie) {
    localStorage.setItem('imie', noweImie);
    ustawImie(noweImie);
  }

  return (
    <div className={ciemnyMotyw ? 'strona ciemna' : 'strona jasna'}>

      <Naglowek
        ciemnyMotyw={ciemnyMotyw}
        zmienMotyw={() => ustawCiemnyMotyw(!ciemnyMotyw)}
      />

      <main className="kontener">

        <section className="powitanie">
          <h1> AutoŚwiat</h1>
          <h2>Portal dla miłośników motoryzacji</h2>
          <p>Poznaj ciekawe samochody i odkrywaj świat motoryzacji!</p>

          <PrzedstawSie
            imie={imie}
            zapiszImie={zapiszImie}
          />

          {imie && <h3>Witaj ponownie, {imie}!</h3>}
        </section>

        <section className="ciekawostka">
          <h2>💡 Ciekawostka dnia</h2>
          <p>{ciekawostka}</p>
        </section>

        <section className="samochody">
          <h2>Nasze samochody</h2>

          <input
            type="text"
            placeholder="Szukaj samochodu..."
            value={szukaj}
            onChange={(e) => ustawSzukaj(e.target.value)}
          />

          <div className="lista-samochodow">

            {znalezioneSamochody.map((samochod, index) => (
              <KartaSamochodu
                key={index}
                samochod={samochod}
              />
            ))}

          </div>

          {znalezioneSamochody.length === 0 && (
            <p>Nie znaleziono samochodu.</p>
          )}

        </section>

        <footer>
          © Piątek Kacper
        </footer>

      </main>
    </div>
  );
}

export default App;