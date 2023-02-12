export type NewsResponse = News[];

export type News = {
    id: number
    date: string
    slug: string
    type: string
    link: string
    title: Title
    excerpt: Excerpt
    author: number
    featured_media: number
    jetpack_featured_media_url: string
    parsely: Parsely
    shortlink: string
    parselyMeta: ParselyMeta
    rapidData: RapidData
    premiumContent: boolean
    premiumCutoffPercent: number
    featured: boolean
    subtitle: string
    editorialContentProvider: string
    tc_cb_mapping: TcCbMapping[]
    associatedEvent: any
    event: any
    authors: number[]
    hide_featured_image: boolean
    canonical_url: string
    primary_category: PrimaryCategory
    _links: Links
}

export type Title = {
    rendered: string
}

export type Excerpt = {
    rendered: string
    protected: boolean
}

export type Parsely = {
    version: string
    meta: any[]
    rendered: string
}

export type ParselyMeta = {
    "parsely-title": string
    "parsely-link": string
    "parsely-type": string
    "parsely-pub-date": string
    "parsely-image-url": string
    "parsely-author": string[]
    "parsely-section": string
    "parsely-tags": string
    "parsely-metadata": string
}

export type RapidData = {
    pt: string
    pct: string
}

export type TcCbMapping = {
    slug: string
    cb_name: string
    cb_slug: string
    cb_link: string
}

export type PrimaryCategory = {
    term_id: number
    name: string
    slug: string
    term_group: number
    term_taxonomy_id: number
    taxonomy: string
    description: string
    parent: number
    count: number
    filter: string
}

export type Links = {
    self: Self[]
    collection: Collection[]
    about: About[]
    replies: Reply[]
    "version-history": VersionHistory[]
    "predecessor-version": PredecessorVersion[]
    authors: Author[]
    "https://techcrunch.com/edit": HttpsTechcrunchComEdit[]
    author: Author2[]
    "wp:featuredmedia": Featuredmedum[]
    "wp:attachment": WpAttachment[]
    "wp:term": WpTerm[]
    curies: Cury[]
}

export type Self = {
    href: string
}

export type Collection = {
    href: string
}

export type About = {
    href: string
}

export type Reply = {
    embeddable: boolean
    href: string
}

export type VersionHistory = {
    count: number
    href: string
}

export type PredecessorVersion = {
    id: number
    href: string
}

export type Author = {
    embeddable: boolean
    href: string
}

export type HttpsTechcrunchComEdit = {
    href: string
}

export type Author2 = {
    embeddable: boolean
    href: string
}

export type Featuredmedum = {
    embeddable: boolean
    href: string
}

export type WpAttachment = {
    href: string
    embeddable?: boolean
}

export type WpTerm = {
    taxonomy: string
    embeddable: boolean
    href: string
}

export type Cury = {
    name: string
    href: string
    templated: boolean
}