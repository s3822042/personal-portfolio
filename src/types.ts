export type SiteConfig = {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	title: string
	description?: string
	ogImage?: string | undefined
	articleDate?: string | undefined
}

export type MenuLink = {
	title: string
	path: string
}

export type OpenSourceProject = {
	url: string
	title: string
	description: string
	visibility: string
	stars: string
	forks: string
	lang: string
}

export type PlatForm = {
	url: string
	type: string
	username: string
}

export type Author = {
	name: string
	url: string
}

export enum PublishedInType {
	Journal = 'Journal',
	Conference = 'Conference',
	Workshop = 'Workshop',
	Preprint = 'arXiv',
	Thesis = 'Thesis'
}

export type PublicationFileSource = 'bilb' | 'arxiv' | 'pdf'

export type PublishedIn = {
	type: PublishedInType
	sourceTitle: string
	sourceUrl: string
}

export type Paper = {
	title: string
	image: string
	publishedYear: string
}

export type FileFormat = {
	type: PublicationFileSource
	url: string
}

export type Publication = {
	authors: Author[]
	fileFormat: FileFormat[]
	publishedIn: PublishedIn
	paper: Paper
	keywords: string[]
}

export type Job = {
	url: string
	logo: string
	name: string
	jobTitle: string
	startDate: string
	endDate?: string
	description: string
}

export interface Activity {
	date: string
	count: number
	level: 0 | 1 | 2 | 3 | 4
}

export type Year = number | 'last'

export interface ApiResponse {
	total: {
		[year: number]: number
		[year: string]: number // 'lastYear;
	}
	contributions: Array<Activity>
}

export interface ApiErrorResponse {
	error: string
}

type Color = string
type ColorScale = [Color, Color, Color, Color, Color]

export type ThemeInput =
	| {
			light: ColorScale | [from: Color, to: Color]
			dark?: ColorScale | [from: Color, to: Color]
	  }
	| {
			light?: ColorScale | [from: Color, to: Color]
			dark: ColorScale | [from: Color, to: Color]
	  }
