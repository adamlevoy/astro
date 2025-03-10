import type {
	MarkdownHeading,
	MarkdownMetadata,
	MarkdownRenderingResult,
	RehypePlugins,
	RemarkPlugins,
	ShikiConfig,
} from '@astrojs/markdown-remark';
import type * as babel from '@babel/core';
import type { AddressInfo } from 'net';
import type * as vite from 'vite';
import { z } from 'zod';
import type { SerializedSSRManifest } from '../core/app/types';
import type { PageBuildData } from '../core/build/types';
import type { AstroConfigSchema } from '../core/config';
import type { ViteConfigWithSSR } from '../core/create-vite';
import type { AstroComponentFactory, Metadata } from '../runtime/server';
export type {
	MarkdownHeading,
	MarkdownMetadata,
	MarkdownRenderingResult,
	RehypePlugins,
	RemarkPlugins,
	ShikiConfig,
} from '@astrojs/markdown-remark';
export type { SSRManifest } from '../core/app/types';

export interface AstroBuiltinProps {
	'client:load'?: boolean;
	'client:idle'?: boolean;
	'client:media'?: string;
	'client:visible'?: boolean;
	'client:only'?: boolean | string;
}

export interface AstroBuiltinAttributes {
	'class:list'?:
		| Record<string, boolean>
		| Record<any, any>
		| Iterable<string>
		| Iterable<any>
		| string;
	'set:html'?: any;
	'set:text'?: any;
	'is:raw'?: boolean;
}

export interface AstroDefineVarsAttribute {
	'define:vars'?: any;
}

export interface AstroStyleAttributes {
	/** @deprecated Use `is:global` instead */
	global?: boolean;
	'is:global'?: boolean;
	'is:inline'?: boolean;
}

export interface AstroScriptAttributes {
	/** @deprecated Hoist is now the default behavior */
	hoist?: boolean;
	'is:inline'?: boolean;
}

export interface AstroComponentMetadata {
	displayName: string;
	hydrate?: 'load' | 'idle' | 'visible' | 'media' | 'only';
	hydrateArgs?: any;
	componentUrl?: string;
	componentExport?: { value: string; namespace?: boolean };
}

/** The flags supported by the Astro CLI */
export interface CLIFlags {
	root?: string;
	site?: string;
	host?: string | boolean;
	port?: number;
	config?: string;
	drafts?: boolean;
}

export interface BuildConfig {
	client: URL;
	server: URL;
	serverEntry: string;
}

/**
 * Astro global available in all contexts in .astro files
 *
 * [Astro reference](https://docs.astro.build/reference/api-reference/#astro-global)
 */
export interface AstroGlobal extends AstroGlobalPartial {
	/**
	 * Canonical URL of the current page.
	 * @deprecated Use `Astro.url` instead.
	 *
	 * Example:
	 * ```astro
	 * ---
	 * const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	 * ---
	 * ```
	 */
	canonicalURL: URL;
	/** The address (usually IP address) of the user. Used with SSR only.
	 *
	 */
	clientAddress: string;
	/**
	 * A full URL object of the request URL.
	 * Equivalent to: `new URL(Astro.request.url)`
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#url)
	 */
	url: URL;
	/** Parameters passed to a dynamic page generated using [getStaticPaths](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
	 *
	 * Example usage:
	 * ```astro
	 * ---
	 * export async function getStaticPaths() {
	 *    return [
	 *     { params: { id: '1' } },
	 *   ];
	 * }
	 *
	 * const { id } = Astro.params;
	 * ---
	 * <h1>{id}</h1>
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#params)
	 */
	params: Params;
	/** List of props passed to this component
	 *
	 * A common way to get specific props is through [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), ex:
	 * ```typescript
	 * const { name } = Astro.props
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/core-concepts/astro-components/#component-props)
	 */
	props: Record<string, number | string | any>;
	/** Information about the current request. This is a standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object
	 *
	 * For example, to get a URL object of the current URL, you can use:
	 * ```typescript
	 * const url = new URL(Astro.request.url);
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astrorequest)
	 */
	request: Request;
	/** Information about the outgoing response. This is a standard [ResponseInit](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#init) object
	 *
	 * For example, to change the status code you can set a different status on this object:
	 * ```typescript
	 * Astro.response.status = 404;
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astroresponse)
	 */
	response: ResponseInit & {
		readonly headers: Headers;
	};
	/** Redirect to another page (**SSR Only**)
	 *
	 * Example usage:
	 * ```typescript
	 * if(!isLoggedIn) {
	 *   return Astro.redirect('/login');
	 * }
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/guides/server-side-rendering/#astroredirect)
	 */
	redirect(path: string): Response;
	/**
	 * The <Astro.self /> element allows a component to reference itself recursively.
	 *
	 * [Astro reference](https://docs.astro.build/en/guides/server-side-rendering/#astroself)
	 */
	self: AstroComponentFactory;
	/** Utility functions for modifying an Astro component’s slotted children
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astroslots)
	 */
	slots: Record<string, true | undefined> & {
		/**
		 * Check whether content for this slot name exists
		 *
		 * Example usage:
		 * ```typescript
		 *	if (Astro.slots.has('default')) {
		 *   // Do something...
		 *	}
		 * ```
		 *
		 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astroslots)
		 */
		has(slotName: string): boolean;
		/**
		 * Asychronously renders this slot and returns HTML
		 *
		 * Example usage:
		 * ```astro
		 * ---
		 * let html: string = '';
		 * if (Astro.slots.has('default')) {
		 *   html = await Astro.slots.render('default')
		 * }
		 * ---
		 * <Fragment set:html={html} />
		 * ```
		 *
		 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astroslots)
		 */
		render(slotName: string, args?: any[]): Promise<string>;
	};
}

