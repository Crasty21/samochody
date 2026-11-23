function KartaSamochodu({ samochod }) {

  return (
    <div className="karta-samochodu">
      <h3>🚗 {samochod[0]}</h3>
      <p>{samochod[1]}</p>
      <strong>Moc silnika: {samochod[2]}</strong>
    </div>
  );
}

export default KartaSamochodu;