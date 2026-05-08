import './App.css'
import DrinkItem from './components/DrinkItem'
import NealkoItem from './components/NealkoItem'
import LimonadaItem from './components/LimonadaItem'
import {
  drinkMenu, nealkoDrinkMenu, limonadaMenu,
  kavaMenu, tepleNapojeMenu, pivoMenu, vinoMenu,
  alkoMichaneNapojeMenu, lahvoveNapojeMenu, rozlevaneNapojeMenu, horkeNapojeMenu
} from './menu'

function App() {
  const spritzDrinks = drinkMenu.filter(d => d.subcategory === 'spritz').sort((a, b) => b.price - a.price);
  const classicDrinks = drinkMenu.filter(d => d.subcategory === 'classic').sort((a, b) => b.price - a.price);
  const tropicalDrinks = drinkMenu.filter(d => d.subcategory === 'tropical').sort((a, b) => b.price - a.price);

  const sortedNealkoDrinks = [...nealkoDrinkMenu].sort((a, b) => b.price - a.price);
  const sortedLimonady = [...limonadaMenu].sort((a, b) => b.price - a.price);

  const pivaTocene = pivoMenu.filter(p => p.subcategory === 'tocene');
  const pivaLahvove = pivoMenu.filter(p => p.subcategory === 'lahvove');

  const vinaBila = vinoMenu.filter(v => v.subcategory === 'bile_vino');
  const vinaCervena = vinoMenu.filter(v => v.subcategory === 'cervene_vino');
  const vinaSekty = vinoMenu.filter(v => v.subcategory === 'sekty');
  const vinaStriky = vinoMenu.filter(v => v.subcategory === 'striky');

  return (
    <div className="print-container">
      <div className="a5-page cover-page">
        <div className="cover-top-ornament">
          <div className="cover-line"></div>
          <div className="cover-diamond">◆</div>
          <div className="cover-line"></div>
        </div>
        <div className="cover-body">
          <p className="cover-est">V Nýrsku od roku 1992</p>
          <h1 className="cover-title">Milano</h1>
          <div className="cover-subtitle-wrapper">
          </div>


          <div className="cover-subtitle-wrapper" style={{}}>
            <div className="cover-thin-line"></div>
            <span className="cover-subtitle">Nápojový lístek</span>
            <div className="cover-thin-line"></div>
          </div>

        </div>

        <div className="cover-bottom-ornament">
          <div className="cover-line"></div>
          <div className="cover-diamond">◆</div>
          <div className="cover-line"></div>
        </div>

      </div>
      <div className="a5-page compact-page">
        <div className="lemonade-section">
          <div className="lemonade-text">
            <h2 className="category-title" style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>Limonády</h2>

            <div className="lemonade-variants-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.1rem' }}>
              <div className="lemonade-variants" style={{ marginBottom: 0, flex: 1 }}>
                <span className="variant-title" style={{ marginBottom: '0.4rem', display: 'block' }}>Každou příchuť připravíme ve dvou verzích:</span>
                <div className="variant-item">
                  <span className="variant-name">Klasická <span className="variant-desc" style={{ fontWeight: 'normal' }}>– výraznější a sladší</span></span>
                </div>
                <div className="variant-item">
                  <span className="variant-name">Lehká <span className="variant-desc" style={{ fontWeight: 'normal' }}>– méně sladká a svěžejší</span></span>
                </div>
              </div>
              <div className="lemonade-graphic-small" style={{ width: '110px', marginLeft: '1rem', display: 'flex', justifyContent: 'center', marginTop: '-4rem' }}>
                <img src="/lemonade_jar.png" alt="Lemonade Jar" style={{ width: '100%', height: 'auto', opacity: 0.85, filter: 'drop-shadow(0 0 8px rgba(198, 155, 89, 0.2))' }} />
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.2rem', fontStyle: 'italic' }}>
              Klasická / Lehká
            </div>
            <div className="menu-list single-column">
              {sortedLimonady.map(drink => (
                <LimonadaItem key={drink.id} {...drink} />
              ))}
            </div>
          </div>
        </div>

        <h2 className="category-title">Nealko koktejly</h2>
        <div className="menu-list two-columns">
          {sortedNealkoDrinks.map(drink => (
            <NealkoItem key={drink.id} {...drink} />
          ))}
        </div>

        <h2 className="category-title mt-small">Káva</h2>
        <div className="menu-list two-columns">
          {kavaMenu.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>
      </div>

      <div className="a5-page compact-page">
        <h2 className="category-title">Spritz & osvěžující</h2>
        <div className="menu-list two-columns">
          {spritzDrinks.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>

        <h2 className="category-title mt-small">Klasické koktejly</h2>
        <div className="menu-list two-columns">
          {classicDrinks.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>

        <h2 className="category-title mt-small">Tropické & ovocné</h2>
        <div className="menu-list two-columns">
          {tropicalDrinks.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>
      </div>

      <div className="a5-page compact-page">
        <h2 className="category-title">Piva</h2>
        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Točené</h3>
        <div className="menu-list two-columns">
          {pivaTocene.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>
        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Lahvové</h3>
        <div className="menu-list two-columns">
          {pivaLahvove.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>

        <h2 className="category-title mt-small">Alkoholické míchané nápoje</h2>
        <div className="menu-list two-columns">
          {alkoMichaneNapojeMenu.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>

        <h2 className="category-title mt-small">Nealkoholické nápoje</h2>
        <div className="menu-list two-columns">
          {lahvoveNapojeMenu.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
          {rozlevaneNapojeMenu.map(drink => (
            <DrinkItem key={drink.id} {...drink} />
          ))}
        </div>
      </div>

      <div className="a5-page compact-page">
        <h2 className="category-title">Vína</h2>
        <div className="two-columns">
          <div style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginTop: 0, marginBottom: '0.2rem' }}>Rozlévaná</h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1rem', fontStyle: 'italic' }}>Uvedené ceny jsou za 1 dl / džbánek 5 dl</div>
            <div className="menu-list">
              {vinaBila.map(drink => (
                <DrinkItem key={drink.id} {...drink} />
              ))}
              {vinaCervena.map(drink => (
                <DrinkItem key={drink.id} {...drink} />
              ))}
            </div>
          </div>

          <div style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginTop: 0, marginBottom: '0.2rem' }}>Střiky</h3>
            <div style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>&nbsp;</div>
            <div className="menu-list">
              {vinaSekty.map(drink => (
                <DrinkItem key={drink.id} {...drink} />
              ))}
              {vinaStriky.map(drink => (
                <DrinkItem key={drink.id} {...drink} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="a5-page">
        <h1 className="page-title">Zadní strana</h1>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Kontakty, otevírací doba atd.</p>
      </div>
    </div >
  )
}

export default App