export interface AstroGlobalPartial {
	/**
	 * @deprecated since version 0.24. See the {@link https://astro.build/deprecated/resolve upgrade guide} for more details.
	 */
	resolve(path: string): string;
	/** @deprecated since version 0.26. Use [Astro.glob()](https://docs.astro.build/en/reference/api-reference/#astroglob) instead. */
	fetchContent(globStr: string): Promise<any[]>;
	/**
	 * Fetch local files into your static site setup
	 *
	 * Example usage:
	 * ```typescript
	 * const posts = await Astro.glob('../pages/post/*.md');
	 * ```
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astroglob)
	 */
	glob(globStr: `${any}.astro`): Promise<AstroInstance[]>;
	glob<T extends Record<string, any>>(globStr: `${any}.md`): Promise<MarkdownInstance<T>[]>;
	glob<T extends Record<string, any>>(globStr: `${any}.mdx`): Promise<MDXInstance<T>[]>;
	glob<T extends Record<string, any>>(globStr: string): Promise<T[]>;
	/**
	 * Returns a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object built from the [site](https://docs.astro.build/en/reference/configuration-reference/#site) config option
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astrosite)
	 */
	site: URL | undefined;
	/**
	 * Returns a string with the current version of Astro.
	 *
	 * Useful for using `<meta name="generator" content={Astro.generator} />` or crediting Astro in a site footer.
	 *
	 * [HTML Specification for `generator`](https://html.spec.whatwg.org/multipage/semantics.html#meta-generator)
	 *
	 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#astrogenerator)
	 */
	generator: string;
}

type ServerConfig = {
	/**
	 * @name server.host
	 * @type {string | boolean}
	 * @default `false`
	 * @version 0.24.0
	 * @description
	 * Set which network IP addresses the dev server should listen on (i.e. 	non-localhost IPs).
	 * - `false` - do not expose on a network IP address
	 * - `true` - listen on all addresses, including LAN and public addresses
	 * - `[custom-address]` - expose on a network IP address at `[custom-address]`
	 */
	host?: string | boolean;

	/**
	 * @name server.port
	 * @type {number}
	 * @default `3000`
	 * @description
	 * Set which port the dev server should listen on.
	 *
	 * If the given port is already in use, Astro will automatically try the next available port.
	 */
	port?: number;
};

export interface ViteUserConfig extends vite.UserConfig {
	ssr?: vite.SSROptions;
}

/**
 * Astro User Config
 * Docs: https://docs.astro.build/reference/configuration-reference/
 */
export interface AstroUserConfig {
	/**
	 * @docs
	 * @kind heading
	 * @name Top-Level Options
	 */

	/**
	 * @docs
	 * @name root
	 * @cli --root
	 * @type {string}
	 * @default `"."` (current working directory)
	 * @summary Set the project root. The project root is the directory where your Astro project (and all `src`, `public` and `package.json` files) live.
	 * @description  You should only provide this option if you run the `astro` CLI commands in a directory other than the project root directory. Usually, this option is provided via the CLI instead of the [Astro config file](https://docs.astro.build/en/guides/configuring-astro/#supported-config-file-types), since Astro needs to know your project root before it can locate your config file.
	 *
	 * If you provide a relative path (ex: `--root: './my-project'`) Astro will resolve it against your current working directory.
	 *
	 * #### Examples
	 *
	 * ```js
	 * {
	 *   root: './my-project-directory'
	 * }
	 * ```
	 * ```bash
	 * $ astro build --root ./my-project-directory
	 * ```
	 */
	root?: string;

