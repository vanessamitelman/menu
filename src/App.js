import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme1, theme2 } from './themes/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Menu from './components/Menu';
import data from './data';
import Categories from './components/Categories';

function App() {
  const [theme, setTheme] = useState(theme1);
  const categories = [...new Set(data.map((item) => item.category))];
  const [selected, setSelected] = useState('All');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <section className='menu section'>
          <button
            className='filter-btn'
            onClick={() =>
              theme === theme1 ? setTheme(theme2) : setTheme(theme1)
            }
          >
            Change Theme
          </button>
          <Menu categories={categories} setSelected={setSelected} />
          <Categories
            selected={selected}
            setSelected={setSelected}
            data={data}
          />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
