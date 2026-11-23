function Naglowek({ ciemnyMotyw, zmienMotyw }) {

  return (
    <header>
      <h2> AutoŚwiat</h2>

      <button onClick={zmienMotyw}>
        {ciemnyMotyw ? 'Jasny motyw' : 'Ciemny motyw'}
      </button>
    </header>
  );
}

export default Naglowek;