	/**
	 * @docs
	 * @name srcDir
	 * @type {string}
	 * @default `"./src"`
	 * @description Set the directory that Astro will read your site from.
	 *
	 * The value can be either an absolute file system path or a path relative to the project root.
	 *
	 * ```js
	 * {
	 *   srcDir: './www'
	 * }
	 * ```
	 */
	srcDir?: string;

	/**
	 * @docs
	 * @name publicDir
	 * @type {string}
	 * @default `"./public"`
	 * @description
	 * Set the directory for your static assets. Files in this directory are served at `/` during dev and copied to your build directory during build. These files are always served or copied as-is, without transform or bundling.
	 *
	 * The value can be either an absolute file system path or a path relative to the project root.
	 *
	 * ```js
	 * {
	 *   publicDir: './my-custom-publicDir-directory'
	 * }
	 * ```
	 */
	publicDir?: string;

	/**
	 * @docs
	 * @name outDir
	 * @type {string}
	 * @default `"./dist"`
	 * @description Set the directory that `astro build` writes your final build to.
	 *
	 * The value can be either an absolute file system path or a path relative to the project root.
	 *
	 * ```js
	 * {
	 *   outDir: './my-custom-build-directory'
	 * }
	 * ```
	 */
	outDir?: string;

	/**
	 * @docs
	 * @name site
	 * @type {string}
	 * @description
	 * Your final, deployed URL. Astro uses this full URL to generate your sitemap and canonical URLs in your final build. It is strongly recommended that you set this configuration to get the most out of Astro.
	 *
	 * ```js
	 * {
	 *   site: 'https://www.my-site.dev'
	 * }
	 * ```
	 */
	site?: string;

	/**
	 * @docs
	 * @name base
	 * @type {string}
	 * @description
	 * The base path you're deploying to. Astro will match this pathname during development so that your development experience matches your build environment as closely as possible. In the example below, `astro dev` will start your server at `/docs`.
	 *
	 * ```js
	 * {
	 *   base: '/docs'
	 * }
	 * ```
	 */
	base?: string;

	/**
	 * @docs
	 * @name trailingSlash
	 * @type {('always' | 'never' | 'ignore')}
	 * @default `'ignore'`
	 * @see buildOptions.pageUrlFormat
	 * @description
	 *
	 * Set the route matching behavior of the dev server. Choose from the following options:
	 *   - `'always'` - Only match URLs that include a trailing slash (ex: "/foo/")
	 *   - `'never'` - Never match URLs that include a trailing slash (ex: "/foo")
	 *   - `'ignore'` - Match URLs regardless of whether a trailing "/" exists
	 *
	 * Use this configuration option if your production host has strict handling of how trailing slashes work or do not work.
	 *
	 * You can also set this if you prefer to be more strict yourself, so that URLs with or without trailing slashes won't work during development.
	 *
	 * ```js
	 * {
	 *   // Example: Require a trailing slash during development
	 *   trailingSlash: 'always'
	 * }
	 * ```
	 */
	trailingSlash?: 'always' | 'never' | 'ignore';

	/**
	 * @docs
	 * @name adapter
	 * @typeraw {AstroIntegration}
	 * @see output
	 * @description
	 *
	 * Deploy to your favorite server, serverless, or edge host with build adapters. Import one of our first-party adapters for [Netlify](https://docs.astro.build/en/guides/deploy/netlify/#adapter-for-ssredge), [Vercel](https://docs.astro.build/en/guides/deploy/vercel/#adapter-for-ssr), and more to engage Astro SSR.
	 *
	 * [See our Server-side Rendering guide](https://docs.astro.build/en/guides/server-side-rendering/) for more on SSR, and [our deployment guides](https://docs.astro.build/en/guides/deploy/) for a complete list of hosts.
	 *
	 * ```js
	 * import netlify from '@astrojs/netlify/functions';
	 * {
	 *   // Example: Build for Netlify serverless deployment
	 * 	 adapter: netlify(),
	 * }
	 * ```
	 */
	adapter?: AstroIntegration;

