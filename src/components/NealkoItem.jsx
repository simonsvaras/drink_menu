import './DrinkItem.css';

export default function NealkoItem({ name, description, price }) {
  const formattedDescription = description ? description.replace(/,\s*/g, ' • ') : '';

  return (
    <div className="drink-item nealko-item">
      <div className="drink-header">
        <h3 className="drink-name">{name}</h3>
        <div className="drink-dots"></div>
        <span className="drink-price">{price}&nbsp;Kč</span>
      </div>
      {formattedDescription && <div className="drink-description">{formattedDescription}</div>}
    </div>
  );
}
