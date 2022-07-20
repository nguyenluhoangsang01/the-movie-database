import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		${"" /* Dark Theme */}
    --body-bg: #1c1c1c;
		--txt-color: #fff;

		--main-color: #03C9D7;

		--white-color: #fff;

		--modal-color: rgba(0, 0, 0, 0.5);

		--box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
		--box-shadow-button: 0 0 7px 8px #03c9d780;
		--box-shadow-button-hover: 0 0 7px 15px #03c9d780;

		--header-height: 7.5rem;
		${"" /* Breakpoint */}
		@media screen and (max-width: 768px) {
			--header-height: 6.7rem;
		}

		--footer-height: 4rem;

		--border-radius: 1rem;

		--mobile-width: 600px;
		--tablet-width: 1024px;

		--max-width: 1280px;

		--font-family: 'Montserrat', sans-serif;
		--font-super-big: 5rem;
		--font-big: 1.6rem;
		--font-med: 1.3rem;
		--font-small: 1.1rem;
		--font-close-button: 2.5rem;

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

		user-select: none;
	}

	#root {
		position: relative;
	}

	.shrink {
		height: var(--header-height);
		background-color: var(--body-bg);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		${"" /* Breakpoint */}
		@media screen and (max-width: 480px) {
			position: unset;
		}
	}

	.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
		bottom: 4rem;
	}

	@keyframes zoomOut {
		0%   {transform: scale(0);}
		100% {transform: scale(1);}
	}

	@keyframes topToBottom {
		0%	 {
			top: -10rem;
			opacity: 0;
		}
		100% {
			top: 0;
			opacity: 1;
		}
	}
`;

// mobile device: max-width: 480px
// tablet device: max-width: 768px
// laptop device: max-width: 1024px
// desktop device: max-width: 1280px