	/**
	 * @docs
	 * @name output
	 * @type {('static' | 'server')}
	 * @default `'static'`
	 * @see adapter
	 * @description
	 *
	 * Specifies the output target for builds.
	 *
	 * - 'static' - Building a static site to be deploy to any static host.
	 * - 'server' - Building an app to be deployed to a host supporting SSR (server-side rendering).
	 *
	 * ```js
	 * import { defineConfig } from 'astro/config';
	 *
	 * export default defineConfig({
	 *   output: 'static'
	 * })
	 * ```
	 */
	output?: 'static' | 'server';

	/**
	 * @docs
	 * @kind heading
	 * @name Build Options
	 */
	build?: {
		/**
		 * @docs
		 * @name build.format
		 * @typeraw {('file' | 'directory')}
		 * @default `'directory'`
		 * @description
		 * Control the output file format of each page.
		 *   - If 'file', Astro will generate an HTML file (ex: "/foo.html") for each page.
		 *   - If 'directory', Astro will generate a directory with a nested `index.html` file (ex: "/foo/index.html") for each page.
		 *
		 * ```js
		 * {
		 *   build: {
		 *     // Example: Generate `page.html` instead of `page/index.html` during build.
		 *     format: 'file'
		 *   }
		 * }
		 * ```
		 */
		format?: 'file' | 'directory';
	};

	/**
	 * @docs
	 * @kind heading
	 * @name Server Options
	 * @description
	 *
	 * Customize the Astro dev server, used by both `astro dev` and `astro preview`.
	 *
	 * ```js
	 * {
	 *   server: { port: 1234, host: true}
	 * }
	 * ```
	 *
	 * To set different configuration based on the command run ("dev", "preview") a function can also be passed to this configuration option.
	 *
	 * ```js
	 * {
	 *   // Example: Use the function syntax to customize based on command
	 *   server: (command) => ({ port: command === 'dev' ? 3000 : 4000 })
	 * }
	 * ```
	 */

	/**
	 * @docs
	 * @name server.host
	 * @type {string | boolean}
	 * @default `false`
	 * @version 0.24.0
	 * @description
	 * Set which network IP addresses the server should listen on (i.e. non-localhost IPs).
	 * - `false` - do not expose on a network IP address
	 * - `true` - listen on all addresses, including LAN and public addresses
	 * - `[custom-address]` - expose on a network IP address at `[custom-address]` (ex: `192.168.0.1`)
	 */

	/**
	 * @docs
	 * @name server.port
	 * @type {number}
	 * @default `3000`
	 * @description
	 * Set which port the server should listen on.
	 *
	 * If the given port is already in use, Astro will automatically try the next available port.
	 *
	 * ```js
	 * {
	 *   server: { port: 8080 }
	 * }
	 * ```
	 */

	server?: ServerConfig | ((options: { command: 'dev' | 'preview' }) => ServerConfig);

