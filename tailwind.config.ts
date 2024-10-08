/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'mobile-sm': {
				max: '480px',
			},

			// 0 to n pixels (n is the breakpoint number)
			'mobile-md': {
				max: '768px',
			},
			md: {
				min: '768px',
			},

			'mobile-lg': {
				max: '924px',
			},
			tablet: {
				max: '1024px',
			},

			// range of widths for the screen sizes

			'_mobile-lg': {
				min: '481px',
				max: '768px',
			},
			_tablet: {
				min: '769px',
				max: '1024px',
			},
			'_desktop-sm': {
				min: '1025px',
				max: '1280px',
			},
			'_desktop-md': {
				min: '1280px',
			},
		},
		fontSize: {
			xs: ['0.75rem', '18px'],
			sm: ['0.875rem', '20px'],
			base: ['1rem', '22px'],
			lg: ['1.125rem', '24px'],
			xl: ['1.25rem', '26px'],
			'2xl': ['1.5rem', '28px'],
			'3xl': ['1.875rem', '30px'],
			'4xl': ['2.25rem', '32px'],
			'5xl': ['3rem', '34px'],
			'6xl': ['4rem', '36px'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
			},
			screens: {
				xl: '1350px',
				'2xl': '1400px',
			},
		},

		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				16: 'repeat(16, minmax(0, 1fr))',
				'auto-fit-minmax': 'repeat(auto-fit, minmax(400px, 1fr))',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				'primary-dark': {
					DEFAULT: 'hsl(var(--primary-dark))',
					foreground: 'hsl(var(--primary-dark-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			fontFamily: {
				open_sans: ['var(--font-open_sans)'],
				lora: ['var(--font-lora)'],
			},
		},
	},

	plugins: [require('tailwindcss-animate')],
}
