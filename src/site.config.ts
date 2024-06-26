import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

import {
	type SiteConfig,
	type MenuLink,
	type OpenSourceProject,
	type PlatForm,
	type Publication,
	type Job,
	PublishedInType
} from './types'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Vo Thanh Luan',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Personal Website',
	// Meta property used as the default description meta property
	description: 'Personal website of Vo Thanh Luan',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: MenuLink[] = [
	{
		title: 'Background',
		path: '/background/'
	},
	{
		title: 'Works',
		path: '/works/'
	},
	{
		title: 'Blog',
		path: 'https://blog.luanvothanh.com/'
	},
	{
		title: 'Uses',
		path: '/uses/'
	},
	{
		title: 'Tools',
		path: '/tools/'
	}
]

export const openSourceProject: OpenSourceProject[] = [
	{
		url: 'https://github.com/shadcn-ui/ui',
		title: 'shadcn-ui',
		description:
			'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
		visibility: 'Public',
		stars: '54.9k',
		forks: '2.9k',
		lang: 'Typescript'
	}
]

export const socialMedia = {
	github: 'https://github.com/s3822042',
	linkedin: 'https://linkedin.com/in/luanvothanh/',
	x: 'https://twitter.com/luanvothanh__',
	instagram: 'https://instagram.com/luanv_othanh/',
	youtube: '',
	steam: 'https://steamcommunity.com/profiles/76561198406125679/',
	reddit: 'https://reddit.com/user/MoreAd8352/',
	spotify: '',
	discord: 'https://discord.gg/YeADSh3CBV',
	facebook: 'https://fb.com/ciaraluanvothanh'
}

export const platforms: PlatForm[] = [
	{
		url: socialMedia.github,
		type: 'github',
		username: 's3822042'
	},
	{
		url: socialMedia.facebook,
		type: 'facebook',
		username: 'Luân Võ Thành'
	},
	{
		url: socialMedia.instagram,
		type: 'instagram',
		username: 'Luân Võ Thành'
	},
	{
		url: socialMedia.reddit,
		type: 'reddit',
		username: 'Luan Vo Thanh'
	},
	{
		url: socialMedia.x,
		type: 'x',
		username: '@luanvothanh__'
	},
	{
		url: socialMedia.discord,
		type: 'discord',
		username: 'Algorithm Challenge'
	}
]

export const publications: Publication[] = [
	{
		paper: {
			title: 'The Importance of Polynomials in Mathematics',
			image: 'https://via.placeholder.com/150',
			publishedYear: '2024'
		},
		authors: [{ name: 'John Doe', url: 'https://example.com/authors/john_doe' }],
		publishedIn: {
			type: PublishedInType.Journal,
			sourceTitle: 'Journal of Mathematics',
			sourceUrl: 'https://example.com/journal'
		},
		fileFormat: [
			{
				type: 'bilb',
				url: 'https://example.com/bilb'
			},
			{
				type: 'arxiv',
				url: 'https://example.com/arxiv'
			},
			{
				type: 'pdf',
				url: 'https://example.com/pdf'
			}
		],
		keywords: ['polynomials', 'mathematics', 'research']
	}
]

export const jobs: Job[] = [
	{
		url: 'https://mit.dk',
		logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712314541/personal-website/background/netcompany_fulmjy.webp',
		name: 'Netcompany',
		jobTitle: 'Software Engineer',
		startDate: '2023-12-01',
		endDate: '2023-11-12',
		description: `Spearheaded front-end development using Vue.js and Typescript in the mit.dk project, elevating user experience for 2.5M+ users.`
	},
	{
		url: 'https://oucru.org',
		logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712314634/personal-website/background/oucru_z7xebo.webp',
		name: 'Oxford University Clinical Research Unit',
		jobTitle: 'AI Researcher',
		startDate: '2023',
		endDate: '2023-10-09',
		description: `Contributed as an AI researcher for OCURU’s DICA, an intelligent chat portal aimed at assisting the Vietnamese public with queries related to medicine and health issues.`
	},
	{
		url: 'https://intel.com',
		logo: 'https://res.cloudinary.com/dwshjkwds/image/upload/v1712311123/personal-website/background/intel_bvsbka.webp',
		name: 'Intel Corporation',
		jobTitle: 'Product Development Engineer',
		startDate: '2021-10-12',
		endDate: '2022-03-28',
		description: `Successfully integrated the LOT with Intel’s testing infrastructure, enabling real-time monitoring and analysis, resulting in a 25% reduction in testing cycle times and streamlined CPU and chipset testing processes.`
	}
]

export const RESUME_PDF: string =
	'https://projects-bucket-luanvothanh.s3.ap-southeast-1.amazonaws.com/Vo_Thanh_Luan_resume.pdf'

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