	/**
	 * @docs
	 * @kind heading
	 * @name Markdown Options
	 */
	markdown?: {
		/**
		 * @docs
		 * @name markdown.drafts
		 * @type {boolean}
		 * @default `false`
		 * @description
		 * Control whether Markdown draft pages should be included in the build.
		 *
		 * A Markdown page is considered a draft if it includes `draft: true` in its frontmatter. Draft pages are always included & visible during development (`astro dev`) but by default they will not be included in your final build.
		 *
		 * ```js
		 * {
		 *   markdown: {
		 *     // Example: Include all drafts in your final build
		 *     drafts: true,
		 *   }
		 * }
		 * ```
		 */
		drafts?: boolean;

		/**
		 * @docs
		 * @name markdown.shikiConfig
		 * @typeraw {Partial<ShikiConfig>}
		 * @description
		 * Shiki configuration options. See [the Markdown configuration docs](https://docs.astro.build/en/guides/markdown-content/#shiki-configuration) for usage.
		 */
		shikiConfig?: Partial<ShikiConfig>;

		/**
		 * @docs
		 * @name markdown.syntaxHighlight
		 * @type {'shiki' | 'prism' | false}
		 * @default `shiki`
		 * @description
		 * Which syntax highlighter to use, if any.
		 * - `shiki` - use the [Shiki](https://github.com/shikijs/shiki) highlighter
		 * - `prism` - use the [Prism](https://prismjs.com/) highlighter
		 * - `false` - do not apply syntax highlighting.
		 *
		 * ```js
		 * {
		 *   markdown: {
		 *     // Example: Switch to use prism for syntax highlighting in Markdown
		 *     syntaxHighlight: 'prism',
		 *   }
		 * }
		 * ```
		 */
		syntaxHighlight?: 'shiki' | 'prism' | false;

		/**
		 * @docs
		 * @name markdown.remarkPlugins
		 * @type {RemarkPlugins}
		 * @description
		 * Pass a custom [Remark](https://github.com/remarkjs/remark) plugin to customize how your Markdown is built.
		 *
		 * **Note:** Enabling custom `remarkPlugins` or `rehypePlugins` removes Astro's built-in support for [GitHub-flavored Markdown](https://github.github.com/gfm/) support and [Smartypants](https://github.com/silvenon/remark-smartypants). You must explicitly add these plugins to your `astro.config.mjs` file, if desired.
		 *
		 * ```js
		 * {
		 *   markdown: {
		 *     // Example: The default set of remark plugins used by Astro
		 *     remarkPlugins: ['remark-gfm', 'remark-smartypants'],
		 *   },
		 * };
		 * ```
		 */
		remarkPlugins?: RemarkPlugins;
		/**
		 * @docs
		 * @name markdown.rehypePlugins
		 * @type {RehypePlugins}
		 * @description
		 * Pass a custom [Rehype](https://github.com/remarkjs/remark-rehype) plugin to customize how your Markdown is built.
		 *
		 * **Note:** Enabling custom `remarkPlugins` or `rehypePlugins` removes Astro's built-in support for [GitHub-flavored Markdown](https://github.github.com/gfm/) support and [Smartypants](https://github.com/silvenon/remark-smartypants). You must explicitly add these plugins to your `astro.config.mjs` file, if desired.
		 *
		 * ```js
		 * {
		 *   markdown: {
		 *     // Example: The default set of rehype plugins used by Astro
		 *     rehypePlugins: [],
		 *   },
		 * };
		 * ```
		 */
		rehypePlugins?: RehypePlugins;
	};

	/**
	 * @docs
	 * @kind heading
	 * @name Integrations
	 * @description
	 *
	 * Extend Astro with custom integrations. Integrations are your one-stop-shop for adding framework support (like Solid.js), new features (like sitemaps), and new libraries (like Partytown and Turbolinks).
	 *
	 * Read our [Integrations Guide](/en/guides/integrations-guide/) for help getting started with Astro Integrations.
	 *
	 * ```js
	 * import react from '@astrojs/react';
	 * import tailwind from '@astrojs/tailwind';
	 * {
	 *   // Example: Add React + Tailwind support to Astro
	 *   integrations: [react(), tailwind()]
	 * }
	 * ```
	 */
	integrations?: Array<
		AstroIntegration | (AstroIntegration | false | undefined | null)[] | false | undefined | null
	>;

	/**
	 * @docs
	 * @kind heading
	 * @name Vite
	 * @description
	 *
	 * Pass additional configuration options to Vite. Useful when Astro doesn't support some advanced configuration that you may need.
	 *
	 * View the full `vite` configuration object documentation on [vitejs.dev](https://vitejs.dev/config/).
	 *
	 * #### Examples
	 *
	 * ```js
	 * {
	 *   vite: {
	 *     ssr: {
	 *       // Example: Force a broken package to skip SSR processing, if needed
	 *       external: ['broken-npm-package'],
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * ```js
	 * {
	 *   vite: {
	 *     // Example: Add custom vite plugins directly to your Astro project
	 *     plugins: [myPlugin()],
	 *   }
	 * }
	 * ```
	 */
	vite?: ViteUserConfig;

	/**
	 * @docs
	 * @kind heading
	 * @name Legacy Flags
	 * @description
	 * To help some users migrate between versions of Astro, we occasionally introduce `legacy` flags.
	 * These flags allow you to opt in to some deprecated or otherwise outdated behavior of Astro
	 * in the latest version, so that you can continue to upgrade and take advantage of new Astro releases.
	 */
	legacy?: {
		/**
		 * @docs
		 * @name legacy.astroFlavoredMarkdown
		 * @type {boolean}
		 * @default `false`
		 * @version 1.0.0-rc.1
		 * @description
		 * Enable Astro's pre-v1.0 support for components and JSX expressions in `.md` Markdown files.
		 * In Astro `1.0.0-rc`, this original behavior was removed as the default, in favor of our new [MDX integration](/en/guides/integrations-guide/mdx/).
		 *
		 * To enable this behavior, set `legacy.astroFlavoredMarkdown` to `true` in your [`astro.config.mjs` configuration file](/en/guides/configuring-astro/#the-astro-config-file).
		 *
		 * ```js
		 * {
		 *   legacy: {
		 *     // Example: Add support for legacy Markdown features
		 *     astroFlavoredMarkdown: true,
		 *   },
		 * }
		 * ```
		 */
		astroFlavoredMarkdown?: boolean;
	};

