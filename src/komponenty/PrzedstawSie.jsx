function PrzedstawSie({ imie, zapiszImie }) {

  function przedstawSie() {
    const noweImie = prompt('Jak masz na imię?');

    if (noweImie && noweImie.trim() !== '') {
      zapiszImie(noweImie.trim());
    }
  }

  return (
    <button onClick={przedstawSie}>
      {imie ? 'Zmień imię' : 'Przedstaw się'}
    </button>
  );
}

export default PrzedstawSie;