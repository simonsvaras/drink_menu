import './DrinkItem.css';

export default function DrinkItem({ name, description, price, price2, volume }) {
  const formattedDescription = description ? description.replace(/,\s*/g, ' • ') : '';
  const priceDisplay = price2 ? `${price} / ${price2}` : price;

  return (
    <div className="drink-item">
      <div className="drink-header">
        <h3 className="drink-name">
          {name}
          {volume && <span className="drink-volume" style={{ fontWeight: 'normal', fontSize: '0.8em', marginLeft: '0.5rem', opacity: 0.8 }}>{volume}</span>}
        </h3>
        <div className="drink-dots"></div>
        <span className="drink-price">{priceDisplay}&nbsp;Kč</span>
      </div>
      {formattedDescription && <div className="drink-description">{formattedDescription}</div>}
    </div>
  );
}