	// Legacy options to be removed

	/** @deprecated - Use "integrations" instead. Run Astro to learn more about migrating. */
	renderers?: never;
	/** @deprecated `projectRoot` has been renamed to `root` */
	projectRoot?: never;
	/** @deprecated `src` has been renamed to `srcDir` */
	src?: never;
	/** @deprecated `pages` has been removed. It is no longer configurable. */
	pages?: never;
	/** @deprecated `public` has been renamed to `publicDir` */
	public?: never;
	/** @deprecated `dist` has been renamed to `outDir` */
	dist?: never;
	/** @deprecated `styleOptions` has been renamed to `style` */
	styleOptions?: never;
	/** @deprecated `markdownOptions` has been renamed to `markdown` */
	markdownOptions?: never;
	/** @deprecated `buildOptions` has been renamed to `build` */
	buildOptions?: never;
	/** @deprecated `devOptions` has been renamed to `server` */
	devOptions?: never;
}

// NOTE(fks): We choose to keep our hand-generated AstroUserConfig interface so that
// we can add JSDoc-style documentation and link to the definition file in our repo.
// However, Zod comes with the ability to auto-generate AstroConfig from the schema
// above. If we ever get to the point where we no longer need the dedicated
// @types/config.ts file, consider replacing it with the following lines:
//
// export interface AstroUserConfig extends z.input<typeof AstroConfigSchema> {
// }

/**
 * IDs for different stages of JS script injection:
 * - "before-hydration": Imported client-side, before the hydration script runs. Processed & resolved by Vite.
 * - "head-inline": Injected into a script tag in the `<head>` of every page. Not processed or resolved by Vite.
 * - "page": Injected into the JavaScript bundle of every page. Processed & resolved by Vite.
 * - "page-ssr": Injected into the frontmatter of every Astro page. Processed & resolved by Vite.
 */
export type InjectedScriptStage = 'before-hydration' | 'head-inline' | 'page' | 'page-ssr';

/**
 * Resolved Astro Config
 * Config with user settings along with all defaults filled in.
 */

export interface InjectedRoute {
	pattern: string;
	entryPoint: string;
}
export interface AstroConfig extends z.output<typeof AstroConfigSchema> {
	// Public:
	// This is a more detailed type than zod validation gives us.
	// TypeScript still confirms zod validation matches this type.
	integrations: AstroIntegration[];

	// Private:
	// We have a need to pass context based on configured state,
	// that is different from the user-exposed configuration.
	// TODO: Create an AstroConfig class to manage this, long-term.
	_ctx: {
		pageExtensions: string[];
		injectedRoutes: InjectedRoute[];
		adapter: AstroAdapter | undefined;
		renderers: AstroRenderer[];
		scripts: { stage: InjectedScriptStage; content: string }[];
	};
}

export type AsyncRendererComponentFn<U> = (
	Component: any,
	props: any,
	slots: Record<string, string>,
	metadata?: AstroComponentMetadata
) => Promise<U>;

/** Generic interface for a component (Astro, Svelte, React, etc.) */
export interface ComponentInstance {
	$$metadata: Metadata;
	default: AstroComponentFactory;
	css?: string[];
	getStaticPaths?: (options: GetStaticPathsOptions) => GetStaticPathsResult;
}

export interface AstroInstance {
	file: string;
	url: string | undefined;
	default: AstroComponentFactory;
}

export interface MarkdownInstance<T extends Record<string, any>> {
	frontmatter: T;
	file: string;
	url: string | undefined;
	Content: AstroComponentFactory;
	/** raw Markdown file content, excluding frontmatter */
	rawContent(): string;
	/** Markdown file compiled to valid Astro syntax. Queryable with most HTML parsing libraries */
	compiledContent(): Promise<string>;
	getHeadings(): Promise<MarkdownHeading[]>;
	/** @deprecated Renamed to `getHeadings()` */
	getHeaders(): void;
	default: () => Promise<{
		metadata: MarkdownMetadata;
		frontmatter: MarkdownContent<T>;
		$$metadata: Metadata;
		default: AstroComponentFactory;
	}>;
}

