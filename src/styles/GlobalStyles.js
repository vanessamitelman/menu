import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props=>props.theme.clrGrey10};
  color: ${props=>props.theme.clrGrey1};
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: ${props=>props.theme.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${props=>props.theme.clrGrey5};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  width: 90vw;
  margin: 0 auto;
  max-width: ${props=>props.theme.maxWidth};
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

/*
===============
Menu
===============
*/

.menu {
  padding: 5rem 0;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.underline {
  width: 5rem;
  height: 0.25rem;
  background: ${props=>props.theme.clrGold};
  margin-left: auto;
  margin-right: auto;
}
.btn-container {
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
}
.filter-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: ${props=>props.theme.clrGold};
  cursor: pointer;
  transition: ${props=>props.theme.transition};
  border-radius: ${props=>props.theme.radius};
}
.filter-btn:hover {
  background: ${props=>props.theme.clrGold};
  color: ${props=>props.theme.clrWhite};
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
}
.menu-item {
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
}
.photo {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid ${props=>props.theme.clrGold};
  border-radius: ${props=>props.theme.radius};
  display: block;
}
.item-info header {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted ${props=>props.theme.clrGrey5};
}
.item-info h4 {
  margin-bottom: 0.5rem;
}
.price {
  color: ${props=>props.theme.clrGold};
}
.item-text {
  margin-bottom: 0;
  padding-top: 1rem;
}

@media screen and (min-width: 768px) {
  .menu-item {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }
  .photo {
    height: 175px;
  }
}
@media screen and (min-width: 1200px) {
  .section-center {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
  .photo {
    height: 150px;
  }
}

`