import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--body-bg: #1c1c1c;
		--main-color: #03C9D7;
		--txt-color: #fff;
		--white-color: #fff;

		--box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
		--box-shadow-button: 0 0 7px 8px rgb(3 201 215 / 50%);
		--box-shadow-button-hover: 0 0 7px 15px rgb(3 201 215 / 50%);

		--header-height: 7.5rem;
		--footer-height: 4rem;

		--border-radius: 1rem;

		--mobile-width: 600px;
		--tablet-width: 1024px;

		--max-width: 1280px;

		--font-family: 'Montserrat', sans-serif;
		--font-super-big: 2.5rem;
		--font-big: 1.5rem;
		--font-med: 1.2rem;
		--font-small: 1rem;

		--transition: all 0.2s ease;
	}

	* {
		-webkit-tap-highlight-color: transparent;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: var(--font-family);
		font-weight: 400;
		line-height: 1.5;

		color: var(--txt-color);
		background-color: var(--body-bg);
	}

	.shrink {
		height: var(--header-height);
		background-color: var(--body-bg);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
`;