export interface MDXInstance<T>
	extends Omit<MarkdownInstance<T>, 'rawContent' | 'compiledContent' | 'Content' | 'default'> {
	/** MDX does not support rawContent! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins */
	rawContent: never;
	/** MDX does not support compiledContent! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins */
	compiledContent: never;
	default: AstroComponentFactory;
	Content: AstroComponentFactory;
}

export interface MarkdownLayoutProps<T extends Record<string, any>> {
	frontmatter: {
		file: MarkdownInstance<T>['file'];
		url: MarkdownInstance<T>['url'];
	} & T;
	headings: MarkdownHeading[];
	rawContent: MarkdownInstance<T>['rawContent'];
	compiledContent: MarkdownInstance<T>['compiledContent'];
}

export type MDXLayoutProps<T> = Omit<MarkdownLayoutProps<T>, 'rawContent' | 'compiledContent'>;

export type GetHydrateCallback = () => Promise<() => void | Promise<void>>;

/**
 * getStaticPaths() options
 *
 * [Astro Reference](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
 */ export interface GetStaticPathsOptions {
	paginate: PaginateFunction;
	/**
	 * The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead.
	 * @see https://docs.astro.build/en/guides/rss/
	 */
	rss(): never;
}

export type GetStaticPathsItem = { params: Params; props?: Props };
export type GetStaticPathsResult = GetStaticPathsItem[];
export type GetStaticPathsResultKeyed = GetStaticPathsResult & {
	keyed: Map<string, GetStaticPathsItem>;
};

/**
 * Return an array of pages to generate for a [dynamic route](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes). (**SSG Only**)
 *
 * [Astro Reference](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
 */
export type GetStaticPaths = (
	options: GetStaticPathsOptions
) =>
	| Promise<GetStaticPathsResult | GetStaticPathsResult[]>
	| GetStaticPathsResult
	| GetStaticPathsResult[];

export interface HydrateOptions {
	name: string;
	value?: string;
}

export type JSXTransformConfig = Pick<
	babel.TransformOptions,
	'presets' | 'plugins' | 'inputSourceMap'
>;

export type JSXTransformFn = (options: {
	mode: string;
	ssr: boolean;
}) => Promise<JSXTransformConfig>;

export interface ManifestData {
	routes: RouteData[];
}

export interface MarkdownParserResponse extends MarkdownRenderingResult {
	frontmatter: {
		[key: string]: any;
	};
}

/**
 * The `content` prop given to a Layout
 *
 * [Astro reference](https://docs.astro.build/en/guides/markdown-content/#markdown-layouts)
 */
export type MarkdownContent<T extends Record<string, any> = Record<string, any>> = T & {
	astro: MarkdownMetadata;
	url: string | undefined;
	file: string;
};

/**
 * paginate() Options
 *
 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#paginate)
 */
export interface PaginateOptions {
	/** the number of items per-page (default: `10`) */
	pageSize?: number;
	/** key: value object of page params (ex: `{ tag: 'javascript' }`) */
	params?: Params;
	/** object of props to forward to `page` result */
	props?: Props;
}

/**
 * Represents a single page of data in a paginated collection
 *
 * [Astro reference](https://docs.astro.build/en/reference/api-reference/#the-pagination-page-prop)
 */
export interface Page<T = any> {
	/** result */
	data: T[];
	/** metadata */
	/** the count of the first item on the page, starting from 0 */
	start: number;
	/** the count of the last item on the page, starting from 0 */
	end: number;
	/** total number of results */
	total: number;
	/** the current page number, starting from 1 */
	currentPage: number;
	/** number of items per page (default: 25) */
	size: number;
	/** number of last page */
	lastPage: number;
	url: {
		/** url of the current page */
		current: string;
		/** url of the previous page (if there is one) */
		prev: string | undefined;
		/** url of the next page (if there is one) */
		next: string | undefined;
	};
}

export type PaginateFunction = (data: any[], args?: PaginateOptions) => GetStaticPathsResult;

export type Params = Record<string, string | number | undefined>;

export type Props = Record<string, unknown>;

export interface AstroAdapter {
	name: string;
	serverEntrypoint?: string;
	exports?: string[];
	args?: any;
}

type Body = string;

export interface APIContext {
	params: Params;
	request: Request;
}

export interface EndpointOutput {
	body: Body;
}

export type APIRoute = (
	context: APIContext
) => EndpointOutput | Response | Promise<EndpointOutput | Response>;

