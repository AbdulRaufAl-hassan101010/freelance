import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root { 
    --primary-color: #1aacac;
    --secondary-color: '';
    --primary-font: 'Poppins', sans-serif;
    --secondary-font: '';
    --grey-color: #f3f3f3;
    --white-color: #fff;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

html {
    font-size: 10px;
    font-family: var(--primary-font);
    scroll-behavior: smooth;
}


body {
    font: normal 1.6rem/1.8 var(--primary-font);
    background-color: var(--grey-color);
    
}

body, a, button {
    font: normal 1.6rem/1.8 var(--primary-font);
    color: #111
}

.container {
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem
}

.row {
    display: flex;
}

.jc-sb {
    justify-content: space-between;
}

.align-items-c {
    align-items: center;
}

fieldset {
    border: none;
}

.mb-1 {
    margin-bottom: 1rem;
}

address {
    font-style: normal
}


footer {
    text-align: center;
    font-size: 2rem;
    color: #757575
}

`;

export default GlobalStyles;
