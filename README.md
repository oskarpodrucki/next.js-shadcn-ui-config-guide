# Next.js + shadcn/ui Configuration Guide

This guide walks you through setting up a Next.js project with shadcn/ui and Tailwind CSS.

## 1. Create a Next.js Project (JavaScript)

Open your terminal and run the following command to create a new Next.js project:

```bash
npx create-next-app@latest
```

During the project setup, select the following options:

- TypeScript: No
- ESLint: According to your preference
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Import alias: No

## 2. Install Necessary Packages

Install the required packages for the project:

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
```

Additionally, install icons:

**Lucide Icons (default):**

```bash
npm install lucide-react
```

**New York Style Icons:**

```bash
npm install @radix-ui/react-icons
```

## 3. Configure `jsconfig.json`

To facilitate navigation within the project, add a `jsconfig.json` file with the following content:

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		}
	}
}
```

## 4. Configure Tailwind CSS

In the `tailwind.config.js` file, set up the configuration as follows:

```javascript
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				// ...additional colors
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
```

Add the Tailwind CSS content in the `globals.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 222.2 47.4% 11.2%;
		--radius: 0.5rem;
	}

	.dark {
		--background: 224 71% 4%;
		--foreground: 213 31% 91%;
		--radius: 0.5rem;
	}

	* {
		@apply border-border;
	}

	body {
		@apply bg-background text-foreground;
		font-feature-settings: "rlig" 1, "calt" 1;
	}
}
```

## 5. Configure Utility for Merging Classes (Tailwind Merge)

Create a `lib/utils.js` file and add the following code:

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
```

## 6. Add Google Fonts

In the `layout.js` file, import the Inter font:

```javascript
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
```

## 7. Quick Installation of shadcn/ui

To add shadcn/ui components, run the following command in your terminal:

```bash
npx shadcn init
```

If you want to quickly add components:

```bash
npx shadcn add
```

## 8. Configuration According to Preferences

Customize the remaining configuration according to your preferences by adding or modifying your project.