export interface EndpointHandler {
	[method: string]: APIRoute | ((params: Params, request: Request) => EndpointOutput | Response);
}

export interface AstroRenderer {
	/** Name of the renderer. */
	name: string;
	/** Import entrypoint for the client/browser renderer. */
	clientEntrypoint?: string;
	/** Import entrypoint for the server/build/ssr renderer. */
	serverEntrypoint: string;
	/** JSX identifier (e.g. 'react' or 'solid-js') */
	jsxImportSource?: string;
	/** Babel transform options */
	jsxTransformOptions?: JSXTransformFn;
}

export interface SSRLoadedRenderer extends AstroRenderer {
	ssr: {
		check: AsyncRendererComponentFn<boolean>;
		renderToStaticMarkup: AsyncRendererComponentFn<{
			html: string;
			attrs?: Record<string, string>;
		}>;
	};
}

export type HookParameters<
	Hook extends keyof AstroIntegration['hooks'],
	Fn = AstroIntegration['hooks'][Hook]
> = Fn extends (...args: any) => any ? Parameters<Fn>[0] : never;

export interface AstroIntegration {
	/** The name of the integration. */
	name: string;
	/** The different hooks available to extend. */
	hooks: {
		'astro:config:setup'?: (options: {
			config: AstroConfig;
			command: 'dev' | 'build';
			updateConfig: (newConfig: Record<string, any>) => void;
			addRenderer: (renderer: AstroRenderer) => void;
			injectScript: (stage: InjectedScriptStage, content: string) => void;
			injectRoute: (injectRoute: InjectedRoute) => void;
			// TODO: Add support for `injectElement()` for full HTML element injection, not just scripts.
			// This may require some refactoring of `scripts`, `styles`, and `links` into something
			// more generalized. Consider the SSR use-case as well.
			// injectElement: (stage: vite.HtmlTagDescriptor, element: string) => void;
		}) => void | Promise<void>;
		'astro:config:done'?: (options: {
			config: AstroConfig;
			setAdapter: (adapter: AstroAdapter) => void;
		}) => void | Promise<void>;
		'astro:server:setup'?: (options: { server: vite.ViteDevServer }) => void | Promise<void>;
		'astro:server:start'?: (options: { address: AddressInfo }) => void | Promise<void>;
		'astro:server:done'?: () => void | Promise<void>;
		'astro:build:ssr'?: (options: { manifest: SerializedSSRManifest }) => void | Promise<void>;
		'astro:build:start'?: (options: { buildConfig: BuildConfig }) => void | Promise<void>;
		'astro:build:setup'?: (options: {
			vite: ViteConfigWithSSR;
			pages: Map<string, PageBuildData>;
			target: 'client' | 'server';
			updateConfig: (newConfig: ViteConfigWithSSR) => void;
		}) => void | Promise<void>;
		'astro:build:done'?: (options: {
			pages: { pathname: string }[];
			dir: URL;
			routes: RouteData[];
		}) => void | Promise<void>;
	};
}

export type RouteType = 'page' | 'endpoint';

export interface RoutePart {
	content: string;
	dynamic: boolean;
	spread: boolean;
}

export interface RouteData {
	route: string;
	component: string;
	generate: (data?: any) => string;
	params: string[];
	pathname?: string;
	// expose the real path name on SSG
	distURL?: URL;
	pattern: RegExp;
	segments: RoutePart[][];
	type: RouteType;
}

export type SerializedRouteData = Omit<RouteData, 'generate' | 'pattern'> & {
	generate: undefined;
	pattern: string;
	_meta: {
		trailingSlash: AstroConfig['trailingSlash'];
	};
};

export type RuntimeMode = 'development' | 'production';

export type SSRError = Error & vite.ErrorPayload['err'];

export interface SSRElement {
	props: Record<string, any>;
	children: string;
}

export interface SSRMetadata {
	renderers: SSRLoadedRenderer[];
	pathname: string;
	hasHydrationScript: boolean;
	hasDirectives: Set<string>;
}

export interface SSRResult {
	styles: Set<SSRElement>;
	scripts: Set<SSRElement>;
	links: Set<SSRElement>;
	createAstro(
		Astro: AstroGlobalPartial,
		props: Record<string, any>,
		slots: Record<string, any> | null
	): AstroGlobal;
	resolve: (s: string) => Promise<string>;
	response: ResponseInit;
	_metadata: SSRMetadata;
}

export type MarkdownAstroData = { frontmatter: object };
