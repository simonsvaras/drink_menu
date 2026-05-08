import './DrinkItem.css';

export default function LimonadaItem({ name, price, price2 }) {
  // Pokud je zadána druhá cena, zobrazí se "55 / 65 Kč", jinak jen "55 Kč"
  const priceDisplay = price2 ? `${price} / ${price2}` : price;

  return (
    <div className="drink-item limonada-item">
      <div className="drink-header" style={{ marginBottom: '0' }}>
        <h3 className="drink-name" style={{ marginBottom: '0', whiteSpace: 'normal' }}>{name}</h3>
        <div className="drink-dots"></div>
        <span className="drink-price">{priceDisplay}&nbsp;Kč</span>
      </div>
    </div>
  );
}
