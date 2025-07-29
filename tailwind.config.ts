
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'quicksand': ['Quicksand', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#fff', // white background
				foreground: '#111', // almost black text
				primary: {
					DEFAULT: '#d90429', // strong red
					foreground: '#fff', // white text on red
				},
				secondary: {
					DEFAULT: '#111', // black
					foreground: '#fff', // white text on black
				},
				accent: {
					DEFAULT: '#fff', // white accent
					foreground: '#d90429', // red text on white accent
				},
				success: {
					DEFAULT: '#43aa8b', // green for success
					foreground: '#fff',
				},
				muted: {
					DEFAULT: '#f5f5f5',
					foreground: '#888',
				},
				// driving: { // old palette, now commented out
				//   blue: 'hsl(210, 85%, 45%)',
				//   'blue-light': 'hsl(210, 40%, 96%)',
				//   orange: 'hsl(25, 90%, 55%)',
				//   green: 'hsl(142, 76%, 36%)',
				//   gray: 'hsl(220, 15%, 15%)',
				//   'gray-light': 'hsl(214, 32%, 91%)',
				// },
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
