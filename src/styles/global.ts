import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --gray-4: #BDBDBD;
    --white: #ffffff;
    --font-grey-100: #333333;
    --font-grey-50: #828282;
    --font-white: #ffffff;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;

    --font-size-1: 1.125rem;
    --font-size-2: 1rem;
    --font-size-3: 0.875rem;
    --font-size-4: .75rem;
}

body {
    background-color: var(--white);
    font-family: 'Inter', sans-serif;
}

html[dark] {
    --grey-100: #333333;
    --grey-50: #525252;
    --grey-20: #BDBDBD;
    --grey-0: #525252;
    --gray-4: #BDBDBD;
    --white: #333333;

    --font-grey-100: #E0E0E0;
    --font-grey-50: #F5F5F5;
}
`;
