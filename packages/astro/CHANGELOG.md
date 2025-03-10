# astro

## 1.0.8

### Patch Changes

- [#4330](https://github.com/withastro/astro/pull/4330) [`baa2ddd01`](https://github.com/withastro/astro/commit/baa2ddd0103c269c862258520020395135e823ec) Thanks [@bluwy](https://github.com/bluwy)! - Warn hydration directive for Astro components in JSX

* [#4427](https://github.com/withastro/astro/pull/4427) [`b2e976f39`](https://github.com/withastro/astro/commit/b2e976f39c383eda8de58a2c86e94cbc9b3d678c) Thanks [@cameronmcefee](https://github.com/cameronmcefee)! - Fix config types to allow falsy values in integrations list, to match docs

- [#4385](https://github.com/withastro/astro/pull/4385) [`8164fa6f1`](https://github.com/withastro/astro/commit/8164fa6f1a01152f00542be33baebecd8ac60818) Thanks [@krolebord](https://github.com/krolebord)! - Fix warning when using hooks inside the react components not exported as a function declaration

* [#4445](https://github.com/withastro/astro/pull/4445) [`df4e99928`](https://github.com/withastro/astro/commit/df4e999284ae912b2a3f8a56573598a6ff21aa2a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add "waiting for X integration" log for long-running integration hooks

- [#4430](https://github.com/withastro/astro/pull/4430) [`dc42f2c00`](https://github.com/withastro/astro/commit/dc42f2c00fdc0c2f310ba43aa7f6ab15c525f18c) Thanks [@bholmesdev](https://github.com/bholmesdev)! - astro add - Fix third-party npm orgs, i.e. `@example/integration`

* [#4441](https://github.com/withastro/astro/pull/4441) [`ca0c7e8b8`](https://github.com/withastro/astro/commit/ca0c7e8b836b1be2db6a77698c9535a34ada8fe6) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Allow arbitrary strings on the target attribute

- [#4446](https://github.com/withastro/astro/pull/4446) [`27ac6a03a`](https://github.com/withastro/astro/commit/27ac6a03a1b58da836190922304de5645854b49b) Thanks [@matthewp](https://github.com/matthewp)! - Deterministic CSS ordering

  This makes our CSS link order deterministic. It uses CSS depth; that is how deeply a module import the CSS comes from, in order to determine which CSS is page-level vs. component-level CSS.

  This is intended to match dev ordering where, because we do not bundle, the page-level CSS always comes after component-level.

* [#4426](https://github.com/withastro/astro/pull/4426) [`f40065f51`](https://github.com/withastro/astro/commit/f40065f510b4fef40d3d3e069e8dc2d4d9a4edb2) Thanks [@matthewp](https://github.com/matthewp)! - Ensure index pages are generated on paginated results

## 1.0.7

### Patch Changes

- [#4415](https://github.com/withastro/astro/pull/4415) [`39088e11d`](https://github.com/withastro/astro/commit/39088e11db2ab69b370616d7cb369952cd9fd266) Thanks [@bluwy](https://github.com/bluwy)! - Bump Vite to 3.0.9

* [#4362](https://github.com/withastro/astro/pull/4362) [`aa5118e85`](https://github.com/withastro/astro/commit/aa5118e8543bb9ed240681acdabfcc09bdbb5438) Thanks [@joseph-lozano](https://github.com/joseph-lozano)! - Allow user config to set `markdown.drafts` option

- [#4344](https://github.com/withastro/astro/pull/4344) [`500332a42`](https://github.com/withastro/astro/commit/500332a426c8fa43e6534f0e41de5fc902f98ccd) Thanks [@bluwy](https://github.com/bluwy)! - Refactor static build config merge

* [#4364](https://github.com/withastro/astro/pull/4364) [`77b068086`](https://github.com/withastro/astro/commit/77b068086d923e99eb693d1c57b7d6cd906a1e8a) Thanks [@bluwy](https://github.com/bluwy)! - Preserve all error stack lines

- [#4405](https://github.com/withastro/astro/pull/4405) [`a70f69a06`](https://github.com/withastro/astro/commit/a70f69a06c069781c56393289f82efc1251fc37b) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Refactor JSX build plugin, improve performance

* [#4356](https://github.com/withastro/astro/pull/4356) [`beed20be4`](https://github.com/withastro/astro/commit/beed20be4a4dd01a52cff49887420b6a8b92b1a9) Thanks [@delucis](https://github.com/delucis)! - Provide correct MIME type for dynamic endpoint routes in dev

- [#4375](https://github.com/withastro/astro/pull/4375) [`5e82f6c24`](https://github.com/withastro/astro/commit/5e82f6c245be332764fcd5a90be491a430655c87) Thanks [@matthewp](https://github.com/matthewp)! - Fixes race condition between directives being defined

## 1.0.6

### Patch Changes

- [#4324](https://github.com/withastro/astro/pull/4324) [`45fdbc465`](https://github.com/withastro/astro/commit/45fdbc4650610bd8363a05c07f3863cc12391b28) Thanks [@BurntCaramel](https://github.com/BurntCaramel)! - Use TextEncoder instead of Buffer.byteLength() for Deno compatibility

* [#4334](https://github.com/withastro/astro/pull/4334) [`b55f76c1c`](https://github.com/withastro/astro/commit/b55f76c1cafb7918f7087c6df03dd1d59eeaa065) Thanks [@matthewp](https://github.com/matthewp)! - Fix double injecting of head content in md pages

- [#4329](https://github.com/withastro/astro/pull/4329) [`0274b8d47`](https://github.com/withastro/astro/commit/0274b8d47be6ad2f5a503f70e2efdd52e43dc9c4) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates routing logic to allow multiple routes to match the same URL in SSR

* [#4347](https://github.com/withastro/astro/pull/4347) [`166b3b8a5`](https://github.com/withastro/astro/commit/166b3b8a544e6ba8f6a32960cf9c73bbb88c8b34) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix MDXLayoutProps type signature for linting

## 1.0.5

### Patch Changes

- [#4302](https://github.com/withastro/astro/pull/4302) [`1d3a0a16f`](https://github.com/withastro/astro/commit/1d3a0a16f33aa88c2b60088d6a497e4beaadb2dc) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Revert "Ensure hydration scripts inside of slots render ASAP (#4288)" to fix Svelte integration bug

* [#4284](https://github.com/withastro/astro/pull/4284) [`73f367c77`](https://github.com/withastro/astro/commit/73f367c77b8311707b1c142e03dd53952f14d934) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Prevent preview if 'output: server' is configured

## 1.0.4

### Patch Changes

- [#4268](https://github.com/withastro/astro/pull/4268) [`f7afdb889`](https://github.com/withastro/astro/commit/f7afdb889fe4e97177958c8ec92f80c5f6e5cb51) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Align MD with MDX on layout props and "glob" import results:
  - Add `Content` to MDX
  - Add `file` and `url` to MDX frontmatter (layout import only)
  - Update glob types to reflect differences (lack of `rawContent` and `compiledContent`)

* [#4265](https://github.com/withastro/astro/pull/4265) [`8f845ca95`](https://github.com/withastro/astro/commit/8f845ca9507965e3898b3c7b70952c849bef310e) Thanks [@matthewp](https://github.com/matthewp)! - Prevents automatic trailingSlash appending on getStaticPaths produced pages

- [#4288](https://github.com/withastro/astro/pull/4288) [`c21810068`](https://github.com/withastro/astro/commit/c218100684c90c2b5c490e73b0687ad59d0c58df) Thanks [@matthewp](https://github.com/matthewp)! - Ensure hydration scripts inside of slots render ASAP

* [#4282](https://github.com/withastro/astro/pull/4282) [`c0992e1fe`](https://github.com/withastro/astro/commit/c0992e1fefc105577e99ac94338d349dbabf38d8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix bug where Astro's server runtime would end up in the browser

- [#4272](https://github.com/withastro/astro/pull/4272) [`24d2f7a6e`](https://github.com/withastro/astro/commit/24d2f7a6e6700c10c863f826f37bb653d70e3a83) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly handle hydration for namespaced components

* [#4289](https://github.com/withastro/astro/pull/4289) [`3ca905174`](https://github.com/withastro/astro/commit/3ca905174967d6339ba90aa5bc1756fbe2fafdb0) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Set `output: 'server'` when adding adapter

## 1.0.3

### Patch Changes

- [#4239](https://github.com/withastro/astro/pull/4239) [`a9baa45af`](https://github.com/withastro/astro/commit/a9baa45af35abdd3e1930fb49e8b6fb0a4340e2a) Thanks [@bluwy](https://github.com/bluwy)! - Fix Astro client scripts sourcemap 404

* [#4279](https://github.com/withastro/astro/pull/4279) [`42fd6936c`](https://github.com/withastro/astro/commit/42fd6936cdb7106aea3770bed5313e558fc8b6dc) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Handle "not found" imports without throwing an "Invalid URL" error

- [#4273](https://github.com/withastro/astro/pull/4273) [`0022f46b5`](https://github.com/withastro/astro/commit/0022f46b57946f4f71e7f9f6e265081ee4ae1565) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix build output adding `/index.html` at the end of endpoints route

* [#4270](https://github.com/withastro/astro/pull/4270) [`7127b1bb3`](https://github.com/withastro/astro/commit/7127b1bb35ca4e8f419e18683e380a4917eca4bb) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Make third-party integration names nicer when using `astro add`

## 1.0.2

### Patch Changes

- [#4247](https://github.com/withastro/astro/pull/4247) [`714a8399e`](https://github.com/withastro/astro/commit/714a8399e20f334d2ba341c98d8ef5d590af9c39) Thanks [@matthewp](https://github.com/matthewp)! - Return 404 status code for 404.astro in SSR

* [#4240](https://github.com/withastro/astro/pull/4240) [`561a34d91`](https://github.com/withastro/astro/commit/561a34d91209c9d4959f74beaa17008edb27ff5d) Thanks [@matthewp](https://github.com/matthewp)! - Properly invalidate Astro modules when a child script updates in HMR

- [#4234](https://github.com/withastro/astro/pull/4234) [`c38e7f189`](https://github.com/withastro/astro/commit/c38e7f1890ba5bc97ddacee91ea196bcfc7652e6) Thanks [@bluwy](https://github.com/bluwy)! - Remove dev server during build

* [#4213](https://github.com/withastro/astro/pull/4213) [`f8e385339`](https://github.com/withastro/astro/commit/f8e3853394c2f2f48fac4b5eb2284e1960e59a13) Thanks [@bluwy](https://github.com/bluwy)! - Bump Vite to 3.0.5

- [#4225](https://github.com/withastro/astro/pull/4225) [`e918b3883`](https://github.com/withastro/astro/commit/e918b3883e156a0de2148517b619a2cf451917d2) Thanks [@mayank99](https://github.com/mayank99)! - `astro add` now supports `-y`

## 1.0.1

### Patch Changes

- [`3a7f2385e`](https://github.com/withastro/astro/commit/3a7f2385eadadb21794a06c86b7fa20b83b2f8f8) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add rawContent and compiledContent to MD layout props

## 1.0.0

> Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

> **Note**
> If you need help migrating an existing Astro project to the new Astro v1.0, check out our updated [Migration Guide](https://docs.astro.build/en/migrate/) and [full documentation website](https://docs.astro.build/).

### Features

Astro v1.0 includes a few new features and improvements since our original beta announcement back in April, including:

- [SSR Builds](https://docs.astro.build/en/guides/server-side-rendering/): Server output is now stable and available for production use.
- [Image Optimization](https://docs.astro.build/en/guides/integrations-guide/image/): New `<Image />` and `<Picture />` components available with [`@astrojs/image`](https://docs.astro.build/en/guides/integrations-guide/image/).
- [MDX Support](https://docs.astro.build/en/guides/integrations-guide/mdx/): A standard syntax for mixing UI components in Markdown is available with [`@astrojs/mdx`](https://docs.astro.build/en/guides/integrations-guide/mdx/).
- [Vite 3.0](https://vitejs.dev/blog/announcing-vite3.html): An upgrade to our internal build engine, Vite.

### Breaking Changes

- `Astro.canonicalURL` has been deprecated. Please use [`Astro.url`](https://docs.astro.build/en/reference/api-reference/#astrourl) to construct your own canonical URL.
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) is now preserved for scoped styles. See the [migration guide](https://docs.astro.build/en/migrate/#changed-scoped-css-specificity) for more details.
  > **Warning**
  > Please visually inspect your site output to make sure everything is styled as expected. If not, find your scoped style and increase the selector specificity manually to match the old behavior.
- Components and JSX in Markdown has been deprecated. For long-term support you should migrate to the [`@astrojs/mdx`](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration. See the [migration guide](https://docs.astro.build/en/migrate/#deprecated-components-and-jsx-in-markdown) for more details.
- The previously deprecated `<Markdown>` component has been removed. It is now available as a separate package, [`@astrojs/markdown-component`](https://github.com/withastro/astro/tree/main/packages/markdown/component).

If you are coming from v0.25 or earlier, make sure you have read and followed the [v0.26 Migration Guide](https://docs.astro.build/en/migrate/#migrate-to-v026), which contained several major breaking changes.

### Patch Changes

- Updated dependencies [[`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308)]:
  - @astrojs/markdown-remark@1.0.0
  - @astrojs/telemetry@1.0.0
  - @astrojs/webapi@1.0.0

## 1.0.0-rc.8

### Patch Changes

- [#4012](https://github.com/withastro/astro/pull/4012) [`f207c417e`](https://github.com/withastro/astro/commit/f207c417e08b2b5ad27cf185888b02392bb568e0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Adds `Astro.generator` which can be used to add a [`<meta name="generator">`](https://html.spec.whatwg.org/multipage/semantics.html#meta-generator) tag.

* [#4201](https://github.com/withastro/astro/pull/4201) [`25d36d955`](https://github.com/withastro/astro/commit/25d36d955899f2fba7c5a2e4f04bbe7c95a2146b) Thanks [@matthewp](https://github.com/matthewp)! - Adds warning in dev when using client: directive on Astro component

- [#4203](https://github.com/withastro/astro/pull/4203) [`ec376369a`](https://github.com/withastro/astro/commit/ec376369a84d20bc3079800ae8e8296c96fcf627) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure JSX does not reference server entrypoint

* [#4195](https://github.com/withastro/astro/pull/4195) [`28ab273a3`](https://github.com/withastro/astro/commit/28ab273a3d0a1ecea84bd83591d5b5f3b212de4f) Thanks [@bluwy](https://github.com/bluwy)! - Fix client build sourcemap generation

- [#4189](https://github.com/withastro/astro/pull/4189) [`5e71a8720`](https://github.com/withastro/astro/commit/5e71a8720e17b576ec12ac993f7e6b3d38fb9c8c) Thanks [@jablonski](https://github.com/jablonski)! - Fix custom 404 pages when using `astro preview` (#4113)

## 1.0.0-rc.7

### Minor Changes

- [#4176](https://github.com/withastro/astro/pull/4176) [`2675b8633`](https://github.com/withastro/astro/commit/2675b8633c5d5c45b237ec87940d5eaf1bfb1b4b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Support frontmatter injection for MD and MDX using remark and rehype plugins

* [#4155](https://github.com/withastro/astro/pull/4155) [`81c9ad9a6`](https://github.com/withastro/astro/commit/81c9ad9a6bdb2806f3ccb77113a0cb40459b3d70) Thanks [@kagankan](https://github.com/kagankan)! - Add `vite.build.cssTaregt` support for CSS build

- [#4137](https://github.com/withastro/astro/pull/4137) [`471c6f784`](https://github.com/withastro/astro/commit/471c6f784e21399676c8b2002665ffdf83a1c59e) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Speed up internal markdown builds with new vite-plugin markdown

### Patch Changes

- [#4175](https://github.com/withastro/astro/pull/4175) [`69db0298d`](https://github.com/withastro/astro/commit/69db0298d07b560992346d1a41e85afd767ee61f) Thanks [@matthewp](https://github.com/matthewp)! - Fixes double doctypes

* [#4154](https://github.com/withastro/astro/pull/4154) [`36223f663`](https://github.com/withastro/astro/commit/36223f663ef73ef4581c4ad93c88666d2e0190e7) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Expose `getViteConfig` from `astro/config` to unblock usage with Vitest

- [#4158](https://github.com/withastro/astro/pull/4158) [`e569f0a5c`](https://github.com/withastro/astro/commit/e569f0a5c7b56c4cce7afe95335b0aee6ac3d298) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where MDX components would be escaped

* [#4157](https://github.com/withastro/astro/pull/4157) [`025743849`](https://github.com/withastro/astro/commit/025743849da4a6d1fde30b49511805f41da9ff7a) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix duplicated CSS when using HMR

- [#4156](https://github.com/withastro/astro/pull/4156) [`82a1063cc`](https://github.com/withastro/astro/commit/82a1063cc26cf6d7012d40025a6ad14812c74d1d) Thanks [@matthewp](https://github.com/matthewp)! - Add CSS to page when child component uses Astro.glob

* [#4153](https://github.com/withastro/astro/pull/4153) [`3321aace0`](https://github.com/withastro/astro/commit/3321aace06595de40a0ee9ecac2705d7b28e1b94) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve an error message for getStaticPaths

- [#4180](https://github.com/withastro/astro/pull/4180) [`c56a9227c`](https://github.com/withastro/astro/commit/c56a9227c717480ef4cf25cd50634872ef021101) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where Astro component would render [Object object] when using MDX

* [#4136](https://github.com/withastro/astro/pull/4136) [`9afa4611c`](https://github.com/withastro/astro/commit/9afa4611cbddd14349dcad9bf0af1fb8b9585381) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix issue when using Fragment inside MDX

* Updated dependencies [[`2675b8633`](https://github.com/withastro/astro/commit/2675b8633c5d5c45b237ec87940d5eaf1bfb1b4b), [`471c6f784`](https://github.com/withastro/astro/commit/471c6f784e21399676c8b2002665ffdf83a1c59e), [`16034f0dd`](https://github.com/withastro/astro/commit/16034f0dd5b3683e9e022dbd413e85bd18d2b031)]:
  - @astrojs/markdown-remark@0.14.1

## 1.0.0-rc.6

### Patch Changes

- [#4149](https://github.com/withastro/astro/pull/4149) [`4d6475227`](https://github.com/withastro/astro/commit/4d6475227458f02361b62ff9603e79594bf7ec11) Thanks [@matthewp](https://github.com/matthewp)! - Fixes SSR CSS ordering to match static mode

## 1.0.0-rc.5

### Patch Changes

- [#4108](https://github.com/withastro/astro/pull/4108) [`08432d5b0`](https://github.com/withastro/astro/commit/08432d5b01a5cab1bd8d962c30f77ab3827bc5aa) Thanks [@altano](https://github.com/altano)! - Allow globbed mdx files to have typed frontmatter

* [#4125](https://github.com/withastro/astro/pull/4125) [`5f3b3b44d`](https://github.com/withastro/astro/commit/5f3b3b44db4171255eb35bfc12a2256784fdbb4b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix HMR of style blocks in Astro files. Updating a style block should no longer perform a full reload of the page.

- [#4131](https://github.com/withastro/astro/pull/4131) [`09eca9be5`](https://github.com/withastro/astro/commit/09eca9be5e27e57d49e5af6a8fa9c4018ceb0b85) Thanks [@matthewp](https://github.com/matthewp)! - Fixes use of multiple renderers when one throws

* [#4141](https://github.com/withastro/astro/pull/4141) [`65f2d3b4b`](https://github.com/withastro/astro/commit/65f2d3b4b1d31411ee2ea450478349413d8f4cf6) Thanks [@FredKSchott](https://github.com/FredKSchott)! - fix windows "bad package export" error

- [#4063](https://github.com/withastro/astro/pull/4063) [`ec5518fe3`](https://github.com/withastro/astro/commit/ec5518fe308ffe281b9e92755dec85489a1c1760) Thanks [@vikpe](https://github.com/vikpe)! - Add `mdx` extension to default generated Tailwind config.

## 1.0.0-rc.4

### Patch Changes

- [#4112](https://github.com/withastro/astro/pull/4112) [`e33fc9bc4`](https://github.com/withastro/astro/commit/e33fc9bc46ff0a30013deb6dc76e545e70cc3a3e) Thanks [@matthewp](https://github.com/matthewp)! - Fix MDX working with a ts config file

* [#4049](https://github.com/withastro/astro/pull/4049) [`b60cc0538`](https://github.com/withastro/astro/commit/b60cc0538bc5c68dd411117780d20d892530789d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve `injectScript` handling for non-Astro pages

- [#4105](https://github.com/withastro/astro/pull/4105) [`9cc3a11c4`](https://github.com/withastro/astro/commit/9cc3a11c44eaf042bb3a982c812e1d8e839faf8f) Thanks [@dimitrov-adrian](https://github.com/dimitrov-adrian)! - Do not send `body` with `HEAD` or `GET` requests when using `server` output.

* [#4114](https://github.com/withastro/astro/pull/4114) [`64432bcb8`](https://github.com/withastro/astro/commit/64432bcb873efd0e4297c00fc9583a1fe516dfe7) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Refactor `@astrojs/mdx` and `@astrojs/markdown-remark` to use `@astrojs/prism` instead of duplicating the code

- [#4124](https://github.com/withastro/astro/pull/4124) [`2ee8e881d`](https://github.com/withastro/astro/commit/2ee8e881d47abecf24eeb25e7caac6f4616629ab) Thanks [@matthewp](https://github.com/matthewp)! - Upgrade Vite to latest

* [#4115](https://github.com/withastro/astro/pull/4115) [`26cc0bbf7`](https://github.com/withastro/astro/commit/26cc0bbf78320e1797de9b4562ace92c5c03b666) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case with hoisted scripts and Tailwind during dev

* Updated dependencies [[`64432bcb8`](https://github.com/withastro/astro/commit/64432bcb873efd0e4297c00fc9583a1fe516dfe7)]:
  - @astrojs/markdown-remark@0.14.0

## 1.0.0-rc.3

### Patch Changes

- [#4087](https://github.com/withastro/astro/pull/4087) [`a0d1731a7`](https://github.com/withastro/astro/commit/a0d1731a7ea9c31c5285b8b7239b2e1e558c1028) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes a couple routing bugs that could lead to routing differences in `dev` vs. `build` when using multiple dynamic routes

* [#4080](https://github.com/withastro/astro/pull/4080) [`09c1e586e`](https://github.com/withastro/astro/commit/09c1e586ee8d903939903868e2a205f86dab8f11) Thanks [@matthewp](https://github.com/matthewp)! - Fixes race condition for rendering hydration scripts

## 1.0.0-rc.2

### Patch Changes

- [#4073](https://github.com/withastro/astro/pull/4073) [`13b4f8ad8`](https://github.com/withastro/astro/commit/13b4f8ad887d0d4e8efbf9f74185432f9cdf264e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes use of @fontsource packages

* [#4045](https://github.com/withastro/astro/pull/4045) [`a397b981f`](https://github.com/withastro/astro/commit/a397b981f5f46dee85e6e00aa39633d018d4b9a2) Thanks [@tony-sull](https://github.com/tony-sull)! - Adding support for custom "astro/client" type definitions in `@astrojs/image`

- [#4028](https://github.com/withastro/astro/pull/4028) [`c565465a9`](https://github.com/withastro/astro/commit/c565465a964ee14bf5d55c0a6eaf1091d3a68429) Thanks [@alfredogonzalezmartinez](https://github.com/alfredogonzalezmartinez)! - Add `url` and `file` properties to `MarkdownContent` type

* [#4072](https://github.com/withastro/astro/pull/4072) [`a198028b0`](https://github.com/withastro/astro/commit/a198028b04234d0b8dcb0b6bcb47c5831d7a15f9) Thanks [@matthewp](https://github.com/matthewp)! - Fixes Cloudflare throwing an error for process

- [#4055](https://github.com/withastro/astro/pull/4055) [`44694d8a9`](https://github.com/withastro/astro/commit/44694d8a9084bb1b09840ec8967edd75fa033174) Thanks [@matthewp](https://github.com/matthewp)! - Handle binary data request bodies in the Node adapter

## 1.0.0-rc.1

The **Astro v1.0.0 Release Candidate** comes includes new features, tons of bug fixes, and a few breaking changes to be aware of.

### Breaking Changes

- Astro now uses Vite 3, which comes with its own [Migration Guide](https://vitejs.dev/guide/migration.html).
- Components and JSX expressions in `.md` files is no longer supported by default. It can be enabled by setting the `legacy.astroFlavoredMarkdown` flag to `true`.
  - We are deeply invested in `@astrojs/mdx` as a long-term replacement for using components in Markdown.
- Astro scoped styles now respect their authored specificity (see [RFC0012](https://github.com/withastro/rfcs/blob/main/proposals/0012-scoped-css-with-preserved-specificity.md)). **Please visually inspect your site** after upgrading to confirm that styles are working as expected.
- `Astro.canonicalURL` has been replaced by the new `Astro.url` helper.
- The Markdown `headers` and `getHeaders()` utils have been renamed to `headings` and `getHeadings()`.
- The deprecated `Markdown` component has been removed from core and is now available as `@astrojs/markdown-component`.

### New Features

- `astro dev` HMR has been overhauled to provide more stable live reload behavior
- `astro dev` error handling has been overhauled to provide a more seamless error handling experience
- The new `output` configuration option builds to `'static' | 'server'` targets
- `.html` components and pages are now supported
- `.mdx` components and pages are now supported via `@astrojs/mdx`
- `server` output now supports custom `404` and `500` pages
- `server` output now exposes `Astro.clientAddress` to get the current IP address per request

### Patch Changes

- [#3988](https://github.com/withastro/astro/pull/3988) [`9841c21e8`](https://github.com/withastro/astro/commit/9841c21e8ecc1ed2dbf46648355871800ac0b172) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix certain characters showing incorrectly in `astro check`

* [#4000](https://github.com/withastro/astro/pull/4000) [`1c1b9da62`](https://github.com/withastro/astro/commit/1c1b9da624ec811e3e4a34b63f07bce61d2dcd04) Thanks [@tony-sull](https://github.com/tony-sull)! - public assets should always take priority over page routes in SSR deployments

- [#4042](https://github.com/withastro/astro/pull/4042) [`7e5ac1f45`](https://github.com/withastro/astro/commit/7e5ac1f45c4865cfc04c658d18e70aedbae38772) Thanks [@matthewp](https://github.com/matthewp)! - Ensure the before-hydration scripts are built

* [#3944](https://github.com/withastro/astro/pull/3944) [`e82ff13f1`](https://github.com/withastro/astro/commit/e82ff13f18e8776844555fe3acd2b366cf8f1e11) Thanks [@mihkeleidast](https://github.com/mihkeleidast)! - Add export keyword to astro config file stub created by add cli command

- [#3942](https://github.com/withastro/astro/pull/3942) [`21462feb4`](https://github.com/withastro/astro/commit/21462feb4a27c1d9a9c29647daf2ea0de986ddf0) Thanks [@AllanChain](https://github.com/AllanChain)! - Use a base middleware for better base path handling in dev.

* [#3991](https://github.com/withastro/astro/pull/3991) [`4dd341c8a`](https://github.com/withastro/astro/commit/4dd341c8a1a3ffe00916bb6c4d7cea7000c9d254) Thanks [@natemoo-re](https://github.com/natemoo-re)! - [#3859](https://github.com/withastro/astro/pull/3859) Overhaul Astro error handling, using Vite's built-in error overlay when possible

- [#4024](https://github.com/withastro/astro/pull/4024) [`1215e731b`](https://github.com/withastro/astro/commit/1215e731b8a334fce364aca77bda1085f3679e57) Thanks [@natemoo-re](https://github.com/natemoo-re)! - **BREAKING** Implement [RFC0012](https://github.com/withastro/rfcs/blob/main/proposals/0012-scoped-css-with-preserved-specificity.md) to preserve authored specificity for Astro scoped styles.

  If you use a mix of global styles and Astro scoped styles, **please visually inspect your site** after upgrading to confirm that styles are working as expected.

  If you previously relied on Astro's scoped styles to increase the specificity of your selectors, please update your selectors to use an additional class. For example, updating `div` to `div.my-class` will match the previous behavior.

* [#4046](https://github.com/withastro/astro/pull/4046) [`c811be49a`](https://github.com/withastro/astro/commit/c811be49abf17b151e04b9a63126267065f53b3f) Thanks [@matthewp](https://github.com/matthewp)! - Adds warnings for legacy markdown behavior

- [#4009](https://github.com/withastro/astro/pull/4009) [`01ba07d8f`](https://github.com/withastro/astro/commit/01ba07d8fa7eb67530b47b8530d65906f1aebf6e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes Lit compat with Vite 3.0.1

* [#4008](https://github.com/withastro/astro/pull/4008) [`399d7e269`](https://github.com/withastro/astro/commit/399d7e269834d11c046b390705a9a53d3738f3cf) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Avoid parsing JSX, components, and Astro islands when using "plain" md mode. This brings `markdown.mode: 'md'` in-line with our docs description.

- [#4047](https://github.com/withastro/astro/pull/4047) [`453c026aa`](https://github.com/withastro/astro/commit/453c026aa7f7825516e5816efc443fd9b0b6d74a) Thanks [@matthewp](https://github.com/matthewp)! - Perf: move getStaticPaths call during the build to during page generation

* [#3974](https://github.com/withastro/astro/pull/3974) [`54865612e`](https://github.com/withastro/astro/commit/54865612ea412f3d6d9a986d9dc6d4bebb7c8a63) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added missing `media` attributes from the JSX definitions for the `meta` element

- [#3932](https://github.com/withastro/astro/pull/3932) [`27ee8b97a`](https://github.com/withastro/astro/commit/27ee8b97ae3868d93bcd6c9302a401901394018f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Overhaul HMR handling for more stable live reload behavior

* [#4044](https://github.com/withastro/astro/pull/4044) [`6f88597c3`](https://github.com/withastro/astro/commit/6f88597c36339a8c7760023f530293a2dceaf493) Thanks [@lostra01](https://github.com/lostra01)! - Added missing "loading" attribute to IFrameHTMLAttributes

- [#3995](https://github.com/withastro/astro/pull/3995) [`b2b367c96`](https://github.com/withastro/astro/commit/b2b367c969493aaf21c974064beb241d05228066) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Support YAML frontmatter in MDX files

* [#3976](https://github.com/withastro/astro/pull/3976) [`fbef6a7f7`](https://github.com/withastro/astro/commit/fbef6a7f720d12697362d3f74c8c026c726d2ba3) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix `define:vars` bugs with both `style` and `script`

- [#4023](https://github.com/withastro/astro/pull/4023) [`4ca6a0933`](https://github.com/withastro/astro/commit/4ca6a0933d92dd559327dd46a28712d918caebf7) Thanks [@matthewp](https://github.com/matthewp)! - Fixes Node adapter to accept a request body

* [#4010](https://github.com/withastro/astro/pull/4010) [`d503c5bf3`](https://github.com/withastro/astro/commit/d503c5bf3db39afeecb28522861ac5d78c919408) Thanks [@matthewp](https://github.com/matthewp)! - Allow defining aliases with tsconfig

- [#4032](https://github.com/withastro/astro/pull/4032) [`beddf073b`](https://github.com/withastro/astro/commit/beddf073b5222b92da172475f5b8a578bffa73a0) Thanks [@arimgibson](https://github.com/arimgibson)! - Fix: find a hosting network differently based on Node version -- adjusted for Node v18.4+

* [#3867](https://github.com/withastro/astro/pull/3867) [`7250e4e86`](https://github.com/withastro/astro/commit/7250e4e86da41e7c662afa4b67f7cefc7da15e69) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for `.html` components and pages

- [#3959](https://github.com/withastro/astro/pull/3959) [`ddefb172f`](https://github.com/withastro/astro/commit/ddefb172f66bcd646dd0b75a7ea8360157dd2ba0) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Deprecate Astro.canonicalURL, in favor of Astro.url instead.

* [#3968](https://github.com/withastro/astro/pull/3968) [`95eaa207d`](https://github.com/withastro/astro/commit/95eaa207d8bd4cb5ca2cc1c6279a9bd4096b33d7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve warning logs on astro.config change

- [#3959](https://github.com/withastro/astro/pull/3959) [`ddefb172f`](https://github.com/withastro/astro/commit/ddefb172f66bcd646dd0b75a7ea8360157dd2ba0) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add Astro.url helper for getting the request URL

* [#4031](https://github.com/withastro/astro/pull/4031) [`6e27a5fdc`](https://github.com/withastro/astro/commit/6e27a5fdc21276cad26cd50e16a2709a40a7cbac) Thanks [@natemoo-re](https://github.com/natemoo-re)! - **BREAKING** Renamed Markdown utility function `getHeaders()` to `getHeadings()`.

* Updated dependencies [[`ba11b3399`](https://github.com/withastro/astro/commit/ba11b33996d79c32da947986edb0f32dbcc04aaf), [`399d7e269`](https://github.com/withastro/astro/commit/399d7e269834d11c046b390705a9a53d3738f3cf), [`00fab4ce1`](https://github.com/withastro/astro/commit/00fab4ce135eb799cac69140403d7724686733d6), [`6e27a5fdc`](https://github.com/withastro/astro/commit/6e27a5fdc21276cad26cd50e16a2709a40a7cbac)]:
  - @astrojs/markdown-remark@0.13.0

## 1.0.0-beta.73

### Patch Changes

- [#3937](https://github.com/withastro/astro/pull/3937) [`31f9c0bf0`](https://github.com/withastro/astro/commit/31f9c0bf029ffa4b470e620f2c32e1370643e81e) Thanks [@delucis](https://github.com/delucis)! - Roll back supported Node engines

* [#3588](https://github.com/withastro/astro/pull/3588) [`5d0edfc3b`](https://github.com/withastro/astro/commit/5d0edfc3b9a20bf68b16c463bbf9cbf31324143a) Thanks [@charlesvdv](https://github.com/charlesvdv)! - Fix missing props (url, file) in markdown layout

- [#3960](https://github.com/withastro/astro/pull/3960) [`ceda294e1`](https://github.com/withastro/astro/commit/ceda294e133d4cc32e68488393287be6077fd3d5) Thanks [@matthewp](https://github.com/matthewp)! - Fixes hydration of maps/sets

* [#3958](https://github.com/withastro/astro/pull/3958) [`8eba6d9d9`](https://github.com/withastro/astro/commit/8eba6d9d977920bdb0830cc219e636236433b2fd) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix JSX definitions being too strict as to what an element is, which lead to type issues in certain cases (Markdown imports, JSX components etc)

- [#3915](https://github.com/withastro/astro/pull/3915) [`f5d4ebf0e`](https://github.com/withastro/astro/commit/f5d4ebf0e242a7d33fedfe924f9dea678a7e673c) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix metadata handling for building MDX files

* [#3930](https://github.com/withastro/astro/pull/3930) [`3acb9ec26`](https://github.com/withastro/astro/commit/3acb9ec264de6ca6eecf49313c0f4d02c3908afa) Thanks [@matthewp](https://github.com/matthewp)! - Include hoisted scripts inside Astro.glob in dev

- [#3906](https://github.com/withastro/astro/pull/3906) [`b37695c34`](https://github.com/withastro/astro/commit/b37695c34c84274af873cf5c69d484ee33c82098) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixed many long-standing issues with `astro check`

  - Fixed it not working on Windows at all
  - Fixed red squiggles not showing in the proper place in certain contexts, notably with strings using non-latin characters
  - Fixed IDE links pointing to the wrong line number and character
  - Fixed line numbers being off by one
  - Fixed IDE links not working when the project wasn't at the root of the folder

  Additionally added some features:

  - Added more pretty colors
  - Fixed it not working at all on Windows
  - Warnings and hints are now printed alongside errors
  - Surrounding lines are now shown when relevant (aka not empty)

* [#3955](https://github.com/withastro/astro/pull/3955) [`92b48b152`](https://github.com/withastro/astro/commit/92b48b1525f12663a4932dd6b63bc18f7f0f35fa) Thanks [@matthewp](https://github.com/matthewp)! - Set import.meta.env.BASE_URL in dev mode

- [#3963](https://github.com/withastro/astro/pull/3963) [`5fde2fd8b`](https://github.com/withastro/astro/commit/5fde2fd8bcc7f10e8a449146fa89843f6e6b6aa3) Thanks [@matthewp](https://github.com/matthewp)! - Makes the Debug component's styles be inlined

- Updated dependencies [[`31f9c0bf0`](https://github.com/withastro/astro/commit/31f9c0bf029ffa4b470e620f2c32e1370643e81e), [`07fb544da`](https://github.com/withastro/astro/commit/07fb544dab142a3d4bb9d0d878aab34eaea447b2)]:
  - @astrojs/prism@0.6.1
  - @astrojs/telemetry@0.4.1
  - @astrojs/markdown-remark@0.12.0

## 1.0.0-beta.72

### Patch Changes

- [#3922](https://github.com/withastro/astro/pull/3922) [`7094d6a45`](https://github.com/withastro/astro/commit/7094d6a45f06b61f2a35af3408380654f24fc8f5) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly handle `false` in `class:list`

* [#3927](https://github.com/withastro/astro/pull/3927) [`7c5c4106d`](https://github.com/withastro/astro/commit/7c5c4106d7b9d73103eb6e899f39125e630280ff) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated `astro/components` exports to a `.ts` file so it's automatically typed

## 1.0.0-beta.71

### Patch Changes

- [#3918](https://github.com/withastro/astro/pull/3918) [`6a7a17f73`](https://github.com/withastro/astro/commit/6a7a17f735bd8a58cdc08f25a1442277aa7d2fb0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler`, fixing various edge cases around nested expressions, tables, and conditional slots. See the [`@astrojs/compiler@0.19.0 changelog`](https://github.com/withastro/compiler/blob/main/packages/compiler/CHANGELOG.md#0190) for more information.

- Updated dependencies [[`01a55467d`](https://github.com/withastro/astro/commit/01a55467d561974f843a9e0cd6963af7c840abb9)]:
  - @astrojs/markdown-remark@0.11.7

## 1.0.0-beta.70

### Patch Changes

- [#3902](https://github.com/withastro/astro/pull/3902) [`d8af02a94`](https://github.com/withastro/astro/commit/d8af02a9443de5fa4cfe8e3ef7beddde9ef8cf09) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: markdown "require is not defined" issue

* [#3914](https://github.com/withastro/astro/pull/3914) [`b48767985`](https://github.com/withastro/astro/commit/b48767985359bd359df8071324952ea5f2bc0d86) Thanks [@ran-dall](https://github.com/ran-dall)! - Rollback supported `node@16` version. Minimum versions are now `node@14.20.0` or `node@16.14.0`.

* Updated dependencies [[`ca45c0c27`](https://github.com/withastro/astro/commit/ca45c0c270f5ca3f7d2fb113a235d415cecdb333), [`b48767985`](https://github.com/withastro/astro/commit/b48767985359bd359df8071324952ea5f2bc0d86)]:
  - @astrojs/markdown-remark@0.11.6
  - @astrojs/prism@0.6.0
  - @astrojs/telemetry@0.4.0

## 1.0.0-beta.69

### Patch Changes

- [#3830](https://github.com/withastro/astro/pull/3830) [`4097f0622`](https://github.com/withastro/astro/commit/4097f06226ab393280658e81c258593bc41452fe) Thanks [@delucis](https://github.com/delucis)! - Update funding link in README

* [#3880](https://github.com/withastro/astro/pull/3880) [`402c4181d`](https://github.com/withastro/astro/commit/402c4181dcea8f7b741061452746f304cb952d77) Thanks [@crutchcorn](https://github.com/crutchcorn)! - Fix rendering HTML comments in `mode="md"` configuration

## 1.0.0-beta.68

### Patch Changes

- [#3883](https://github.com/withastro/astro/pull/3883) [`b4cb4a40d`](https://github.com/withastro/astro/commit/b4cb4a40df33b82bcd36e63bd488bd037e94dbc0) Thanks [@crutchcorn](https://github.com/crutchcorn)! - Added "mode" to Astro config file TypeScript definitions

- Updated dependencies [[`c4f6fdf37`](https://github.com/withastro/astro/commit/c4f6fdf3722b9bc2192cab735498f4e0c30c982e)]:
  - @astrojs/telemetry@0.3.1

## 1.0.0-beta.67

### Patch Changes

- [#3669](https://github.com/withastro/astro/pull/3669) [`93e1020b1`](https://github.com/withastro/astro/commit/93e1020b1e8549b08cf5646e1ebc3ae34e14ebc8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Tooling: reintroduce smoke test across example projects

* [#3889](https://github.com/withastro/astro/pull/3889) [`5f4ecbad1`](https://github.com/withastro/astro/commit/5f4ecbad1bbcf3e08b399b23c70c7b766dac48e2) Thanks [@matthewp](https://github.com/matthewp)! - Allow defining Astro components in Vite plugins

* Updated dependencies [[`93e1020b1`](https://github.com/withastro/astro/commit/93e1020b1e8549b08cf5646e1ebc3ae34e14ebc8)]:
  - @astrojs/markdown-remark@0.11.5

## 1.0.0-beta.66

### Patch Changes

- [#3891](https://github.com/withastro/astro/pull/3891) [`9cf7e4064`](https://github.com/withastro/astro/commit/9cf7e406412bcc9c1a17b57072dc1c4a1b94b635) Thanks [@matthewp](https://github.com/matthewp)! - Fix Safari client:visible refresh bug

* [#3851](https://github.com/withastro/astro/pull/3851) [`21869a614`](https://github.com/withastro/astro/commit/21869a614a89446a25175e45580943c28ab7413c) Thanks [@matthewp](https://github.com/matthewp)! - Replaces vite/client types with astro/client

- [#3871](https://github.com/withastro/astro/pull/3871) [`1cc5b7890`](https://github.com/withastro/astro/commit/1cc5b78905633608e5b07ad291f916f54e67feb1) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update supported `node` versions. Minimum versions are now `node@14.20.0` or `node@16.16.0`.

* [#3892](https://github.com/withastro/astro/pull/3892) [`7c49096e8`](https://github.com/withastro/astro/commit/7c49096e864815d63179a467d9d3d89c76ccd523) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to latest

* Updated dependencies [[`1cc5b7890`](https://github.com/withastro/astro/commit/1cc5b78905633608e5b07ad291f916f54e67feb1)]:
  - @astrojs/prism@0.5.0
  - @astrojs/telemetry@0.3.0
  - @astrojs/markdown-remark@0.11.4

## 1.0.0-beta.65

### Patch Changes

- [#3842](https://github.com/withastro/astro/pull/3842) [`08fa0772`](https://github.com/withastro/astro/commit/08fa0772abb49b892fa03198fa16964161b9618d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Docs: add complete "adapter" configuration reference

* [#3860](https://github.com/withastro/astro/pull/3860) [`c2c4e5c2`](https://github.com/withastro/astro/commit/c2c4e5c238463a09d621237698a5399eb7b3e9ad) Thanks [@matthewp](https://github.com/matthewp)! - Fixes response.arrayBuffer() handling in large pages

- [#3854](https://github.com/withastro/astro/pull/3854) [`b012ee55`](https://github.com/withastro/astro/commit/b012ee55b107dea0730286263b27d83e530fad5d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Support adapters and third party packages

* [#3848](https://github.com/withastro/astro/pull/3848) [`502f0631`](https://github.com/withastro/astro/commit/502f0631317fe1b23582d4126c44f44cb0b0716f) Thanks [@matthewp](https://github.com/matthewp)! - Allow importing the Image component from @astrojs/image

- [#3873](https://github.com/withastro/astro/pull/3873) [`957fb505`](https://github.com/withastro/astro/commit/957fb50541e15d3876a87f91cd52f29e10a92cc9) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix hydration for SSR components that return null

* [#3801](https://github.com/withastro/astro/pull/3801) [`b84bd7db`](https://github.com/withastro/astro/commit/b84bd7db63c29aede9a63940e2e7dbdc7eca28db) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Update JSX definitions with element specific types and added some missing attributes

- [#3837](https://github.com/withastro/astro/pull/3837) [`5afb8076`](https://github.com/withastro/astro/commit/5afb807688750fce7024e630203fbc48dcef267a) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix usage of slots inside expressions

- Updated dependencies [[`eedb32c7`](https://github.com/withastro/astro/commit/eedb32c79716a8e04acd46cb2c74c5af112e016f)]:
  - @astrojs/telemetry@0.2.5

## 1.0.0-beta.64

### Patch Changes

- [#3821](https://github.com/withastro/astro/pull/3821) [`c2165c34`](https://github.com/withastro/astro/commit/c2165c34a76c183b3af6303526ae292a1f2426ce) Thanks [@matthewp](https://github.com/matthewp)! - Fix for putting the <head> into its own component

* [#3841](https://github.com/withastro/astro/pull/3841) [`820a26dd`](https://github.com/withastro/astro/commit/820a26dde5cdc11b5bf430bc2a1e3b09084ae045) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: add default content type to endpoints with { body } shorthand

- [#3839](https://github.com/withastro/astro/pull/3839) [`cd3f6348`](https://github.com/withastro/astro/commit/cd3f6348c4e918b5367587bce58d724aec44eddd) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `client:visible` directive in safari

- Updated dependencies [[`e4b2dca1`](https://github.com/withastro/astro/commit/e4b2dca1f3f03bd951f1d623695631cebf638c67)]:
  - @astrojs/telemetry@0.2.4

## 1.0.0-beta.63

### Patch Changes

- [#3799](https://github.com/withastro/astro/pull/3799) [`5fe52737`](https://github.com/withastro/astro/commit/5fe52737cbb3676af69bb446afa7f3b53b78dc34) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix internal error for MDX integration

## 1.0.0-beta.62

### Patch Changes

- [#3788](https://github.com/withastro/astro/pull/3788) [`f4943e0f`](https://github.com/withastro/astro/commit/f4943e0fbced044f0ba4435cb41d77b67c98e69f) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds support for the new `astrojs/image` integration

## 1.0.0-beta.61

### Patch Changes

- [#3777](https://github.com/withastro/astro/pull/3777) [`976e1f17`](https://github.com/withastro/astro/commit/976e1f175a95ea39f737b8575e4fdf3c3d89e1ee) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds an option to disable HTTP streaming in Astro's production `App` server

## 1.0.0-beta.60

### Patch Changes

- [#3779](https://github.com/withastro/astro/pull/3779) [`192c4bcf`](https://github.com/withastro/astro/commit/192c4bcfd69aa44f735866378d8ba08ba902d290) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an issue with throwAndExit not awaiting

* [#3706](https://github.com/withastro/astro/pull/3706) [`032ad1c0`](https://github.com/withastro/astro/commit/032ad1c047a62dd663067cc562537d16f2872aa7) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Internal changes needed to support `@astrojs/mdx`

- [#3768](https://github.com/withastro/astro/pull/3768) [`913591d1`](https://github.com/withastro/astro/commit/913591d13761d7c99f4b5bf547942922736a9f3a) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an issue with unfriendly config validation error output

- Updated dependencies [[`8045c8ad`](https://github.com/withastro/astro/commit/8045c8ade16fe4306448b7f98a4560ef0557d378)]:
  - @astrojs/telemetry@0.2.3

## 1.0.0-beta.59

### Patch Changes

- [#3767](https://github.com/withastro/astro/pull/3767) [`1eab496e`](https://github.com/withastro/astro/commit/1eab496e9d733a13f3a2eb2129e90949b130901d) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates an error handler to expect updated `@astrojs/lit` behavior

* [#3763](https://github.com/withastro/astro/pull/3763) [`54cd6b8d`](https://github.com/withastro/astro/commit/54cd6b8dd184fb0acb2facaa9b6843be59f9c57f) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes how `injectRoute` parses route patterns on Windows

- [#3750](https://github.com/withastro/astro/pull/3750) [`dd176ca5`](https://github.com/withastro/astro/commit/dd176ca58d9ce8ab757075491568a014c0943de2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add basic error reporting to astro telemetry

- Updated dependencies [[`dd176ca5`](https://github.com/withastro/astro/commit/dd176ca58d9ce8ab757075491568a014c0943de2)]:
  - @astrojs/telemetry@0.2.2

## 1.0.0-beta.58

### Patch Changes

- [#3715](https://github.com/withastro/astro/pull/3715) [`4d6d8644`](https://github.com/withastro/astro/commit/4d6d8644e623522ca6c19dbb2078865b17044c38) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update "astro add" output to remove confusing multi-select prompt.

* [#3715](https://github.com/withastro/astro/pull/3715) [`4d6d8644`](https://github.com/withastro/astro/commit/4d6d8644e623522ca6c19dbb2078865b17044c38) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update the help output to improve formatting

- [#3713](https://github.com/withastro/astro/pull/3713) [`ebd7e7ad`](https://github.com/withastro/astro/commit/ebd7e7ad81e5245deffa331f11e5196ff1b21d84) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update telemetry to support a more anonymized project id. `anonymousProjectId` is now hashed based on anonymous git data instead of your git remote URL.

- Updated dependencies [[`ebd7e7ad`](https://github.com/withastro/astro/commit/ebd7e7ad81e5245deffa331f11e5196ff1b21d84)]:
  - @astrojs/telemetry@0.2.0

## 1.0.0-beta.57

### Patch Changes

- [#3724](https://github.com/withastro/astro/pull/3724) [`86635e03`](https://github.com/withastro/astro/commit/86635e035b209845b4e1cdf370a4c78451271b70) Thanks [@matthewp](https://github.com/matthewp)! - Fixes define:vars w/ styles used inside of components

## 1.0.0-beta.56

### Patch Changes

- [#3705](https://github.com/withastro/astro/pull/3705) [`b5e3403f`](https://github.com/withastro/astro/commit/b5e3403fa151710be4837f6ad265d836adb08025) Thanks [@matthewp](https://github.com/matthewp)! - Fixes build some times breaking in large sites

* [#3702](https://github.com/withastro/astro/pull/3702) [`b11e3b38`](https://github.com/withastro/astro/commit/b11e3b38ebb59ceec3479cbf580276d3b3bd657c) Thanks [@matthewp](https://github.com/matthewp)! - Ensure import.meta.env.SSR is true in SSR mode

## 1.0.0-beta.55

### Patch Changes

- [#3696](https://github.com/withastro/astro/pull/3696) [`3daaf510`](https://github.com/withastro/astro/commit/3daaf510ea767fba47ef52d2253b6221967f3b53) Thanks [@matthewp](https://github.com/matthewp)! - Support for streaming responses

  Astro supports streaming in its templates. Any time Astro encounters an async boundary it will stream out HTML that occurs before it. For example:

  ```astro

  ```

  In this arbtrary example Astro will streaming out the `<head>` section and everything else until it encounters `<LoadTodos />` and then stop. LoadTodos, which is also an Astro component will stream its contents as well; stopping and waiting at any other asynchronous components.

  As part of this Astro also now supports async iterables within its templates. This means you can do this:

  ```astro

  ```

  Which will stream out `<li>`s one at a time, waiting a second between each.

* [#3700](https://github.com/withastro/astro/pull/3700) [`47c81eff`](https://github.com/withastro/astro/commit/47c81effa69fb5d7f1e576f88c27d5071f1888e3) Thanks [@matthewp](https://github.com/matthewp)! - Make Astro.redirect use a 302 status code

## 1.0.0-beta.54

### Patch Changes

- [#3652](https://github.com/withastro/astro/pull/3652) [`7373d61c`](https://github.com/withastro/astro/commit/7373d61cdcaedd64bf5fd60521b157cfa4343558) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add renderer support for passing named slots to framework components.

  **BREAKING**: integrations using the `addRenderer()` API are now passed all named slots via `Record<string, string>` rather than `string`. Previously only the default slot was passed.

* [#3649](https://github.com/withastro/astro/pull/3649) [`446f8c4f`](https://github.com/withastro/astro/commit/446f8c4f13de04324697e958af027ac8943a039b) Thanks [@dc7290](https://github.com/dc7290)! - Added test for dir parameter in astro:build:done

- [#3679](https://github.com/withastro/astro/pull/3679) [`fa7ed3f3`](https://github.com/withastro/astro/commit/fa7ed3f3a9ce89c1c46e637b584271a6e199d211) Thanks [@matthewp](https://github.com/matthewp)! - Moves head injection to happen during rendering

  This change makes it so that head injection; to insert component stylesheets, hoisted scripts, for example, to happen during rendering than as a post-rendering step.

  This is to enable streaming. This change will only be noticeable if you are rendering your `<head>` element inside of a framework component. If that is the case then the head items will be injected before the first non-head element in an Astro file instead.

  In the future we may offer a `<Astro.Head>` component as a way to control where these scripts/styles are inserted.

## 1.0.0-beta.53

### Patch Changes

- [#3685](https://github.com/withastro/astro/pull/3685) [`3d554fdb`](https://github.com/withastro/astro/commit/3d554fdbfb49d85d2945b7775825f7d9ace959ce) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix PostCSS config not applied to Svelte component by default

* [#3665](https://github.com/withastro/astro/pull/3665) [`9a813268`](https://github.com/withastro/astro/commit/9a813268db2e3a7ed5644739b7a12e83e5d239b2) Thanks [@matthewp](https://github.com/matthewp)! - Allow TypeScript inside script tags

  This makes it so that you can use TypeScript inside of script tags like so:

  ```html
  <script>
    interface Person {
      name: string;
    }

    const person: Person = {
      name: 'Astro',
    };

    console.log(person);
  </script>
  ```

  Note that the the VSCode extension does not currently support this, however.

- [#3633](https://github.com/withastro/astro/pull/3633) [`921d9a27`](https://github.com/withastro/astro/commit/921d9a27e243c27e40e429a0a5c7d562d7b9633f) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix a bug with `astro add react` adding a too-complex semver to your package.json

* [#3676](https://github.com/withastro/astro/pull/3676) [`85c33751`](https://github.com/withastro/astro/commit/85c33751c20002e29bd646325a6e39f83cbb1f4d) Thanks [@matthewp](https://github.com/matthewp)! - Allow specifying entryFileNames for client JS

## 1.0.0-beta.52

### Patch Changes

- [#3667](https://github.com/withastro/astro/pull/3667) [`df02fad1`](https://github.com/withastro/astro/commit/df02fad13ef7c8a8a563ee3720513d437090ee2e) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: add @nanostores/preact to ALWAYS_NOEXTERNAL list for easier onboarding

* [#3678](https://github.com/withastro/astro/pull/3678) [`89884540`](https://github.com/withastro/astro/commit/898845402cd82995bd4878c93d3ccfcce89ebf27) Thanks [@matthewp](https://github.com/matthewp)! - Fix regression with SSRManifest and client assets

- [#3658](https://github.com/withastro/astro/pull/3658) [`aeab8909`](https://github.com/withastro/astro/commit/aeab890971e5f425f877545c674d1cb532cee754) Thanks [@matthewp](https://github.com/matthewp)! - Inlines small hoisted scripts

  This enables a perf improvement, whereby small hoisted scripts without dependencies are inlined into the HTML, rather than loaded externally. This uses `vite.build.assetInlineLimit` to determine if the script should be inlined.

## 1.0.0-beta.51

### Patch Changes

- [#3675](https://github.com/withastro/astro/pull/3675) [`ef6282d5`](https://github.com/withastro/astro/commit/ef6282d5d99a428f7084f7174c9290cb5ad0fa31) Thanks [@hippotastic](https://github.com/hippotastic)! - Fix `import.meta.env` also without trailing dot

* [#3673](https://github.com/withastro/astro/pull/3673) [`ba5ad785`](https://github.com/withastro/astro/commit/ba5ad7855c4252e10e76b41b88fd4c74b4b7295b) Thanks [@hippotastic](https://github.com/hippotastic)! - Fix react dependencies to improve test reliability

## 1.0.0-beta.50

### Patch Changes

- [#3663](https://github.com/withastro/astro/pull/3663) [`c20b93c4`](https://github.com/withastro/astro/commit/c20b93c48448861f2b5c324d81dc30b601a0be0d) Thanks [@matthewp](https://github.com/matthewp)! - Resolve .jsx -> .tsx in hydrated components

## 1.0.0-beta.49

### Patch Changes

- [#3657](https://github.com/withastro/astro/pull/3657) [`7d4699b8`](https://github.com/withastro/astro/commit/7d4699b8f99ca4835e597a28d4f85b58133ff9ce) Thanks [@leader22](https://github.com/leader22)! - Check null for props serialization

## 1.0.0-beta.48

### Patch Changes

- [#3625](https://github.com/withastro/astro/pull/3625) [`f5afaf24`](https://github.com/withastro/astro/commit/f5afaf24984ee7d4d6e908a7eeed17f5ca18c61e) Thanks [@matthewp](https://github.com/matthewp)! - Significantly improved build performance

  This change reflects in a significantly improved build performance, especially on larger sites.

  With this change Astro is not building everything by statically analyzing `.astro` files. This means it no longer needs to dynamically _run_ your code in order to know what JavaScript needs to be built.

  With one particular large site we found it to build **32%** faster.

* [#3612](https://github.com/withastro/astro/pull/3612) [`fca58cfd`](https://github.com/withastro/astro/commit/fca58cfd91b68501ec82350ab023170b208d8ce7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: "vpath" import error when building for netlify edge

- [#3650](https://github.com/withastro/astro/pull/3650) [`d9f6dcf6`](https://github.com/withastro/astro/commit/d9f6dcf6ea05f78a33606509de0714f8b0625f96) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Properly catch falsy components

* [#3610](https://github.com/withastro/astro/pull/3610) [`6ab749be`](https://github.com/withastro/astro/commit/6ab749be5c60c4b57aae8a0ba6083d010fe3b791) Thanks [@hippotastic](https://github.com/hippotastic)! - Add component hydration in Markdown E2E tests

- [#3620](https://github.com/withastro/astro/pull/3620) [`05aa7244`](https://github.com/withastro/astro/commit/05aa72442cd4512b94abdb39623e8caa2c1839b0) Thanks [@hippotastic](https://github.com/hippotastic)! - Remove extra newlines around Markdown components

- Updated dependencies [[`80c71c7c`](https://github.com/withastro/astro/commit/80c71c7c56d15dc05ec0c5a848130aad222d7d51), [`fca58cfd`](https://github.com/withastro/astro/commit/fca58cfd91b68501ec82350ab023170b208d8ce7), [`9c8a7c0b`](https://github.com/withastro/astro/commit/9c8a7c0b09db2fb6925929d4efe01d5ececbf08e), [`9c8a7c0b`](https://github.com/withastro/astro/commit/9c8a7c0b09db2fb6925929d4efe01d5ececbf08e), [`48e67fe0`](https://github.com/withastro/astro/commit/48e67fe05398dc4b1fca12db36c1b37bb341277a), [`05aa7244`](https://github.com/withastro/astro/commit/05aa72442cd4512b94abdb39623e8caa2c1839b0)]:
  - @astrojs/markdown-remark@0.11.3
  - @astrojs/telemetry@0.1.3

## 1.0.0-beta.47

### Patch Changes

- [#3599](https://github.com/withastro/astro/pull/3599) [`0ffc350c`](https://github.com/withastro/astro/commit/0ffc350c8d6bcf7fe4f6bde7ce1c10c014d7b4a1) Thanks [@arimgibson](https://github.com/arimgibson)! - Fix: find a hosting network differently based on Node version

* [#3605](https://github.com/withastro/astro/pull/3605) [`4916b733`](https://github.com/withastro/astro/commit/4916b733c2b8265ab46762bbbc85aa4171296515) Thanks [@matthewp](https://github.com/matthewp)! - Inlines hydration scripts

## 1.0.0-beta.46

### Patch Changes

- [`d1f3406d`](https://github.com/withastro/astro/commit/d1f3406d85aea6e121f20d1d054140f05aea4424) - Add support for the `injectRoute` hook proposed in [RFC0023](https://github.com/withastro/rfcs/blob/main/proposals/0023-inject-route.md). Feature documentation is available in [#704](https://github.com/withastro/docs/pull/704)

* [#3397](https://github.com/withastro/astro/pull/3397) [`48161b77`](https://github.com/withastro/astro/commit/48161b77caf35a9f3c285c0c7fbb9d8a937241c9) Thanks [@happycollision](https://github.com/happycollision)! - MarkdownInstance: Persist frontmatter type into the return of `.default()`

- [#3595](https://github.com/withastro/astro/pull/3595) [`330fef44`](https://github.com/withastro/astro/commit/330fef448e9be257bb3a740387222935e3656c8a) Thanks [@matthewp](https://github.com/matthewp)! - Handle importing multiple CSS packages in same bundle

## 1.0.0-beta.45

### Patch Changes

- [#3593](https://github.com/withastro/astro/pull/3593) [`0e2314d8`](https://github.com/withastro/astro/commit/0e2314d8e5b01f7b2184a243c6d7e53e14b0cd0f) Thanks [@matthewp](https://github.com/matthewp)! - Fixes uses of inline hoisted scripts in SSR

* [#3590](https://github.com/withastro/astro/pull/3590) [`d46f8fb1`](https://github.com/withastro/astro/commit/d46f8fb14d3c702d62cc327de23562078fca0088) Thanks [@okikio](https://github.com/okikio)! - Add support for optional integrations

  By making integration optional, Astro can now ignore null, undefined or other [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) "Integration" values instead of giving an internal error most devs can't and/or won't understand.

  This also enables conditional integrations,
  e.g.

  ```ts
  integration: [
    // Only run `compress` integration when in production environments, etc...
    // Note that `import.meta.env` is not available inside the `astro.config.mjs` file!
    process.env.production ? compress() : null,
  ];
  ```

## 1.0.0-beta.44

### Patch Changes

- [#3568](https://github.com/withastro/astro/pull/3568) [`614769a3`](https://github.com/withastro/astro/commit/614769a39b4976dc292d1ed7fa1735811c0bdb8c) Thanks [@matthewp](https://github.com/matthewp)! - Fixes race condition causing the "self accepting" error message

* [#3557](https://github.com/withastro/astro/pull/3557) [`3ec41f28`](https://github.com/withastro/astro/commit/3ec41f284c7c6e7abfb75704ffbf19cdf3e3eaa0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve the way YAML errors are surfaced

* Updated dependencies [[`5c73f614`](https://github.com/withastro/astro/commit/5c73f614e8f579e04fe61c948b69be7bc6d81d5d)]:
  - @astrojs/markdown-remark@0.11.2

## 1.0.0-beta.43

### Patch Changes

- [#3552](https://github.com/withastro/astro/pull/3552) [`3eb96a7a`](https://github.com/withastro/astro/commit/3eb96a7ab768a807d2b665dfa692ca9d6ae18d20) Thanks [@tony-sull](https://github.com/tony-sull)! - Fix: Astro.site should default to localhost when not provided in a project's config

* [#3540](https://github.com/withastro/astro/pull/3540) [`78164033`](https://github.com/withastro/astro/commit/78164033060d22d45ef89f9d8b87b649aa350e66) Thanks [@tony-sull](https://github.com/tony-sull)! - Fix: showing a more helpful error message when an import in an Astro component could not be resolved

- [#3547](https://github.com/withastro/astro/pull/3547) [`a83d5817`](https://github.com/withastro/astro/commit/a83d5817141081ac28f84a436c177af63decd831) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: show "unable to find network to expose" with local network log when using --host without suitable networks

- Updated dependencies [[`76fb01cf`](https://github.com/withastro/astro/commit/76fb01cff1002f2a37e93869378802156c4eca7c), [`c549f161`](https://github.com/withastro/astro/commit/c549f161cadd76a666672556f2c2d63b5f97f00d)]:
  - @astrojs/markdown-remark@0.11.1

## 1.0.0-beta.42

### Patch Changes

- [#3537](https://github.com/withastro/astro/pull/3537) [`51c60de7`](https://github.com/withastro/astro/commit/51c60de76cf8dd8b589cb7ae61d43159a83ef03d) Thanks [@matthewp](https://github.com/matthewp)! - Fixes imported CSS packages in frontmatter

* [#3492](https://github.com/withastro/astro/pull/3492) [`a87ce441`](https://github.com/withastro/astro/commit/a87ce4412c583bce739e18b890e92a9bdaeff59d) Thanks [@natemoo-re](https://github.com/natemoo-re)! - - Improvements to how Astro handles style updates in HMR
  - Fixes a Svelte-specific HMR bug that caused Svelte component styles to be lost once a .astro file was hot reloaded

- [#3533](https://github.com/withastro/astro/pull/3533) [`d7688f05`](https://github.com/withastro/astro/commit/d7688f05c216a706105854474ba1caa737594871) Thanks [@matthewp](https://github.com/matthewp)! - Prevent minifying server JS

## 1.0.0-beta.41

### Patch Changes

- [#3518](https://github.com/withastro/astro/pull/3518) [`df7c43df`](https://github.com/withastro/astro/commit/df7c43df632f276dabb9bce0ca59eb93d2ebc021) Thanks [@matthewp](https://github.com/matthewp)! - Allow importing .ts files with .js extension

* [#3521](https://github.com/withastro/astro/pull/3521) [`85b90549`](https://github.com/withastro/astro/commit/85b905495d4bc538686109e056a821e35139c111) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix isSelfAccepting errors when hydrating JSX components

* Updated dependencies [[`6c955ca6`](https://github.com/withastro/astro/commit/6c955ca643a7a071609ce8a5258cc7faf5a636b2), [`30578015`](https://github.com/withastro/astro/commit/30578015919e019cd8dd354288a45c1fc63bd01f), [`939fe159`](https://github.com/withastro/astro/commit/939fe159255cecf1cab5c1b3da2670d30ac8e4a7)]:
  - @astrojs/markdown-remark@0.11.0

## 1.0.0-beta.40

### Patch Changes

- [#3507](https://github.com/withastro/astro/pull/3507) [`cf2fb300`](https://github.com/withastro/astro/commit/cf2fb3004ecea4e0343fdf9e3e84884c5870835b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Silence noisy build warnings about `optimizeDeps.include`

* [#3506](https://github.com/withastro/astro/pull/3506) [`d41540cc`](https://github.com/withastro/astro/commit/d41540cc772c7003a73cc5971598e5dd1255cbc9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix issue where generated `link` tags would have an invalid closing tag

- [#3498](https://github.com/withastro/astro/pull/3498) [`4a23b5aa`](https://github.com/withastro/astro/commit/4a23b5aaedd69043635711dfdd60dd0d69dd69a8) Thanks [@matthewp](https://github.com/matthewp)! - Fixes use of import.meta.env.SITE

* [#3503](https://github.com/withastro/astro/pull/3503) [`207f58d1`](https://github.com/withastro/astro/commit/207f58d1715ac024cc7c81b76e26aa49fca5173f) Thanks [@williamtetlow](https://github.com/williamtetlow)! - Alias `from 'astro'` imports to `'@astro/types'`
  Update Deno and Netlify integrations to handle vite.resolves.alias as an array

## 1.0.0-beta.39

### Patch Changes

- [#3496](https://github.com/withastro/astro/pull/3496) [`d588bc4a`](https://github.com/withastro/astro/commit/d588bc4a9cc6baccf4d63ac74f2242735494391a) Thanks [@matthewp](https://github.com/matthewp)! - Update rollup to fix default param regression

* [#3464](https://github.com/withastro/astro/pull/3464) [`9c2ba137`](https://github.com/withastro/astro/commit/9c2ba13748b975fb4b15b28b1b8ddc5ece3ccbb0) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add warning on startup when `vite.server.fs.strict` is disabled

- [#3427](https://github.com/withastro/astro/pull/3427) [`10b25890`](https://github.com/withastro/astro/commit/10b2589093f23d5f92e0509f9d3eebfaae2d46a7) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes HMR support for inline scripts in Astro components on Linux and OSX

* [#3505](https://github.com/withastro/astro/pull/3505) [`2b35650b`](https://github.com/withastro/astro/commit/2b35650b5dca28b5cd5dd7c9bb689d0eee6a2ddf) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix newline characters in SolidJS JSX attributes (ex: multiline CSS classes)

## 1.0.0-beta.38

### Patch Changes

- [#3459](https://github.com/withastro/astro/pull/3459) [`efccebb9`](https://github.com/withastro/astro/commit/efccebb9643f927d88e6b6f592e53c7c95e7c2b6) Thanks [@matthewp](https://github.com/matthewp)! - Forces the correct mime type for CSS in HMR

* [#3486](https://github.com/withastro/astro/pull/3486) [`119ecf8d`](https://github.com/withastro/astro/commit/119ecf8d469f034eaf1b1217523954d29f492cb6) Thanks [@hippotastic](https://github.com/hippotastic)! - Fix components in markdown regressions

- [#3462](https://github.com/withastro/astro/pull/3462) [`d145b868`](https://github.com/withastro/astro/commit/d145b8689c5658671a496ffee070b428438effc3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Remove the rss() helper from getStaticPaths. Using rss() now prints an error pointing to the new @astrojs/rss documentation.

* [#3455](https://github.com/withastro/astro/pull/3455) [`e9a77d86`](https://github.com/withastro/astro/commit/e9a77d861907adccfa75811f9aaa555f186d78f8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Implements improved hydration event system, meaning hydration for client:only and nested frameworks should be see significant stability improvements

* Updated dependencies [[`119ecf8d`](https://github.com/withastro/astro/commit/119ecf8d469f034eaf1b1217523954d29f492cb6)]:
  - @astrojs/markdown-remark@0.10.2

## 1.0.0-beta.37

### Patch Changes

- [#3471](https://github.com/withastro/astro/pull/3471) [`75fa58f1`](https://github.com/withastro/astro/commit/75fa58f13fff27a872b7b85948d65e82d9e7a8eb) Thanks [@hippotastic](https://github.com/hippotastic)! - Fix using Vite env var names in Markdown

* [#3477](https://github.com/withastro/astro/pull/3477) [`429b65d6`](https://github.com/withastro/astro/commit/429b65d60bb64973f1e5867cc58f1fe07bada952) Thanks [@hippotastic](https://github.com/hippotastic)! - Prevent `*/` from breaking HTML comments in Markdown

## 1.0.0-beta.36

### Minor Changes

- [#3452](https://github.com/withastro/astro/pull/3452) [`47d1a8d5`](https://github.com/withastro/astro/commit/47d1a8d59cb3d88655de3d7658026e84843cb043) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Add content parsing helpers to imported markdown files. This exposes both the raw markdown content when using rawContent() and the parsed Astro syntax when using compiledContent()

## 1.0.0-beta.35

### Patch Changes

- [#3439](https://github.com/withastro/astro/pull/3439) [`ac3c60d4`](https://github.com/withastro/astro/commit/ac3c60d48d5c8bbfb783434cafa75b9ffb7c7a7b) Thanks [@matthewp](https://github.com/matthewp)! - Fixes importing npm packages within CSS

  This change fixes a longstanding bug where the string `VITE_ASSET` was left in CSS when trying to import CSS packages. The fix comes thanks to an upstream Vite feature that allows us to hand off most of the CSS bundling work to Vite.

* [#3438](https://github.com/withastro/astro/pull/3438) [`79b9ebc8`](https://github.com/withastro/astro/commit/79b9ebc83ab7e190bd2894338e51e7f3f41e04d2) Thanks [@userquin](https://github.com/userquin)! - Expose route dist URL on SSG

## 1.0.0-beta.34

### Patch Changes

- [#3444](https://github.com/withastro/astro/pull/3444) [`51db2b9b`](https://github.com/withastro/astro/commit/51db2b9b4efd899bdd7efc481a5f226b3b040614) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: markdown imports failing due to internal dependency issue

- Updated dependencies [[`51db2b9b`](https://github.com/withastro/astro/commit/51db2b9b4efd899bdd7efc481a5f226b3b040614)]:
  - @astrojs/markdown-remark@0.10.1

## 1.0.0-beta.33

### Patch Changes

- [#3426](https://github.com/withastro/astro/pull/3426) [`946630a1`](https://github.com/withastro/astro/commit/946630a112dca39d6afc32ef02edceda94a604cb) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Logs: Add "ssr.noExternal" hint for CSS loaded from npm packages

* [#3434](https://github.com/withastro/astro/pull/3434) [`4e3b405e`](https://github.com/withastro/astro/commit/4e3b405e9eb03f7c286234a30ca45c26e3e17fcf) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Respect user's configured vite logLevel during build

- [#3423](https://github.com/withastro/astro/pull/3423) [`463a1c21`](https://github.com/withastro/astro/commit/463a1c214779e0558bcd99c30294e1a14a97232e) Thanks [@matthewp](https://github.com/matthewp)! - Fix relative inline scripts on Windows

* [#3384](https://github.com/withastro/astro/pull/3384) [`296fff2c`](https://github.com/withastro/astro/commit/296fff2cffd4632f2d2e891069f52f6859a5c076) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix long-standing bug where a `class` attribute inside of a spread prop will cause duplicate `class` attributes

- [#3433](https://github.com/withastro/astro/pull/3433) [`4ca60e93`](https://github.com/withastro/astro/commit/4ca60e9344f882ee1a216ec66fb409c88c740641) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix build issue where hoisted scripts would be duplicated per page

* [#3422](https://github.com/withastro/astro/pull/3422) [`0209d627`](https://github.com/withastro/astro/commit/0209d6276c6ed86914b6433e223628010b6a7dfd) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates component hydration scripts to use absolute paths for script imports

- [#3410](https://github.com/withastro/astro/pull/3410) [`cfae9760`](https://github.com/withastro/astro/commit/cfae9760b252052b6189e96398b819a4337634a8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Significantally more stable behavior for "Markdown + Components" usage, which now handles component serialization much more similarly to MDX. Also supports switching between Components and Markdown without extra newlines, removes wrapping `<p>` tags from standalone components, and improves JSX expression handling.

- Updated dependencies [[`cfae9760`](https://github.com/withastro/astro/commit/cfae9760b252052b6189e96398b819a4337634a8)]:
  - @astrojs/markdown-remark@0.10.0

## 1.0.0-beta.32

### Patch Changes

- [#3407](https://github.com/withastro/astro/pull/3407) [`63735084`](https://github.com/withastro/astro/commit/63735084585735009186498db95e4bb7d3d62b90) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds a check during build to make sure routing priority is always enforced in the final dist output

* [#3398](https://github.com/withastro/astro/pull/3398) [`fb5572be`](https://github.com/withastro/astro/commit/fb5572bebd211786bc8a08eb073bc08af97287bc) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix component usage in imported markdown files

- [#3408](https://github.com/withastro/astro/pull/3408) [`b26d48d2`](https://github.com/withastro/astro/commit/b26d48d275630a0da38edcf2b6832720dc96636f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix hydration when rendering `<head>` elements inside of a component

* [#3421](https://github.com/withastro/astro/pull/3421) [`63c26c1b`](https://github.com/withastro/astro/commit/63c26c1b24a07a313e0bcf99b35089e23f0cf7fc) Thanks [@retronav](https://github.com/retronav)! - Fix GitHub Issues issue creation link.

- [#3393](https://github.com/withastro/astro/pull/3393) [`d372d29e`](https://github.com/withastro/astro/commit/d372d29ef8f540fca077f5e1318a2bbb5e7ec360) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes a bug in the canonical URL when using `1` as a route parameter in `getStaticPaths()`

* [#3417](https://github.com/withastro/astro/pull/3417) [`4de53ecc`](https://github.com/withastro/astro/commit/4de53eccef346bed843b491b7ab93987d7d85655) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: support FormData object on fetch body

* Updated dependencies [[`4de53ecc`](https://github.com/withastro/astro/commit/4de53eccef346bed843b491b7ab93987d7d85655)]:
  - @astrojs/webapi@0.12.0

## 1.0.0-beta.31

### Patch Changes

- [#3402](https://github.com/withastro/astro/pull/3402) [`0c9f770e`](https://github.com/withastro/astro/commit/0c9f770e8ab361f11549f1e24114e557fdcca65d) Thanks [@matthewp](https://github.com/matthewp)! - Include server CSS in the SSR manifest assets

* [#3406](https://github.com/withastro/astro/pull/3406) [`4007aebc`](https://github.com/withastro/astro/commit/4007aebc6aba8d732abed7c001f59e61678ea3f2) Thanks [@matthewp](https://github.com/matthewp)! - Provides a better error message when using @adobe/react-spectrum

- [#3385](https://github.com/withastro/astro/pull/3385) [`d34859d7`](https://github.com/withastro/astro/commit/d34859d75008812fcd101e197ce835bcc1ee2017) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Expose `file` and `url` properties when fetching `.astro` files with `Astro.glob()`

## 1.0.0-beta.30

### Patch Changes

- [#3392](https://github.com/withastro/astro/pull/3392) [`2939be5f`](https://github.com/withastro/astro/commit/2939be5f2d95711a2a891d77824763c7dbbf10d2) Thanks [@matthewp](https://github.com/matthewp)! - Allows vite config to override options used in the build

* [#3401](https://github.com/withastro/astro/pull/3401) [`0d3c673d`](https://github.com/withastro/astro/commit/0d3c673dd9d9431bf6e6a88c448e324033f7f2f7) Thanks [@tony-sull](https://github.com/tony-sull)! - Adding support for config.build.format to the dev server

- [#3399](https://github.com/withastro/astro/pull/3399) [`1bf12260`](https://github.com/withastro/astro/commit/1bf12260afad57f83768d040fe3917fb214aaf5f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update "building for SSR..." log for SSG users to say "building entrypoints for prerendering..."

* [#3391](https://github.com/withastro/astro/pull/3391) [`cf8015ea`](https://github.com/withastro/astro/commit/cf8015eaa2b756f4ec399e8fd7071dee7dfa9ab6) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix [#3309](https://github.com/withastro/astro/issues/3309) default logger locale behavior.

## 1.0.0-beta.29

### Patch Changes

- [#3388](https://github.com/withastro/astro/pull/3388) [`4d00473d`](https://github.com/withastro/astro/commit/4d00473dbd20e673b5c9857d500dee072bb20f99) Thanks [@matthewp](https://github.com/matthewp)! - Fixes nested style bug causing initial styles to be off

* [#3379](https://github.com/withastro/astro/pull/3379) [`0259d765`](https://github.com/withastro/astro/commit/0259d7658be82a4a5e09fb703498571d958a0569) Thanks [@matthewp](https://github.com/matthewp)! - Fixes issue with loading md pages in project with a space in folder name

- [#3376](https://github.com/withastro/astro/pull/3376) [`b1230152`](https://github.com/withastro/astro/commit/b1230152ff67ca9c184b24023651f4f8739097b8) Thanks [@matthewp](https://github.com/matthewp)! - Allow using aliases for hydrated scripts

## 1.0.0-beta.28

### Patch Changes

- [#3344](https://github.com/withastro/astro/pull/3344) [`46cd8b9e`](https://github.com/withastro/astro/commit/46cd8b9eb4c5e9b526a6cba288070630b8dcbbf5) Thanks [@matthewp](https://github.com/matthewp)! - Fix for APIRoute type

* [#3350](https://github.com/withastro/astro/pull/3350) [`e48aa2fd`](https://github.com/withastro/astro/commit/e48aa2fd1ee4a3637647990182e1f3aa9384e259) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve error hints for packages that should be added to `vite.ssr.noExternal`

- [#3348](https://github.com/withastro/astro/pull/3348) [`43e411ee`](https://github.com/withastro/astro/commit/43e411eed8308015d517de9a0d1e036dc06d34a0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update default `vite.optimizeDeps.exclude` to keep `node-fetch` from being optimized

* [#3336](https://github.com/withastro/astro/pull/3336) [`ccea6a0a`](https://github.com/withastro/astro/commit/ccea6a0a1ae55ab057d94f60014e2183013b5f60) Thanks [@matthewp](https://github.com/matthewp)! - Fixes HMR of hoisted script tags

- [#3331](https://github.com/withastro/astro/pull/3331) [`e22f7364`](https://github.com/withastro/astro/commit/e22f7364ceb3e4b057d89bbb32111bcffb7ae967) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes an issue preventing custom 404 pages in dev

* [#3339](https://github.com/withastro/astro/pull/3339) [`3dc68e14`](https://github.com/withastro/astro/commit/3dc68e148e05a36694cb5759f44cc5349bd66294) Thanks [@thepassle](https://github.com/thepassle)! - fixes injectscript in ssr mode

- [#3332](https://github.com/withastro/astro/pull/3332) [`d04928e8`](https://github.com/withastro/astro/commit/d04928e8f20435cf69d1c171523aa152601cfe21) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an `import from '../core/build/types';` error

* [`f40705d9`](https://github.com/withastro/astro/commit/f40705d906951a2ac16a89290bcadd597fe4cbeb) Thanks [@matthewp](https://github.com/matthewp)! - Fix for swallowed SolidJS errors

- [#3300](https://github.com/withastro/astro/pull/3300) [`b463ddb3`](https://github.com/withastro/astro/commit/b463ddb3ce43641536dee4413ac5bb8ebcbdf608) Thanks [@tony-sull](https://github.com/tony-sull)! - Resolve .astro components by module ID to support the use of Astro + framework components in an NPM package

* [#3352](https://github.com/withastro/astro/pull/3352) [`86855061`](https://github.com/withastro/astro/commit/8685506174962329fb7a76367ea3cf32ea0aa48c) Thanks [@JuanM04](https://github.com/JuanM04)! - Export `ViteUserConfig` type

- [#3337](https://github.com/withastro/astro/pull/3337) [`678c2b75`](https://github.com/withastro/astro/commit/678c2b7523c7f10cfdf2eb5a73aa2bbb7e5cbc07) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: remove hydration failures on React v18 by exposing the "client" directive from Astro core.

## 1.0.0-beta.27

### Patch Changes

- [#3178](https://github.com/withastro/astro/pull/3178) [`19e1686b`](https://github.com/withastro/astro/commit/19e1686b8701ea7c4f8449958911035ae29cb53a) Thanks [@tony-sull](https://github.com/tony-sull)! - Fixes an issue that was breaking asset and stylesheet URLs when building for a subpath

* [#3299](https://github.com/withastro/astro/pull/3299) [`8021998b`](https://github.com/withastro/astro/commit/8021998bb6011e31aa736abeafa4f1cf8f5a180c) Thanks [@matthewp](https://github.com/matthewp)! - Update to telemetry to include AstroConfig keys used

* Updated dependencies [[`8021998b`](https://github.com/withastro/astro/commit/8021998bb6011e31aa736abeafa4f1cf8f5a180c)]:
  - @astrojs/telemetry@0.1.2

## 1.0.0-beta.26

### Patch Changes

- [#3289](https://github.com/withastro/astro/pull/3289) [`61e1a267`](https://github.com/withastro/astro/commit/61e1a267a8d4653287cf8bbd2cff493699ac7d7f) Thanks [@matthewp](https://github.com/matthewp)! - Implements the Astro.response RFC

* [#3304](https://github.com/withastro/astro/pull/3304) [`3d901ca5`](https://github.com/withastro/astro/commit/3d901ca59d152ba82fa1471c0e45c9e576f5f864) Thanks [@matthewp](https://github.com/matthewp)! - Fixes regression that prevented passing classes to islands

## 1.0.0-beta.25

### Patch Changes

- [#3272](https://github.com/withastro/astro/pull/3272) [`6643a393`](https://github.com/withastro/astro/commit/6643a3931d45e63363599bb0cf7b2b2951266cfb) Thanks [@matthewp](https://github.com/matthewp)! - Implements the Dynamic Route API RFC

## 1.0.0-beta.24

### Patch Changes

- [#3286](https://github.com/withastro/astro/pull/3286) [`e5f6de4e`](https://github.com/withastro/astro/commit/e5f6de4edbdfe2ae2f6e975511a5a571633e2fd6) Thanks [@thepassle](https://github.com/thepassle)! - Adds pages param to the astro:build:setup integration hook

## 1.0.0-beta.23

### Patch Changes

- [`1032e450`](https://github.com/withastro/astro/commit/1032e450cc224e603e8e69ef1422de6dbf184dd2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Introduce new @astrojs/rss package for RSS feed generation! This also adds a new global env variable for your project's configured "site": import.meta.env.SITE. This is consumed by the RSS feed helper to generate the correct canonical URL.

* [`1032e450`](https://github.com/withastro/astro/commit/1032e450cc224e603e8e69ef1422de6dbf184dd2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Internal: removed `shorthash`

- [`1032e450`](https://github.com/withastro/astro/commit/1032e450cc224e603e8e69ef1422de6dbf184dd2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Internal: replaces `serialize-javascript` with `devalue`

* [`82345fdd`](https://github.com/withastro/astro/commit/82345fdd54b7d035657c584ecfc3d98dbaecfc24) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Deprecate the markdown component in SSR.

  This was not working before, so now we make it official by throwing with a clean error message. See https://docs.astro.build/en/guides/markdown-content/#markdown-component to learn more.

## 1.0.0-beta.22

### Patch Changes

- [#3275](https://github.com/withastro/astro/pull/3275) [`8f8f05c1`](https://github.com/withastro/astro/commit/8f8f05c1b99d073a43af3020ba3922ea2d5b466d) Thanks [@matthewp](https://github.com/matthewp)! - Fixes regression in passing JS args to islands

* [#3262](https://github.com/withastro/astro/pull/3262) [`adada1ba`](https://github.com/withastro/astro/commit/adada1ba0169516495ca19107f974aa0d4cf1f49) Thanks [@thepassle](https://github.com/thepassle)! - Adds astro:build:ssr integration hook

* Updated dependencies [[`8f8f05c1`](https://github.com/withastro/astro/commit/8f8f05c1b99d073a43af3020ba3922ea2d5b466d), [`6d5ef41b`](https://github.com/withastro/astro/commit/6d5ef41b1ed77ccc67f71e91adeab63a50a494a8)]:
  - @astrojs/markdown-remark@0.9.4
  - @astrojs/telemetry@0.1.1

## 1.0.0-beta.21

### Patch Changes

- [#3244](https://github.com/withastro/astro/pull/3244) [`48a35e60`](https://github.com/withastro/astro/commit/48a35e6042a6634c836ec333d18801e9d603b328) Thanks [@matthewp](https://github.com/matthewp)! - Consolidates hydration scripts into one

* [#3256](https://github.com/withastro/astro/pull/3256) [`f76038ac`](https://github.com/withastro/astro/commit/f76038ac7db986a13701fd316e53142b52e011c8) Thanks [@matthewp](https://github.com/matthewp)! - Adds anonymous telemetry data to the cli

- [#3234](https://github.com/withastro/astro/pull/3234) [`de123b28`](https://github.com/withastro/astro/commit/de123b28b3ff398b800cb598f20326ca85a0fb60) Thanks [@JuanM04](https://github.com/JuanM04)! - Moved some type from `astro` to `@astrojs/markdown-remark`

- Updated dependencies [[`de123b28`](https://github.com/withastro/astro/commit/de123b28b3ff398b800cb598f20326ca85a0fb60), [`f76038ac`](https://github.com/withastro/astro/commit/f76038ac7db986a13701fd316e53142b52e011c8), [`de123b28`](https://github.com/withastro/astro/commit/de123b28b3ff398b800cb598f20326ca85a0fb60)]:
  - @astrojs/markdown-remark@0.9.3
  - @astrojs/telemetry@0.1.0

## 1.0.0-beta.20

### Patch Changes

- [#3241](https://github.com/withastro/astro/pull/3241) [`d25dc4c4`](https://github.com/withastro/astro/commit/d25dc4c4484340a794eaac1e6d18cc5aa2071524) Thanks [@tony-sull](https://github.com/tony-sull)! - Fix a bug in define:vars preventing variables from being included in rendered styles

## 1.0.0-beta.19

### Patch Changes

- [#3224](https://github.com/withastro/astro/pull/3224) [`3d6e382b`](https://github.com/withastro/astro/commit/3d6e382b583646f047836b703a867c3b29ac91b2) Thanks [@JuanM04](https://github.com/JuanM04)! - Replaced deprecated String.substr with String.slice

* [#3221](https://github.com/withastro/astro/pull/3221) [`f23d6c52`](https://github.com/withastro/astro/commit/f23d6c528ed5fbb37614789a5abd480ee731cd0f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: bump Astro core to update available starter templates. Find new "Just the Basics" option in create-astro!

## 1.0.0-beta.18

### Patch Changes

- [#3207](https://github.com/withastro/astro/pull/3207) [`22cb4b7b`](https://github.com/withastro/astro/commit/22cb4b7b320428378633a3044f07a548dbbc8dc2) Thanks [@matthewp](https://github.com/matthewp)! - Disables file watching during the build

* [#3191](https://github.com/withastro/astro/pull/3191) [`205d1f07`](https://github.com/withastro/astro/commit/205d1f07f13ae60f21954648d530895d479e42cf) Thanks [@JuanM04](https://github.com/JuanM04)! - Added better types to importing Markdown

- [#3183](https://github.com/withastro/astro/pull/3183) [`7a61977d`](https://github.com/withastro/astro/commit/7a61977db11c4472f9210b8de22ec281870e5dc3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Support "astro add" before installing project dependencies

* [#3209](https://github.com/withastro/astro/pull/3209) [`fdd607c5`](https://github.com/withastro/astro/commit/fdd607c5755034edf262e7b275732519328a33b2) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add `is:raw` to AstroBuiltinAttributes

- [#3198](https://github.com/withastro/astro/pull/3198) [`1a86e77c`](https://github.com/withastro/astro/commit/1a86e77c37109f6a6006d6acb00eb52b4a54683c) Thanks [@JuanM04](https://github.com/JuanM04)! - Markdown file.url now respects `trailingSlash` and `base`

* [#3187](https://github.com/withastro/astro/pull/3187) [`75dab3ca`](https://github.com/withastro/astro/commit/75dab3ca3de33da825c2a9695c2ad46cc104b7b1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: remove online editor configs (stackblitz and code sandbox) from create-astro output

- [#3205](https://github.com/withastro/astro/pull/3205) [`e4bb2767`](https://github.com/withastro/astro/commit/e4bb2767d5f44b0a97bdbd1349b9f329b324b78a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Added Astro attributes to SVG elements in JSX definition

* [#3170](https://github.com/withastro/astro/pull/3170) [`19667c45`](https://github.com/withastro/astro/commit/19667c45f318ec13cdc2b51016f3fa3487b2a32d) Thanks [@matthewp](https://github.com/matthewp)! - Netlify Edge: Forward requests for static assets

- [#3186](https://github.com/withastro/astro/pull/3186) [`2b702d6a`](https://github.com/withastro/astro/commit/2b702d6abaa296c0eb77d3fd1a8231a186341b1f) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: astro add generating "astro.config.mjs" outside project root

## 1.0.0-beta.17

### Patch Changes

- [#3171](https://github.com/withastro/astro/pull/3171) [`908fffb5`](https://github.com/withastro/astro/commit/908fffb5ec2de4efb55d03a69381e3aa376e4c42) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix various edge cases in the compiler, upgrading to `@astrojs/compiler@0.14.2`. Read the [full changelog](https://github.com/withastro/compiler/blob/main/packages/compiler/CHANGELOG.md#0142).

## 1.0.0-beta.16

### Patch Changes

- [#3156](https://github.com/withastro/astro/pull/3156) [`637919c8`](https://github.com/withastro/astro/commit/637919c8b63df1608e88d153742db098722265d8) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds subpath to assets/scripts when statically generating

## 1.0.0-beta.15

### Patch Changes

- [#3138](https://github.com/withastro/astro/pull/3138) [`37a7a834`](https://github.com/withastro/astro/commit/37a7a8347ce49cb773ed907260ffe169bd3aa15f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - General HMR Improvements, including new HMR support for framework components that are only server-side rendered (do not have a `client:*` directive)

* [#3164](https://github.com/withastro/astro/pull/3164) [`e85b16e2`](https://github.com/withastro/astro/commit/e85b16e2b3d846333f542139c82640de19bfd2f5) Thanks [@matthewp](https://github.com/matthewp)! - Fixes lit when running in SSR

## 1.0.0-beta.14

### Patch Changes

- [#3152](https://github.com/withastro/astro/pull/3152) [`9ba1f4f8`](https://github.com/withastro/astro/commit/9ba1f4f8251155b69398a8af22d6ab8587b96120) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix JSX expression inconsistencies within markdown files

* [#3141](https://github.com/withastro/astro/pull/3141) [`0247b542`](https://github.com/withastro/astro/commit/0247b54270e2befab91b9e65029ba929ac26381d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Astro internals: remove all legacy build logic from the codebase, now that the legacy build flag has been removed

* Updated dependencies [[`9ba1f4f8`](https://github.com/withastro/astro/commit/9ba1f4f8251155b69398a8af22d6ab8587b96120)]:
  - @astrojs/markdown-remark@0.9.2

## 1.0.0-beta.13

### Patch Changes

- [#3130](https://github.com/withastro/astro/pull/3130) [`394ab905`](https://github.com/withastro/astro/commit/394ab9054714586c1b5bb163f02fe17412527ebc) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates `<Code />` component to cache and reuse Shiki highlighters

* [#3087](https://github.com/withastro/astro/pull/3087) [`e0f838ca`](https://github.com/withastro/astro/commit/e0f838ca393c974e80f23a07b04c3a85f8829221) Thanks [@tony-sull](https://github.com/tony-sull)! - Adds support for numeric route parameters in getStaticPaths()

- [#3116](https://github.com/withastro/astro/pull/3116) [`44bacd20`](https://github.com/withastro/astro/commit/44bacd20116e69459c6cc4a8c104122a2d5adb67) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: Astro components used in dynamically imported markdown (ex. Astro.glob('\*.md') will now retain their CSS styles in dev and production builds

* [#3108](https://github.com/withastro/astro/pull/3108) [`ef198ff8`](https://github.com/withastro/astro/commit/ef198ff8351ac8fbc868e209f9cd410dc8b6f265) Thanks [@FredKSchott](https://github.com/FredKSchott)! - shiki: Add `diff` symbol handling to disable `user-select` on `+`/`-` symbols.

- [#3137](https://github.com/withastro/astro/pull/3137) [`facf8016`](https://github.com/withastro/astro/commit/facf8016e249058d6e5cce7a0e7ef6c42fc854ad) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix: show correct stacktrace on dev server errors, instead of cryptic "package.json" error

- Updated dependencies [[`ef198ff8`](https://github.com/withastro/astro/commit/ef198ff8351ac8fbc868e209f9cd410dc8b6f265)]:
  - @astrojs/markdown-remark@0.9.1

## 1.0.0-beta.12

### Patch Changes

- [#3113](https://github.com/withastro/astro/pull/3113) [`1687009f`](https://github.com/withastro/astro/commit/1687009f31fa23f193cbbf95fd018a51f3f3c671) Thanks [@matthewp](https://github.com/matthewp)! - Fixes client:only CSS

## 1.0.0-beta.11

### Patch Changes

- [#3036](https://github.com/withastro/astro/pull/3036) [`4ac0d5d4`](https://github.com/withastro/astro/commit/4ac0d5d4e73aa41cb2269f1428c4eed5e69b5947) Thanks [@matthewp](https://github.com/matthewp)! - Support runtime markdown parsing

* [#3036](https://github.com/withastro/astro/pull/3036) [`4ac0d5d4`](https://github.com/withastro/astro/commit/4ac0d5d4e73aa41cb2269f1428c4eed5e69b5947) Thanks [@matthewp](https://github.com/matthewp)! - Fixes usage of the Markdown component in SSR

## 1.0.0-beta.10

### Patch Changes

- [#3095](https://github.com/withastro/astro/pull/3095) [`5acf77dd`](https://github.com/withastro/astro/commit/5acf77dd22be95e33ff838383a2c1790f484e380) Thanks [@matthewp](https://github.com/matthewp)! - Fixes rendering of "undefined" on custom element children

- Updated dependencies [[`5acf77dd`](https://github.com/withastro/astro/commit/5acf77dd22be95e33ff838383a2c1790f484e380)]:
  - @astrojs/webapi@0.11.1

## 1.0.0-beta.9

### Minor Changes

- [#3078](https://github.com/withastro/astro/pull/3078) [`d33e1778`](https://github.com/withastro/astro/commit/d33e17781775545f8e6a40ee7a2b36f06e9b5c4e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Support the "del" API method, because "delete" is a reserved word.

* [#3078](https://github.com/withastro/astro/pull/3078) [`d33e1778`](https://github.com/withastro/astro/commit/d33e17781775545f8e6a40ee7a2b36f06e9b5c4e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add support for an "all" API method, to handle all requests

### Patch Changes

- [#3094](https://github.com/withastro/astro/pull/3094) [`564caf24`](https://github.com/withastro/astro/commit/564caf24c23a40c0fa7dc75ff3374492761d88fb) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Expose "metadata" to component integrations renderToStaticMarkup function

* [#3068](https://github.com/withastro/astro/pull/3068) [`81e210e0`](https://github.com/withastro/astro/commit/81e210e03c7d88c7b80b0b11a532c5b8e03cef93) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an issue around build not respecting your base config

* Updated dependencies [[`53162534`](https://github.com/withastro/astro/commit/53162534450e160f65b95e7ef1523a106347ca28)]:
  - @astrojs/markdown-remark@0.9.0

## 1.0.0-beta.8

### Patch Changes

- [#3066](https://github.com/withastro/astro/pull/3066) [`5b3464a8`](https://github.com/withastro/astro/commit/5b3464a803ba2aa00a4e248dc3ebceb5924cc073) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix bug with inconsistent url search params

* [#2970](https://github.com/withastro/astro/pull/2970) [`b835e285`](https://github.com/withastro/astro/commit/b835e285defb4f31fc5ac1039c7f607c07f3c00b) Thanks [@JuanM04](https://github.com/JuanM04)! - Improved markdown config type checking

* Updated dependencies [[`b835e285`](https://github.com/withastro/astro/commit/b835e285defb4f31fc5ac1039c7f607c07f3c00b)]:
  - @astrojs/markdown-remark@0.8.2

## 1.0.0-beta.7

### Patch Changes

- [`815d62f1`](https://github.com/withastro/astro/commit/815d62f151a36fef7d09590d4962ca71bda61b32) Thanks [@FredKSchott](https://github.com/FredKSchott)! - no changes.

## 1.0.0-beta.6

### Patch Changes

- [#3004](https://github.com/withastro/astro/pull/3004) [`9724d844`](https://github.com/withastro/astro/commit/9724d844b32fb30c91ec3d060421bbb0cc36428a) Thanks [@tony-sull](https://github.com/tony-sull)! - Fix bug causing `astro preview` server to close immediately

* [#3028](https://github.com/withastro/astro/pull/3028) [`982f64f6`](https://github.com/withastro/astro/commit/982f64f69a82d3c5f99b326a2ddcd368435d9b4a) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated esbuild

## 1.0.0-beta.5

### Patch Changes

- [#3026](https://github.com/withastro/astro/pull/3026) [`4b0f27d9`](https://github.com/withastro/astro/commit/4b0f27d9ffa6ec90e898de504588ba92630064c0) Thanks [@matthewp](https://github.com/matthewp)! - Fix for adding set-cookie multiple times

* [#3020](https://github.com/withastro/astro/pull/3020) [`c773dcde`](https://github.com/withastro/astro/commit/c773dcde317d46e3f8e68088cda580c30bc8e1da) Thanks [@tony-sull](https://github.com/tony-sull)! - Add support for advanced CSS imports with `?raw` and `?url`

  > ⚠️WARNING⚠️:
  > Be careful when bypassing Astro's built-in CSS bundling! Styles won't be included in the built output - this is best used in combination with `set:html` to inline styles directly into the built HTML page.

- [#3022](https://github.com/withastro/astro/pull/3022) [`8c04ff1f`](https://github.com/withastro/astro/commit/8c04ff1f0bea42d033832ce5047076e315cb38a3) Thanks [@matthewp](https://github.com/matthewp)! - Allows adapters to export default

* [#3021](https://github.com/withastro/astro/pull/3021) [`7e9d82d7`](https://github.com/withastro/astro/commit/7e9d82d75e4b19993b4246d3546169c8476702c4) Thanks [@matthewp](https://github.com/matthewp)! - Warn when attempting to access headers in SSG mode

## 1.0.0-beta.4

### Patch Changes

- [#3001](https://github.com/withastro/astro/pull/3001) [`25cc9218`](https://github.com/withastro/astro/commit/25cc9218f8bfe0b0d1645fb869929d7fc89042c8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix relative config handling with the `--config` flag

* [#3008](https://github.com/withastro/astro/pull/3008) [`8bd49c95`](https://github.com/withastro/astro/commit/8bd49c95365f7bbce41e19b7e8658ad639c22f31) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated integrations' `astro:build:done` hook: now it matches the client dist when using SSR

- [#3011](https://github.com/withastro/astro/pull/3011) [`c6f8bce7`](https://github.com/withastro/astro/commit/c6f8bce7c35cc4fd450fe1b6cc8297a81e413b8e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes dynamic routes in the Netlify adapter

* [#2958](https://github.com/withastro/astro/pull/2958) [`d0777ad3`](https://github.com/withastro/astro/commit/d0777ad3aff0084d7fc0e159ac32ebea062d921c) Thanks [@aFuzzyBear](https://github.com/aFuzzyBear)! - Add `astro docs` command which opens the Astro docs in your preferred browser.

## 1.0.0-beta.3

### Patch Changes

- [#3004](https://github.com/withastro/astro/pull/3004) [`9724d844`](https://github.com/withastro/astro/commit/9724d844b32fb30c91ec3d060421bbb0cc36428a) Thanks [@tony-sull](https://github.com/tony-sull)! - Fix bug causing `astro preview` server to close immediately

* [#3006](https://github.com/withastro/astro/pull/3006) [`68e1e2dd`](https://github.com/withastro/astro/commit/68e1e2dd31db2bdf073c30e3ff48b7f54dd61d8d) Thanks [@matthewp](https://github.com/matthewp)! - Fixes dynamic API routes in SSR

## 1.0.0-beta.2

### Patch Changes

- [`572ca3dc`](https://github.com/withastro/astro/commit/572ca3dcbeb754d026ef322c5085c6d2b9054347) Thanks [@FredKSchott](https://github.com/FredKSchott)! - fix markdown issue with parsing components in setup

## 1.0.0-beta.1

### Patch Changes

- [`bc12edf0`](https://github.com/withastro/astro/commit/bc12edf09c9a217b02716cf9fd8a747cd5d28c95) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add missing entry to "files" field in package.json

## 1.0.0-beta.0

### Major Changes

- [#2979](https://github.com/withastro/astro/pull/2979) [`9d7a4b59`](https://github.com/withastro/astro/commit/9d7a4b59b53f8cb274266f5036d1cef841750252) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Welcome to the Astro v1.0.0 Beta! Read the [official announcement](https://astro.build/blog/astro-1-beta-release/) for more details.

## 0.26.1

### Patch Changes

- [#2978](https://github.com/withastro/astro/pull/2978) [`3f0bc5af`](https://github.com/withastro/astro/commit/3f0bc5af57550ee28697ba4910208276bd23fb3f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix edge case where default slots could be rendered too early for Astro components. Slots are now only rendered on demand.

* [#2973](https://github.com/withastro/astro/pull/2973) [`75919537`](https://github.com/withastro/astro/commit/75919537be17f3c11991d5bfc24a7d75b7c32e36) Thanks [@tony-sull](https://github.com/tony-sull)! - Updates the @docs default value listed for config.publicDir and config.outputDir

- [#2974](https://github.com/withastro/astro/pull/2974) [`82445879`](https://github.com/withastro/astro/commit/824458790a45e9b476e8acf6c406c49d28740dea) Thanks [@JuanM04](https://github.com/JuanM04)! - Prevent CLI from hanging

- Updated dependencies [[`ad3c3916`](https://github.com/withastro/astro/commit/ad3c391696c5b9cc350a22831717682e73e25776)]:
  - @astrojs/markdown-remark@0.8.1

## 0.26.0

### Minor Changes

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Implement RFC [#0017](https://github.com/withastro/rfcs/blob/main/proposals/0017-markdown-content-redesign.md)

  - New Markdown API
  - New `Astro.glob()` API
  - **BREAKING CHANGE:** Removed `Astro.fetchContent()` (replaced by `Astro.glob()`)

  ```diff
  // v0.25
  - let allPosts = Astro.fetchContent('./posts/*.md');
  // v0.26+
  + let allPosts = await Astro.glob('./posts/*.md');
  ```

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Implement [RFC0016](https://github.com/withastro/rfcs/blob/main/proposals/0016-style-script-defaults.md) which changes the default behavior of `script`, introduces `is:inline`, and changes `<style global>` to `<style is:global>`

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Implements the Astro.request RFC

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update config options to resepect [RFC0019](https://github.com/withastro/rfcs/blob/main/proposals/0019-config-finalization.md)

### Patch Changes

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Allow components to return a Response

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - `--experimental-ssr` now is only required when using a 3rd-party adapter

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve `Astro.slots` API to support passing arguments to function-based slots.

  This allows for more ergonomic utility components that accept a callback function as a child.

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fixes non-GET API routes in dev with Node 14

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update CLI error format and style

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update `@astrojs/compiler`, fixing some bugs related to RegExp usage in frontmatter

- [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add a Deno adapter for SSR

* [`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix for copying public when using SSR and not client JS

* Updated dependencies [[`e425f896`](https://github.com/withastro/astro/commit/e425f896b668d98033ad3b998b50c1f28bc7f6ee)]:
  - @astrojs/markdown-remark@0.8.0

## 0.25.4

### Patch Changes

- [#2907](https://github.com/withastro/astro/pull/2907) [`22b1432e`](https://github.com/withastro/astro/commit/22b1432e3eed6ff40a0ab383c8f1f06f0df10d62) Thanks [@delucis](https://github.com/delucis)! - Fix typing of `integrations` array in user config

## 0.25.3

### Patch Changes

- [#2918](https://github.com/withastro/astro/pull/2918) [`77354c89`](https://github.com/withastro/astro/commit/77354c89bd606beba71231cce6ce935905de68a7) Thanks [@matthewp](https://github.com/matthewp)! - Prevent CSS from being added to the wrong pages

## 0.25.2

### Patch Changes

- [#2894](https://github.com/withastro/astro/pull/2894) [`9d6e0b5d`](https://github.com/withastro/astro/commit/9d6e0b5dbac1e5c31f580c6234e977a3a3a4918f) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add the "--experimental-integrations" flag to enable 3rd-party integrations.

* [#2893](https://github.com/withastro/astro/pull/2893) [`f2684512`](https://github.com/withastro/astro/commit/f26845126863e7566e43f118af5d4eb2d991733c) Thanks [@FredKSchott](https://github.com/FredKSchott)! - tailwind: add a default "contents" configuration that works for most Astro projects

## 0.25.1

### Patch Changes

- [#2891](https://github.com/withastro/astro/pull/2891) [`a0d67b1d`](https://github.com/withastro/astro/commit/a0d67b1d252a7ecbebb3d39a24ec11d723f6303e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add missing `execa` dependency

## 0.25.0

### Minor Changes

- [#2849](https://github.com/withastro/astro/pull/2849) [`72ef7ae6`](https://github.com/withastro/astro/commit/72ef7ae64a6d0fd17077bf6920ce11613116b659) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Introduce new `astro add` command to automatically configure integrations.

  ```shell
  npx astro add
  ```

* [#2833](https://github.com/withastro/astro/pull/2833) [`79545412`](https://github.com/withastro/astro/commit/7954541291a3dd7adbc1d5610e0c2e615d3dde46) Thanks [@natemoo-re](https://github.com/natemoo-re)! - This PR introduces a new internal CSS parser for `@astrojs/compiler`. See [`withastro/compiler#329`](https://github.com/withastro/compiler/pull/329) for more details.

  This fixes Astro's support for modern CSS syntax like `@container`, `@layer`, and nesting. **Note** While Astro now correctly parses this modern syntax, it does not automatically compile features for browser compatability purposes.

- [#2824](https://github.com/withastro/astro/pull/2824) [`0a3d3e51`](https://github.com/withastro/astro/commit/0a3d3e51a66af80fa949ba0f5e2104439d2be634) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Change shiki to our default markdown syntax highlighter. This includes updates to all relevant starter projects that used Prism-specific styles.

### Patch Changes

- [#2879](https://github.com/withastro/astro/pull/2879) [`80034c6c`](https://github.com/withastro/astro/commit/80034c6cbc89761618847e6df43fd49560a05aa9) Thanks [@matthewp](https://github.com/matthewp)! - Netlify Adapter

  This change adds a Netlify adapter that uses Netlify Functions. You can use it like so:

  ```js
  import { defineConfig } from 'astro/config';
  import netlify from '@astrojs/netlify/functions';

  export default defineConfig({
    adapter: netlify(),
  });
  ```

* [#2871](https://github.com/withastro/astro/pull/2871) [`5029382a`](https://github.com/withastro/astro/commit/5029382a8cab17f048372ee878d0778c89998009) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix a bug where tailwind integration wouldn't apply to markdown pages

- [#2852](https://github.com/withastro/astro/pull/2852) [`96372e6b`](https://github.com/withastro/astro/commit/96372e6beb976b57a8c52fd7c65f126899325160) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix "isSelfAccepting" exception when using the new @astrojs/react integration in development

* [#2798](https://github.com/withastro/astro/pull/2798) [`4c25a1c2`](https://github.com/withastro/astro/commit/4c25a1c2eacf897427a7d6dac3bf476ef56799de) Thanks [@matthewp](https://github.com/matthewp)! - Implement APIs for headers for SSR flag

- [#2855](https://github.com/withastro/astro/pull/2855) [`5e52814d`](https://github.com/withastro/astro/commit/5e52814d97a5723dbe7ebb32fbe040a7a4c0ea77) Thanks [@matthewp](https://github.com/matthewp)! - Adds support for the Node adapter (SSR)

  This provides the first SSR adapter available using the `integrations` API. It is a Node.js adapter that can be used with the `http` module or any framework that wraps it, like Express.

  In your astro.config.mjs use:

  ```js
  import nodejs from '@astrojs/node';

  export default {
    adapter: nodejs(),
  };
  ```

  After performing a build there will be a `dist/server/entry.mjs` module that works like a middleware function. You can use with any framework that supports the Node `request` and `response` objects. For example, with Express you can do:

  ```js
  import express from 'express';
  import { handler as ssrHandler } from '@astrojs/node';

  const app = express();
  app.use(handler);

  app.listen(8080);
  ```

* [#2859](https://github.com/withastro/astro/pull/2859) [`c781b12f`](https://github.com/withastro/astro/commit/c781b12f87398d51a6ecf5dcb8b35afb08591c29) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure private, internal APIs are not enumerable

- [#2835](https://github.com/withastro/astro/pull/2835) [`77ebab8b`](https://github.com/withastro/astro/commit/77ebab8bb27d67bc45a5af160d6b545521897802) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix missing `postcss-load-config` dependency

* [#2878](https://github.com/withastro/astro/pull/2878) [`2db97f10`](https://github.com/withastro/astro/commit/2db97f10dc50f9498413181b78c477fe8833895b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Move the built-in `Prism` component from `astro/components` to `@astrojs/prism/component`.

- [#2857](https://github.com/withastro/astro/pull/2857) [`1061d647`](https://github.com/withastro/astro/commit/1061d6477af328e93c9a727e70900ae20c0116c8) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve granularity of production build logs. This now lists:
  - the "data collection" build step, with timeout warnings for larger imports. This is useful for understanding large `import.meta.glob` calls.
  - the Vite client bundling step. This logs all Vite production build info to clarify what assets are built alongside your HTML.
  - the route generation step, complete with all output HTML files for a given input file. This is especially useful when debugging `getStaticPaths`.
  - fixes "0 pages in Infinityms" log when building to SSR

* [#2825](https://github.com/withastro/astro/pull/2825) [`1cd7184c`](https://github.com/withastro/astro/commit/1cd7184ca6fa6e60a69918e461f42c055e8a795e) Thanks [@hlynursmari1](https://github.com/hlynursmari1)! - Fix island deduplication ignoring props.Re-resolves an issue initially patched in https://github.com/withastro/astro/pull/846 but seemingly lost in the 0.21.0 mega-merge (https://github.com/withastro/astro/commit/d84bfe719a546ad855640338d5ed49ad3aa4ccb4).This change makes the component render step account for all props, even if they don't affect the generated HTML, when deduplicating island mounts.

- [#2873](https://github.com/withastro/astro/pull/2873) [`e4025d1f`](https://github.com/withastro/astro/commit/e4025d1f530310d6ab951109f4f53878a307471a) Thanks [@matthewp](https://github.com/matthewp)! - Improves the build by building to a single file for rendering

* [#2815](https://github.com/withastro/astro/pull/2815) [`7b9d042d`](https://github.com/withastro/astro/commit/7b9d042dde0c6ae74225de208222e0addf5f4989) Thanks [@matthewp](https://github.com/matthewp)! - Allows dynamic routes in SSR to avoid implementing getStaticPaths

- [#2875](https://github.com/withastro/astro/pull/2875) [`55712277`](https://github.com/withastro/astro/commit/5571227718442e1ec38f4553863b6160b74df722) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Generalize output assets to avoid adblocker false positives

* [#2848](https://github.com/withastro/astro/pull/2848) [`981e2a83`](https://github.com/withastro/astro/commit/981e2a839b5a0292513bf2009216250f2a8730eb) Thanks [@FredKSchott](https://github.com/FredKSchott)! - add missing injected "page" scripts into markdown pages

- [#2872](https://github.com/withastro/astro/pull/2872) [`098f6f6b`](https://github.com/withastro/astro/commit/098f6f6b06396441c576dc689d8552629ef260e1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `isSelfAccepting` errors when using the Preact integration with the Astro dev server

- Updated dependencies [[`0a3d3e51`](https://github.com/withastro/astro/commit/0a3d3e51a66af80fa949ba0f5e2104439d2be634), [`2db97f10`](https://github.com/withastro/astro/commit/2db97f10dc50f9498413181b78c477fe8833895b), [`d763ec18`](https://github.com/withastro/astro/commit/d763ec183ea391ad79ca16bf2b2e76848fc1180c)]:
  - @astrojs/markdown-remark@0.7.0
  - @astrojs/prism@0.4.1

## 0.25.0-next.3

### Patch Changes

- [#2871](https://github.com/withastro/astro/pull/2871) [`5029382a`](https://github.com/withastro/astro/commit/5029382a8cab17f048372ee878d0778c89998009) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix a bug where tailwind integration wouldn't apply to markdown pages

* [#2855](https://github.com/withastro/astro/pull/2855) [`5e52814d`](https://github.com/withastro/astro/commit/5e52814d97a5723dbe7ebb32fbe040a7a4c0ea77) Thanks [@matthewp](https://github.com/matthewp)! - Adds support for the Node adapter (SSR)

  This provides the first SSR adapter available using the `integrations` API. It is a Node.js adapter that can be used with the `http` module or any framework that wraps it, like Express.

  In your astro.config.mjs use:

  ```js
  import nodejs from '@astrojs/node';

  export default {
    adapter: nodejs(),
  };
  ```

  After performing a build there will be a `dist/server/entry.mjs` module that works like a middleware function. You can use with any framework that supports the Node `request` and `response` objects. For example, with Express you can do:

  ```js
  import express from 'express';
  import { handler as ssrHandler } from '@astrojs/node';

  const app = express();
  app.use(handler);

  app.listen(8080);
  ```

- [#2859](https://github.com/withastro/astro/pull/2859) [`c781b12f`](https://github.com/withastro/astro/commit/c781b12f87398d51a6ecf5dcb8b35afb08591c29) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Ensure private, internal APIs are not enumerable

* [#2878](https://github.com/withastro/astro/pull/2878) [`2db97f10`](https://github.com/withastro/astro/commit/2db97f10dc50f9498413181b78c477fe8833895b) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Move the built-in `Prism` component from `astro/components` to `@astrojs/prism/component`.

- [#2857](https://github.com/withastro/astro/pull/2857) [`1061d647`](https://github.com/withastro/astro/commit/1061d6477af328e93c9a727e70900ae20c0116c8) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Improve granularity of production build logs. This now lists:
  - the "data collection" build step, with timeout warnings for larger imports. This is useful for understanding large `import.meta.glob` calls.
  - the Vite client bundling step. This logs all Vite production build info to clarify what assets are built alongside your HTML.
  - the route generation step, complete with all output HTML files for a given input file. This is especially useful when debugging `getStaticPaths`.
  - fixes "0 pages in Infinityms" log when building to SSR

* [#2873](https://github.com/withastro/astro/pull/2873) [`e4025d1f`](https://github.com/withastro/astro/commit/e4025d1f530310d6ab951109f4f53878a307471a) Thanks [@matthewp](https://github.com/matthewp)! - Improves the build by building to a single file for rendering

- [#2875](https://github.com/withastro/astro/pull/2875) [`55712277`](https://github.com/withastro/astro/commit/5571227718442e1ec38f4553863b6160b74df722) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Generalize output assets to avoid adblocker false positives

* [#2872](https://github.com/withastro/astro/pull/2872) [`098f6f6b`](https://github.com/withastro/astro/commit/098f6f6b06396441c576dc689d8552629ef260e1) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix `isSelfAccepting` errors when using the Preact integration with the Astro dev server

* Updated dependencies [[`2db97f10`](https://github.com/withastro/astro/commit/2db97f10dc50f9498413181b78c477fe8833895b), [`d763ec18`](https://github.com/withastro/astro/commit/d763ec183ea391ad79ca16bf2b2e76848fc1180c)]:
  - @astrojs/prism@0.4.1-next.0
  - @astrojs/markdown-remark@0.7.0-next.1

## 0.25.0-next.2

### Patch Changes

- [#2852](https://github.com/withastro/astro/pull/2852) [`96372e6b`](https://github.com/withastro/astro/commit/96372e6beb976b57a8c52fd7c65f126899325160) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix "isSelfAccepting" exception when using the new @astrojs/react integration in development

* [#2848](https://github.com/withastro/astro/pull/2848) [`981e2a83`](https://github.com/withastro/astro/commit/981e2a839b5a0292513bf2009216250f2a8730eb) Thanks [@FredKSchott](https://github.com/FredKSchott)! - add missing injected "page" scripts into markdown pages

## 0.25.0-next.1

### Patch Changes

- [#2835](https://github.com/withastro/astro/pull/2835) [`77ebab8b`](https://github.com/withastro/astro/commit/77ebab8bb27d67bc45a5af160d6b545521897802) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix missing `postcss-load-config` dependency

## 0.25.0-next.0

### Minor Changes

- [#2833](https://github.com/withastro/astro/pull/2833) [`79545412`](https://github.com/withastro/astro/commit/7954541291a3dd7adbc1d5610e0c2e615d3dde46) Thanks [@natemoo-re](https://github.com/natemoo-re)! - This PR introduces a new internal CSS parser for `@astrojs/compiler`. See [`withastro/compiler#329`](https://github.com/withastro/compiler/pull/329) for more details.

  This fixes Astro's support for modern CSS syntax like `@container`, `@layer`, and nesting. **Note** While Astro now correctly parses this modern syntax, it does not automatically compile features for browser compatability purposes.

* [#2824](https://github.com/withastro/astro/pull/2824) [`0a3d3e51`](https://github.com/withastro/astro/commit/0a3d3e51a66af80fa949ba0f5e2104439d2be634) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Change shiki to our default markdown syntax highlighter. This includes updates to all relevant starter projects that used Prism-specific styles.

### Patch Changes

- [#2798](https://github.com/withastro/astro/pull/2798) [`4c25a1c2`](https://github.com/withastro/astro/commit/4c25a1c2eacf897427a7d6dac3bf476ef56799de) Thanks [@matthewp](https://github.com/matthewp)! - Implement APIs for headers for SSR flag

* [#2825](https://github.com/withastro/astro/pull/2825) [`1cd7184c`](https://github.com/withastro/astro/commit/1cd7184ca6fa6e60a69918e461f42c055e8a795e) Thanks [@hlynursmari1](https://github.com/hlynursmari1)! - Fix island deduplication ignoring props.Re-resolves an issue initially patched in https://github.com/withastro/astro/pull/846 but seemingly lost in the 0.21.0 mega-merge (https://github.com/withastro/astro/commit/d84bfe719a546ad855640338d5ed49ad3aa4ccb4).This change makes the component render step account for all props, even if they don't affect the generated HTML, when deduplicating island mounts.

- [#2815](https://github.com/withastro/astro/pull/2815) [`7b9d042d`](https://github.com/withastro/astro/commit/7b9d042dde0c6ae74225de208222e0addf5f4989) Thanks [@matthewp](https://github.com/matthewp)! - Allows dynamic routes in SSR to avoid implementing getStaticPaths

- Updated dependencies [[`0a3d3e51`](https://github.com/withastro/astro/commit/0a3d3e51a66af80fa949ba0f5e2104439d2be634)]:
  - @astrojs/markdown-remark@0.7.0-next.0

## 0.24.3

### Patch Changes

- [#2806](https://github.com/withastro/astro/pull/2806) [`9e59ec92`](https://github.com/withastro/astro/commit/9e59ec921fe539233a1a22b9f0c34ca3cfd05247) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix a warning from Vite regarding internal sourcemaps

- Updated dependencies [[`79282163`](https://github.com/withastro/astro/commit/79282163e229bfe332b1221be3099f751b05807b)]:
  - @astrojs/renderer-svelte@0.5.2

## 0.24.2

### Patch Changes

- [#2801](https://github.com/withastro/astro/pull/2801) [`11fb3745`](https://github.com/withastro/astro/commit/11fb3745dd548c6a8fa94c6a29e0ee89bac591aa) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix: Handle CLI output in a cross-compat way

* [#2793](https://github.com/withastro/astro/pull/2793) [`6eb49479`](https://github.com/withastro/astro/commit/6eb494796e5144a4f2c12a6cce3fb2345c9b4e4e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix HTML double-escaping issue

- [#2803](https://github.com/withastro/astro/pull/2803) [`2b76ee8d`](https://github.com/withastro/astro/commit/2b76ee8d75d44492af18b9ead35293da7178930a) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add an `astro/config` entrypoint with a `defineConfig` utility.

  Config files can now be easily benefit from Intellisense using the following approach:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    renderers: [],
  });
  ```

* [#2791](https://github.com/withastro/astro/pull/2791) [`2d95541b`](https://github.com/withastro/astro/commit/2d95541b52118f787144720cb28cdd64644b903a) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix missing styles on initial dev server load (ex. Tailwind styles)

## 0.24.1

### Patch Changes

- [#2797](https://github.com/withastro/astro/pull/2797) [`58d8686e`](https://github.com/withastro/astro/commit/58d8686e94816da649b0210f5288173fb4b9a483) Thanks [@matthewp](https://github.com/matthewp)! - Fix for projects with a folder name containing a space

* [#2785](https://github.com/withastro/astro/pull/2785) [`2c4fd919`](https://github.com/withastro/astro/commit/2c4fd919faa887df659d756ed3d095e0e83ed87d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update Astro.props to show object properties on console.log(Astro.props), interating over properties, and anything else outside direct key access

- [#2790](https://github.com/withastro/astro/pull/2790) [`6b34840d`](https://github.com/withastro/astro/commit/6b34840d3d082d6491515ff96976f603947316d3) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve `set:html` behavior for `null` and `undefined` values

* [#2772](https://github.com/withastro/astro/pull/2772) [`b4d34e2d`](https://github.com/withastro/astro/commit/b4d34e2d2c1429a9938074cd30ed13d9bb741a8b) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve build performance, especially on large sites

- [#2772](https://github.com/withastro/astro/pull/2772) [`b4d34e2d`](https://github.com/withastro/astro/commit/b4d34e2d2c1429a9938074cd30ed13d9bb741a8b) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Surface vite warnings to the user

## 0.24.0

### Minor Changes

- [#2760](https://github.com/withastro/astro/pull/2760) [`77b9c953`](https://github.com/withastro/astro/commit/77b9c95352f441021b8a0b03f891ea6ad00117ce) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Introduce a new --host flag + host devOption to expose your server on a network IP

* [`af075d81`](https://github.com/withastro/astro/commit/af075d81579d0a77f773435bbce391e42f9dff21) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Visual redesign of the `astro dev` CLI, including new `astro --help` and `astro --version` outputs.

  These changes introduce a new startup screen, make it more obvious when a file triggers in-place HMR (`update`) or a full reload (`reload`), and improve the way Astro surfaces errors during dev.

- [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - New default build strategy

  This change marks the "static build" as the new default build strategy. If you are unfamiliar with this build strategy check out the [migration guide](https://docs.astro.build/en/migrate/#planned-deprecations) on how to change your code to be compatible with this new bulid strategy.

  If you'd like to keep using the old build strategy, use the flag `--legacy-build` both in your `astro dev` and `astro build` scripts, for ex:

  ```json
  {
    "scripts": {
      "build": "astro build --legacy-build"
    }
  }
  ```

  Note that the legacy build _is_ deprecated and will be removed in a future version. You should only use this flag until you have the time to migration your code.

* [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - ## Updated `<head>` and `<body>` behavior

  Since `astro@0.21`, Astro placed certain restrictions on what files could use `<head>` or `<body>` tags. In `astro@0.24`, the restrictions have been lifted. Astro will be able to correctly handle `<head>` and `<body>` tags in _any_ component, not just those in `src/pages/` or `src/layouts/`.

- [#2747](https://github.com/withastro/astro/pull/2747) [`05b66bd6`](https://github.com/withastro/astro/commit/05b66bd68b173d30921c9f0565b3dc2379039fcd) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Escape HTML inside of expressions by default. Please see [our migration guide](https://docs.astro.build/en/migrate/#deprecated-unescaped-html) for more details.

### Patch Changes

- [#2695](https://github.com/withastro/astro/pull/2695) [`ae8d9256`](https://github.com/withastro/astro/commit/ae8d925666dac0008d8a607afa5f6223f95689a4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `Astro.slots` API with new public `has` and `render` methods.

  This is a backwards-compatible change—`Astro.slots.default` will still be `true` if the component has been passed a `default` slot.

  ```ts
  if (Astro.slots.has('default')) {
    const content = await Astro.slots.render('default');
  }
  ```

* [#2755](https://github.com/withastro/astro/pull/2755) [`10843aba`](https://github.com/withastro/astro/commit/10843aba634c9cae663d8181b9d90d3213cb9142) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add user-configurable `sitemapFilter` option.

  This option can be used to ensure certain pages are excluded from your final sitemap.

  ```ts
  // astro.config.ts
  import type { AstroUserConfig } from 'astro';

  const config: AstroUserConfig = {
    sitemap: true,
    sitemapFilter: (page: string) => !page.includes('secret-page'),
  };
  export default config;
  ```

- [#2767](https://github.com/withastro/astro/pull/2767) [`2bb2c2f7`](https://github.com/withastro/astro/commit/2bb2c2f7d153863319652dbc93396bedd1a16756) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to `0.12.0`

* [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes the static build to write to 404.html

- [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes use of private .env variables with the static build

* [#2750](https://github.com/withastro/astro/pull/2750) [`79fc3204`](https://github.com/withastro/astro/commit/79fc320480b2a638ef707079a624519bd54f1550) Thanks [@FredKSchott](https://github.com/FredKSchott)! - update esbuild@0.14.25

- [#2737](https://github.com/withastro/astro/pull/2737) [`e8d4e568`](https://github.com/withastro/astro/commit/e8d4e56803d21cd187bd7d72899ba5d545522786) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Astro's logger has been redesigned for an improved experience! In addition to deduping identical messages, we've surfaced more error details and exposed new events like `update` (for in-place HMR) and `reload` (for full-reload HMR).

* [#2733](https://github.com/withastro/astro/pull/2733) [`6bf124fb`](https://github.com/withastro/astro/commit/6bf124fb2f8ffd3909148ccc0e253c1f72f364cb) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Remove a bad dev warning

- [#2768](https://github.com/withastro/astro/pull/2768) [`49c0d997`](https://github.com/withastro/astro/commit/49c0d9970fe362af06c6ac70c25c1b6b0c4dd393) Thanks [@matthewp](https://github.com/matthewp)! - Fixes loading astro/client/\* on Windows in dev

* [#2758](https://github.com/withastro/astro/pull/2758) [`499fb6a3`](https://github.com/withastro/astro/commit/499fb6a3356967123a7cb9b28f94d9a3bf1dff91) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add CLI warnings when running a prerelease or outdated version of Astro

- [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Replace `send` dependency with `sirv`

* [#2732](https://github.com/withastro/astro/pull/2732) [`0ae96bb7`](https://github.com/withastro/astro/commit/0ae96bb7491a60eb2032bab23377ca54951a67a7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update server start message to use localhost for local hostnames

- [#2743](https://github.com/withastro/astro/pull/2743) [`a14075e2`](https://github.com/withastro/astro/commit/a14075e2a4d8897e24e2928318e653b63637ebe3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix - show 404 for bad static paths with console message, rather than a 500

## 0.24.0-next.2

### Patch Changes

- [#2755](https://github.com/withastro/astro/pull/2755) [`10843aba`](https://github.com/withastro/astro/commit/10843aba634c9cae663d8181b9d90d3213cb9142) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add user-configurable `sitemapFilter` option.

  This option can be used to ensure certain pages are excluded from your final sitemap.

  ```ts
  // astro.config.ts
  import type { AstroUserConfig } from 'astro';

  const config: AstroUserConfig = {
    sitemap: true,
    sitemapFilter: (page: string) => !page.includes('secret-page'),
  };
  export default config;
  ```

* [#2750](https://github.com/withastro/astro/pull/2750) [`79fc3204`](https://github.com/withastro/astro/commit/79fc320480b2a638ef707079a624519bd54f1550) Thanks [@FredKSchott](https://github.com/FredKSchott)! - update esbuild@0.14.25

- [#2758](https://github.com/withastro/astro/pull/2758) [`499fb6a3`](https://github.com/withastro/astro/commit/499fb6a3356967123a7cb9b28f94d9a3bf1dff91) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add CLI warnings when running a prerelease or outdated version of Astro

* [#2743](https://github.com/withastro/astro/pull/2743) [`a14075e2`](https://github.com/withastro/astro/commit/a14075e2a4d8897e24e2928318e653b63637ebe3) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix - show 404 for bad static paths with console message, rather than a 500

## 0.24.0-next.1

### Minor Changes

- [`af075d81`](https://github.com/withastro/astro/commit/af075d81579d0a77f773435bbce391e42f9dff21) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Visual redesign of the `astro dev` CLI, including new `astro --help` and `astro --version` outputs.

  These changes introduce a new startup screen, make it more obvious when a file triggers in-place HMR (`update`) or a full reload (`reload`), and improve the way Astro surfaces errors during dev.

* [#2747](https://github.com/withastro/astro/pull/2747) [`05b66bd6`](https://github.com/withastro/astro/commit/05b66bd68b173d30921c9f0565b3dc2379039fcd) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Escape HTML inside of expressions by default. Please see [our migration guide](https://docs.astro.build/en/migrate/#deprecated-unescaped-html) for more details.

### Patch Changes

- [#2695](https://github.com/withastro/astro/pull/2695) [`ae8d9256`](https://github.com/withastro/astro/commit/ae8d925666dac0008d8a607afa5f6223f95689a4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `Astro.slots` API with new public `has` and `render` methods.

  This is a backwards-compatible change—`Astro.slots.default` will still be `true` if the component has been passed a `default` slot.

  ```ts
  if (Astro.slots.has('default')) {
    const content = await Astro.slots.render('default');
  }
  ```

* [#2705](https://github.com/withastro/astro/pull/2705) [`72c2c86e`](https://github.com/withastro/astro/commit/72c2c86e9d7c9b2ce6be13ddb273d4b0b11a5723) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes the static build to write to 404.html

- [#2737](https://github.com/withastro/astro/pull/2737) [`e8d4e568`](https://github.com/withastro/astro/commit/e8d4e56803d21cd187bd7d72899ba5d545522786) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Astro's logger has been redesigned for an improved experience! In addition to deduping identical messages, we've surfaced more error details and exposed new events like `update` (for in-place HMR) and `reload` (for full-reload HMR).

* [#2733](https://github.com/withastro/astro/pull/2733) [`6bf124fb`](https://github.com/withastro/astro/commit/6bf124fb2f8ffd3909148ccc0e253c1f72f364cb) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Remove a bad dev warning

- [#2732](https://github.com/withastro/astro/pull/2732) [`0ae96bb7`](https://github.com/withastro/astro/commit/0ae96bb7491a60eb2032bab23377ca54951a67a7) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Update server start message to use localhost for local hostnames

## 0.24.0-next.0

### Minor Changes

- [#2705](https://github.com/withastro/astro/pull/2705) [`8ce63ee6`](https://github.com/withastro/astro/commit/8ce63ee658677ecabcb3068f00413b51e7db30ef) Thanks [@natemoo-re](https://github.com/natemoo-re)! - New default build strategy

  This change marks the "static build" as the new default build strategy. If you are unfamiliar with this build strategy check out the [migration guide](https://docs.astro.build/en/migrate/#planned-deprecations) on how to change your code to be compatible with this new bulid strategy.

  If you'd like to keep using the old build strategy, use the flag `--legacy-build` both in your `astro dev` and `astro build` scripts, for ex:

  ```json
  {
    "scripts": {
      "build": "astro build --legacy-build"
    }
  }
  ```

  Note that the legacy build _is_ deprecated and will be removed in a future version. You should only use this flag until you have the time to migration your code.

  - **Updated `<head>` and `<body>` behavior**

  Since `astro@0.21`, Astro placed certain restrictions on what files could use `<head>` or `<body>` tags. In `astro@0.24`, the restrictions have been lifted. Astro will be able to correctly handle `<head>` and `<body>` tags in _any_ component, not just those in `src/pages/` or `src/layouts/`.

### Patch Changes

- [#2705](https://github.com/withastro/astro/pull/2705) [`176d4082`](https://github.com/withastro/astro/commit/176d4082ca642e3d7b996529f1efed7048b4d04f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes use of private .env variables with the static build

* [#2705](https://github.com/withastro/astro/pull/2705) [`a483c044`](https://github.com/withastro/astro/commit/a483c0446ba222edf4258f4683cd918ea209b8f4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Replace `send` dependency with `sirv`

## 0.23.7

### Patch Changes

- Updated dependencies [[`0d37f8e0`](https://github.com/withastro/astro/commit/0d37f8e0a51ac7bcf9e108151828b733bbba6e94)]:
  - @astrojs/renderer-svelte@0.5.1

## 0.23.6

### Patch Changes

- Updated dependencies [[`5f91e007`](https://github.com/withastro/astro/commit/5f91e007cbbb3a5ff7322964d811844b0921db61)]:
  - @astrojs/renderer-svelte@0.5.0

## 0.23.5

### Patch Changes

- [#2706](https://github.com/withastro/astro/pull/2706) [`b2c37385`](https://github.com/withastro/astro/commit/b2c37385f94614232d9a378ef2ef3264d5405cc8) Thanks [@JuanM04](https://github.com/JuanM04)! - Changed `data-astro-raw` to `is:raw` internally

- Updated dependencies [[`b2c37385`](https://github.com/withastro/astro/commit/b2c37385f94614232d9a378ef2ef3264d5405cc8)]:
  - @astrojs/markdown-remark@0.6.4

## 0.23.4

### Patch Changes

- [#2678](https://github.com/withastro/astro/pull/2678) [`caf9135c`](https://github.com/withastro/astro/commit/caf9135c4843889c2773667d591d72d796e14c7b) Thanks [@JuanM04](https://github.com/JuanM04)! - Upgraded Vite to v2.8.6

* [#2697](https://github.com/withastro/astro/pull/2697) [`91765d79`](https://github.com/withastro/astro/commit/91765d79b1ec1181417fb6a4604a9e20564bb10e) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve build performance by processing `ssrPreload` in serial rather than in parallel

- [#2684](https://github.com/withastro/astro/pull/2684) [`c7bbb112`](https://github.com/withastro/astro/commit/c7bbb1128936207164cb5ac0c0ad9b1af86d861e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix issue where HMR could be triggered during `astro build`

- Updated dependencies [[`91765d79`](https://github.com/withastro/astro/commit/91765d79b1ec1181417fb6a4604a9e20564bb10e)]:
  - @astrojs/markdown-remark@0.6.3

## 0.23.3

### Patch Changes

- [#2681](https://github.com/withastro/astro/pull/2681) [`046af364`](https://github.com/withastro/astro/commit/046af364750ffc29c68a93c024045228aa16a5ab) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix HMR regression related to fine-grained `.astro` HMR. This fixes HMR for Tailwind and CSS styles when `.astro` files are edited.

## 0.23.2

### Patch Changes

- [#2665](https://github.com/withastro/astro/pull/2665) [`0494f74e`](https://github.com/withastro/astro/commit/0494f74e4e95e0840a6cb05d3fd0eea785d8db90) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve compatability with third-party Astro packages

* [#2656](https://github.com/withastro/astro/pull/2656) [`fca64073`](https://github.com/withastro/astro/commit/fca6407318f7f189fb65f096f8166b85a322efda) Thanks [@FredKSchott](https://github.com/FredKSchott)! - fix astro scoping of "@import" inside of style tags

## 0.23.1

### Patch Changes

- [`ac6d2e8c`](https://github.com/withastro/astro/commit/ac6d2e8c645e7f6821ace02067ceb4d5402f66ae) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix issue with Non-HTML pages in static build for dev

* [#2628](https://github.com/withastro/astro/pull/2628) [`9b7e2ab2`](https://github.com/withastro/astro/commit/9b7e2ab2516cd36520364490df8e3482008292e3) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed shiki to work with `{ "type": "module" }`

- [#2630](https://github.com/withastro/astro/pull/2630) [`a2128f8e`](https://github.com/withastro/astro/commit/a2128f8e478cec8f60292206d3d22760c46f4aa9) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed incorrect types and imports

* [#2653](https://github.com/withastro/astro/pull/2653) [`17032cd0`](https://github.com/withastro/astro/commit/17032cd064ecb4233b66e30b49ca0a12a8afc476) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler`, fixing a bug with self-closing tags that need special consideration like `<title />` and `<script />`

- [#2654](https://github.com/withastro/astro/pull/2654) [`a0fc5cb5`](https://github.com/withastro/astro/commit/a0fc5cb5ff0003e9bb4b54cbf98035b1e0a6b113) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix an issue where utf8 encoding was skipped in the dev server.

* [#2649](https://github.com/withastro/astro/pull/2649) [`5091d788`](https://github.com/withastro/astro/commit/5091d788f624060756d04488506b4f1f4eadcf8e) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add fine-grained HMR support for Astro files

- [#2645](https://github.com/withastro/astro/pull/2645) [`2e5c3b51`](https://github.com/withastro/astro/commit/2e5c3b512638bf06c7eb896fcf5cd8179fe91ca8) Thanks [@xavikortes](https://github.com/xavikortes)! - Fix issue when process.env.LANG was longer than 5 characters

- Updated dependencies [[`9b7e2ab2`](https://github.com/withastro/astro/commit/9b7e2ab2516cd36520364490df8e3482008292e3)]:
  - @astrojs/markdown-remark@0.6.2

## 0.23.0

### Minor Changes

- [#2489](https://github.com/withastro/astro/pull/2489) [`618a16f5`](https://github.com/withastro/astro/commit/618a16f59d4037cff1665110f0ed111a96a96437) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for the `set:html` and `set:text` directives.

  With the introduction of these directives, unescaped HTML content in expressions is now deprecated. Please migrate to `set:html` in order to continue injecting unescaped HTML in future versions of Astro—you can use `<Fragment set:html={content}>` to avoid a wrapper element. `set:text` allows you to opt-in to escaping now, but it will soon become the default.

* [#2494](https://github.com/withastro/astro/pull/2494) [`d7149f9b`](https://github.com/withastro/astro/commit/d7149f9b2f9a9092b33fa56cedecc446247faf64) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Refactor dev server to use vite server internally.

  This should be an invisible change, and no breaking changes are expected from this change. However, it is a big enough refactor that some unexpected changes may occur. If you've experienced a regression in the dev server, it is most likely a bug!

- [#2586](https://github.com/withastro/astro/pull/2586) [`d6d35bca`](https://github.com/withastro/astro/commit/d6d35bcafcbe216caa1d9e8410bf2925a4d57467) Thanks [@tony-sull](https://github.com/tony-sull)! - Support for non-HTML pages

  > ⚠️ This feature is currently only supported with the `--experimental-static-build` CLI flag. This feature may be refined over the next few weeks/months as SSR support is finalized.

  This adds support for generating non-HTML pages form `.js` and `.ts` pages during the build. Built file and extensions are based on the source file's name, ex: `src/pages/data.json.ts` will be built to `dist/data.json`.

  **Is this different from SSR?** Yes! This feature allows JSON, XML, etc. files to be output at build time. Keep an eye out for full SSR support if you need to build similar files when requested, for example as a serverless function in your deployment host.

  ## Examples

  ```typescript
  // src/pages/company.json.ts
  export async function get() {
    return {
      body: JSON.stringify({
        name: 'Astro Technology Company',
        url: 'https://astro.build/',
      }),
    };
  }
  ```

  What about `getStaticPaths()`? It **just works**™.

  ```typescript
  export async function getStaticPaths() {
    return [{ params: { slug: 'thing1' } }, { params: { slug: 'thing2' } }];
  }

  export async function get(params) {
    const { slug } = params;

    return {
      // body: JSON.stringify(...)
    };
  }
  ```

* [#2424](https://github.com/withastro/astro/pull/2424) [`1abb9ed0`](https://github.com/withastro/astro/commit/1abb9ed0800989f47351cc916f19fd8e0672e2c0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `vite` to `2.8.x`, unvendoring `vite` and bringing Astro's dependencies up-to-date.

  This is a low-level change that you shouldn't have to worry about too much, but it should fix many, many issues with CJS/ESM interoperability. It also allows Astro to stay up-to-date with the `vite` ecosystem. If you run into any unexpected problems, please let us know by opening an issue.

- [#2471](https://github.com/withastro/astro/pull/2471) [`c9bb1147`](https://github.com/withastro/astro/commit/c9bb1147cbfae20e3ecdf29ef2866a183b3b18e3) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Standardize trailing subpath behavior in config.

  Most users are not aware of the subtle differences between `/foo` and `/foo/`. Internally, we have to handle both which means that we are constantly worrying about the format of the URL, needing to add/remove trailing slashes when we go to work with this property, etc. This change transforms all `site` values to use a trailing slash internally, which should help reduce bugs for both users and maintainers.

* [#2548](https://github.com/withastro/astro/pull/2548) [`ba5e2b5e`](https://github.com/withastro/astro/commit/ba5e2b5e6c20207955991775dc4aa8879331542c) Thanks [@matthewp](https://github.com/matthewp)! - Experimental SSR Support

  > ⚠️ If you are a user of Astro and see this PR and think that you can start deploying your app to a server and get SSR, slow down a second! This is only the initial flag and **very basic support**. Styles are not loading correctly at this point, for example. Like we did with the `--experimental-static-build` flag, this feature will be refined over the next few weeks/months and we'll let you know when its ready for community testing.

  ## Changes

  - This adds a new `--experimental-ssr` flag to `astro build` which will result in `dist/server/` and `dist/client/` directories.
  - SSR can be used through this API:

    ```js
    import { createServer } from 'http';
    import { loadApp } from 'astro/app/node';

    const app = await loadApp(new URL('./dist/server/', import.meta.url));

    createServer(async (req, res) => {
      const route = app.match(req);
      if (route) {
        let html = await app.render(req, route);
      }
    }).listen(8080);
    ```

  - This API will be refined over time.
  - This only works in Node.js at the moment.
  - Many features will likely not work correctly, but rendering HTML at least should.

### Patch Changes

- [#2486](https://github.com/withastro/astro/pull/2486) [`6bd165f8`](https://github.com/withastro/astro/commit/6bd165f84cd3a1550b29fec539af814360c87f54) Thanks [@matthewp](https://github.com/matthewp)! - Fix for the static build when project contains a space

* [#2424](https://github.com/withastro/astro/pull/2424) [`1abb9ed0`](https://github.com/withastro/astro/commit/1abb9ed0800989f47351cc916f19fd8e0672e2c0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes HMR of CSS that is imported from astro, when using the static build flag

- [#2522](https://github.com/withastro/astro/pull/2522) [`3e8844fa`](https://github.com/withastro/astro/commit/3e8844fa871fa477026375db6d921beb4b23b0dc) Thanks [@matthewp](https://github.com/matthewp)! - Fix for CSS superset support and HMR in the static build

* [#2506](https://github.com/withastro/astro/pull/2506) [`187d5128`](https://github.com/withastro/astro/commit/187d5128af9ea388589f12e7b062b1e6a38ac67a) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fix an issue rendering content within HTMLElement

- [#2606](https://github.com/withastro/astro/pull/2606) [`96609d4c`](https://github.com/withastro/astro/commit/96609d4c9ef66ef6852e590fa439a2177e9ae847) Thanks [@matthewp](https://github.com/matthewp)! - Fixes 404 to HMR script in the static build

* [#2599](https://github.com/withastro/astro/pull/2599) [`929fae68`](https://github.com/withastro/astro/commit/929fae684f2e375bfae2dd2b69d440abcf944378) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to [`v0.11.0`](https://github.com/withastro/compiler/blob/main/lib/compiler/CHANGELOG.md#0110), which moves from TinyGo to Go's built-in WASM output. This will be a significant improvement for stability and memory safety.

- [#2532](https://github.com/withastro/astro/pull/2532) [`b210fd00`](https://github.com/withastro/astro/commit/b210fd008b9253f0c755c21e157cd7fb069c8445) Thanks [@matthewp](https://github.com/matthewp)! - Fixes HMR of .astro modules in astro@next

* [#2552](https://github.com/withastro/astro/pull/2552) [`e81bc3cf`](https://github.com/withastro/astro/commit/e81bc3cf14d9516a76a3328d277eb2e4db9d7279) Thanks [@matthewp](https://github.com/matthewp)! - Fixes build slowness on large apps

  This fixes slowness on large apps, particularly during the static build. Fix is to prevent the Vite dev server plugin from being run during build, as it is not needed.

- [#2605](https://github.com/withastro/astro/pull/2605) [`87762410`](https://github.com/withastro/astro/commit/87762410f3c2b887e049422d61a17e9c0fdabd88) Thanks [@matthewp](https://github.com/matthewp)! - Fixes Astro style resolution in the static build

* [#2569](https://github.com/withastro/astro/pull/2569) [`82544e41`](https://github.com/withastro/astro/commit/82544e413406a62ecf3e408ca1aac5c8c15b7453) Thanks [@matthewp](https://github.com/matthewp)! - Fixes pageUrlFormat: 'file' in the static build

- [#2588](https://github.com/withastro/astro/pull/2588) [`10216176`](https://github.com/withastro/astro/commit/102161761de629fe1bfee7d151d4956c57ea2f42) Thanks [@matthewp](https://github.com/matthewp)! - Fix for passing children to client component when the component does not render them

* [#2531](https://github.com/withastro/astro/pull/2531) [`ef1d81ef`](https://github.com/withastro/astro/commit/ef1d81effd4e0c420c6eb2e5e500cfaac3106ea8) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix issue where hostname was not passed to dev server

- [#2537](https://github.com/withastro/astro/pull/2537) [`b0666286`](https://github.com/withastro/astro/commit/b066628693d9d9a526b3e8ab2a2d493aad38a722) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve debug logs

* [#2511](https://github.com/withastro/astro/pull/2511) [`3d2c1849`](https://github.com/withastro/astro/commit/3d2c184962925300ca75c96b8115f88e68140ec7) Thanks [@matthewp](https://github.com/matthewp)! - Bug fix for `define:vars` with the --experimental-static-build flag

- [#2518](https://github.com/withastro/astro/pull/2518) [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141) Thanks [@JuanM04](https://github.com/JuanM04)! - Added the ability to use custom themes and langs with Shiki (`<Code />` and `@astrojs/markdown-remark`)

* [#2612](https://github.com/withastro/astro/pull/2612) [`39cbe500`](https://github.com/withastro/astro/commit/39cbe5008549517d9360bc7c473793523c0c9207) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve suppport for `import.meta.env`.

  Prior to this change, all variables defined in `.env` files had to include the `PUBLIC_` prefix, meaning that they could potentially be visible to the client if referenced.

  Now, Astro includes _any_ referenced variables defined in `.env` files on `import.meta.env` during server-side rendering, but only referenced `PUBLIC_` variables on the client.

- [#2471](https://github.com/withastro/astro/pull/2471) [`c9bb1147`](https://github.com/withastro/astro/commit/c9bb1147cbfae20e3ecdf29ef2866a183b3b18e3) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Respect subpath URL paths in the fetchContent url property.

  This fixes an issue where fetchContent() URL property did not include the buildOptions.site path in it.

* [#2538](https://github.com/withastro/astro/pull/2538) [`16d532fe`](https://github.com/withastro/astro/commit/16d532fe1772a2c0880beda0f49883efb2469e44) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix rendering of HTML boolean attributes like `open` and `async`.

  Fix rendering of HTML and SVG enumerated attributes like `contenteditable` and `spellcheck`.

- [#2570](https://github.com/withastro/astro/pull/2570) [`34317bc0`](https://github.com/withastro/astro/commit/34317bc05c707179af0be6c9fe743c1fd1299532) Thanks [@matthewp](https://github.com/matthewp)! - Fixes bug with astro/components not loading in the next release

* [#2581](https://github.com/withastro/astro/pull/2581) [`ec6f148f`](https://github.com/withastro/astro/commit/ec6f148fc8623c6549885af70512839c08905fdb) Thanks [@matthewp](https://github.com/matthewp)! - Fix for resolving relative imports from hoisted scripts in the static build.

- [#2593](https://github.com/withastro/astro/pull/2593) [`40c0e2b3`](https://github.com/withastro/astro/commit/40c0e2b3f69e81cd7bb3fc2d8d0b3448c11b6ed8) Thanks [@tony-sull](https://github.com/tony-sull)! - Dynamic route params should ignore param order when matching paths

* [#2497](https://github.com/withastro/astro/pull/2497) [`6fe1b027`](https://github.com/withastro/astro/commit/6fe1b0279fce5a7a0e90ff79746ea0b641da3e21) Thanks [@JuanM04](https://github.com/JuanM04)! - Bumped Shiki version

- [#2594](https://github.com/withastro/astro/pull/2594) [`085468e9`](https://github.com/withastro/astro/commit/085468e949f1d6e9e19bd7039574b586a78e7601) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `@astrojs/compiler` to `v0.10.2`

- Updated dependencies [[`a907a73b`](https://github.com/withastro/astro/commit/a907a73b8cd14726d158ea460932f9cd8891923a), [`cfeaa941`](https://github.com/withastro/astro/commit/cfeaa9414acdecec6f5d66ee0e33fe4fde574eee), [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141), [`6fe1b027`](https://github.com/withastro/astro/commit/6fe1b0279fce5a7a0e90ff79746ea0b641da3e21), [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141), [`d71c4620`](https://github.com/withastro/astro/commit/d71c46207af40de6811596ca4f5e10aa9006377b)]:
  - @astrojs/renderer-preact@0.5.0
  - @astrojs/renderer-react@0.5.0
  - @astrojs/renderer-svelte@0.4.0
  - @astrojs/renderer-vue@0.4.0
  - @astrojs/markdown-remark@0.6.1

## 0.23.0-next.10

### Patch Changes

- [#2606](https://github.com/withastro/astro/pull/2606) [`96609d4c`](https://github.com/withastro/astro/commit/96609d4c9ef66ef6852e590fa439a2177e9ae847) Thanks [@matthewp](https://github.com/matthewp)! - Fixes 404 to HMR script in the static build

* [#2605](https://github.com/withastro/astro/pull/2605) [`87762410`](https://github.com/withastro/astro/commit/87762410f3c2b887e049422d61a17e9c0fdabd88) Thanks [@matthewp](https://github.com/matthewp)! - Fixes Astro style resolution in the static build

## 0.23.0-next.9

### Patch Changes

- [#2599](https://github.com/withastro/astro/pull/2599) [`929fae68`](https://github.com/withastro/astro/commit/929fae684f2e375bfae2dd2b69d440abcf944378) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to [`v0.11.0`](https://github.com/withastro/compiler/blob/main/lib/compiler/CHANGELOG.md#0110), which moves from TinyGo to Go's built-in WASM output. This will be a significant improvement for stability and memory safety.

## 0.23.0-next.8

### Patch Changes

- [#2588](https://github.com/withastro/astro/pull/2588) [`10216176`](https://github.com/withastro/astro/commit/102161761de629fe1bfee7d151d4956c57ea2f42) Thanks [@matthewp](https://github.com/matthewp)! - Fix for passing children to client component when the component does not render them

* [#2593](https://github.com/withastro/astro/pull/2593) [`40c0e2b3`](https://github.com/withastro/astro/commit/40c0e2b3f69e81cd7bb3fc2d8d0b3448c11b6ed8) Thanks [@tony-sull](https://github.com/tony-sull)! - Dynamic route params should ignore param order when matching paths

## 0.23.0-next.7

### Patch Changes

- [#2586](https://github.com/withastro/astro/pull/2586) [`d6d35bca`](https://github.com/withastro/astro/commit/d6d35bcafcbe216caa1d9e8410bf2925a4d57467) Thanks [@tony-sull](https://github.com/tony-sull)! - Support for non-HTML pages

  > ⚠️ This feature is currently only supported with the `--experimental-static-build` CLI flag. This feature may be refined over the next few weeks/months as SSR support is finalized.

  This adds support for generating non-HTML pages form `.js` and `.ts` pages during the build. Built file and extensions are based on the source file's name, ex: `src/pages/data.json.ts` will be built to `dist/data.json`.

  **Is this different from SSR?** Yes! This feature allows JSON, XML, etc. files to be output at build time. Keep an eye out for full SSR support if you need to build similar files when requested, for example as a serverless function in your deployment host.

  ## Examples

  ```typescript
  // src/pages/company.json.ts
  export async function get() {
    return {
      body: JSON.stringify({
        name: 'Astro Technology Company',
        url: 'https://astro.build/',
      }),
    };
  }
  ```

  What about `getStaticPaths()`? It **just works**™.

  ```typescript
  export async function getStaticPaths() {
    return [{ params: { slug: 'thing1' } }, { params: { slug: 'thing2' } }];
  }

  export async function get(params) {
    const { slug } = params;

    return {
      // body: JSON.stringify(...)
    };
  }
  ```

* [#2548](https://github.com/withastro/astro/pull/2548) [`ba5e2b5e`](https://github.com/withastro/astro/commit/ba5e2b5e6c20207955991775dc4aa8879331542c) Thanks [@matthewp](https://github.com/matthewp)! - Experimental SSR Support

  > ⚠️ If you are a user of Astro and see this PR and think that you can start deploying your app to a server and get SSR, slow down a second! This is only the initial flag and **very basic support**. Styles are not loading correctly at this point, for example. Like we did with the `--experimental-static-build` flag, this feature will be refined over the next few weeks/months and we'll let you know when its ready for community testing.

  ## Changes

  - This adds a new `--experimental-ssr` flag to `astro build` which will result in `dist/server/` and `dist/client/` directories.
  - SSR can be used through this API:

    ```js
    import { createServer } from 'http';
    import { loadApp } from 'astro/app/node';

    const app = await loadApp(new URL('./dist/server/', import.meta.url));

    createServer(async (req, res) => {
      const route = app.match(req);
      if (route) {
        let html = await app.render(req, route);
      }
    }).listen(8080);
    ```

  - This API will be refined over time.
  - This only works in Node.js at the moment.
  - Many features will likely not work correctly, but rendering HTML at least should.

- [#2581](https://github.com/withastro/astro/pull/2581) [`ec6f148f`](https://github.com/withastro/astro/commit/ec6f148fc8623c6549885af70512839c08905fdb) Thanks [@matthewp](https://github.com/matthewp)! - Fix for resolving relative imports from hoisted scripts in the static build.

* [#2594](https://github.com/withastro/astro/pull/2594) [`085468e9`](https://github.com/withastro/astro/commit/085468e949f1d6e9e19bd7039574b586a78e7601) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `@astrojs/compiler` to `v0.10.2`

## 0.23.0-next.6

### Patch Changes

- [#2570](https://github.com/withastro/astro/pull/2570) [`34317bc0`](https://github.com/withastro/astro/commit/34317bc05c707179af0be6c9fe743c1fd1299532) Thanks [@matthewp](https://github.com/matthewp)! - Fixes bug with astro/components not loading in the next release

## 0.23.0-next.5

### Patch Changes

- [#2569](https://github.com/withastro/astro/pull/2569) [`82544e41`](https://github.com/withastro/astro/commit/82544e413406a62ecf3e408ca1aac5c8c15b7453) Thanks [@matthewp](https://github.com/matthewp)! - Fixes pageUrlFormat: 'file' in the static build

- Updated dependencies [[`d71c4620`](https://github.com/withastro/astro/commit/d71c46207af40de6811596ca4f5e10aa9006377b)]:
  - @astrojs/markdown-remark@0.6.1-next.2

## 0.23.0-next.4

### Minor Changes

- [#2424](https://github.com/withastro/astro/pull/2424) [`1abb9ed0`](https://github.com/withastro/astro/commit/1abb9ed0800989f47351cc916f19fd8e0672e2c0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Upgrade `vite` to `2.8.x`, unvendoring `vite` and bringing Astro's dependencies up-to-date.

  This is a low-level change that you shouldn't have to worry about too much, but it should fix many, many issues with CJS/ESM interoperability. It also allows Astro to stay up-to-date with the `vite` ecosystem. If you run into any unexpected problems, please let us know by opening an issue.

### Patch Changes

- [#2424](https://github.com/withastro/astro/pull/2424) [`1abb9ed0`](https://github.com/withastro/astro/commit/1abb9ed0800989f47351cc916f19fd8e0672e2c0) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes HMR of CSS that is imported from astro, when using the static build flag

- Updated dependencies [[`a907a73b`](https://github.com/withastro/astro/commit/a907a73b8cd14726d158ea460932f9cd8891923a)]:
  - @astrojs/renderer-preact@0.5.0-next.0
  - @astrojs/renderer-react@0.5.0-next.0
  - @astrojs/renderer-svelte@0.4.0-next.0
  - @astrojs/renderer-vue@0.4.0-next.0

## 0.23.0-next.3

### Patch Changes

- [#2552](https://github.com/withastro/astro/pull/2552) [`e81bc3cf`](https://github.com/withastro/astro/commit/e81bc3cf14d9516a76a3328d277eb2e4db9d7279) Thanks [@matthewp](https://github.com/matthewp)! - Fixes build slowness on large apps

  This fixes slowness on large apps, particularly during the static build. Fix is to prevent the Vite dev server plugin from being run during build, as it is not needed.

## 0.23.0-next.2

### Patch Changes

- [#2532](https://github.com/withastro/astro/pull/2532) [`b210fd00`](https://github.com/withastro/astro/commit/b210fd008b9253f0c755c21e157cd7fb069c8445) Thanks [@matthewp](https://github.com/matthewp)! - Fixes HMR of .astro modules in astro@next

* [#2531](https://github.com/withastro/astro/pull/2531) [`ef1d81ef`](https://github.com/withastro/astro/commit/ef1d81effd4e0c420c6eb2e5e500cfaac3106ea8) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fix issue where hostname was not passed to dev server

- [#2537](https://github.com/withastro/astro/pull/2537) [`b0666286`](https://github.com/withastro/astro/commit/b066628693d9d9a526b3e8ab2a2d493aad38a722) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve debug logs

* [#2518](https://github.com/withastro/astro/pull/2518) [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141) Thanks [@JuanM04](https://github.com/JuanM04)! - Added the ability to use custom themes and langs with Shiki (`<Code />` and `@astrojs/markdown-remark`)

- [#2538](https://github.com/withastro/astro/pull/2538) [`16d532fe`](https://github.com/withastro/astro/commit/16d532fe1772a2c0880beda0f49883efb2469e44) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix rendering of HTML boolean attributes like `open` and `async`.

  Fix rendering of HTML and SVG enumerated attributes like `contenteditable` and `spellcheck`.

- Updated dependencies [[`cfeaa941`](https://github.com/withastro/astro/commit/cfeaa9414acdecec6f5d66ee0e33fe4fde574eee), [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141), [`2bc91543`](https://github.com/withastro/astro/commit/2bc91543ceeb5f3dd45e201bf75d79f186e85141)]:
  - @astrojs/markdown-remark@0.6.1-next.1

## 0.23.0-next.1

### Patch Changes

- [#2522](https://github.com/withastro/astro/pull/2522) [`3e8844fa`](https://github.com/withastro/astro/commit/3e8844fa871fa477026375db6d921beb4b23b0dc) Thanks [@matthewp](https://github.com/matthewp)! - Fix for CSS superset support and HMR in the static build

## 0.23.0-next.0

### Minor Changes

- [#2489](https://github.com/withastro/astro/pull/2489) [`618a16f5`](https://github.com/withastro/astro/commit/618a16f59d4037cff1665110f0ed111a96a96437) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for the `set:html` and `set:text` directives.

  With the introduction of these directives, unescaped HTML content in expressions is now deprecated. Please migrate to `set:html` in order to continue injecting unescaped HTML in future versions of Astro—you can use `<Fragment set:html={content}>` to avoid a wrapper element. `set:text` allows you to opt-in to escaping now, but it will soon become the default.

* [#2494](https://github.com/withastro/astro/pull/2494) [`d7149f9b`](https://github.com/withastro/astro/commit/d7149f9b2f9a9092b33fa56cedecc446247faf64) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Refactor dev server to use vite server internally.

  This should be an invisible change, and no breaking changes are expected from this change. However, it is a big enough refactor that some unexpected changes may occur. If you've experienced a regression in the dev server, it is most likely a bug!

- [#2471](https://github.com/withastro/astro/pull/2471) [`c9bb1147`](https://github.com/withastro/astro/commit/c9bb1147cbfae20e3ecdf29ef2866a183b3b18e3) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Standardize trailing subpath behavior in config.

  Most users are not aware of the subtle differences between `/foo` and `/foo/`. Internally, we have to handle both which means that we are constantly worrying about the format of the URL, needing to add/remove trailing slashes when we go to work with this property, etc. This change transforms all `site` values to use a trailing slash internally, which should help reduce bugs for both users and maintainers.

### Patch Changes

- [#2486](https://github.com/withastro/astro/pull/2486) [`6bd165f8`](https://github.com/withastro/astro/commit/6bd165f84cd3a1550b29fec539af814360c87f54) Thanks [@matthewp](https://github.com/matthewp)! - Fix for the static build when project contains a space

* [#2506](https://github.com/withastro/astro/pull/2506) [`187d5128`](https://github.com/withastro/astro/commit/187d5128af9ea388589f12e7b062b1e6a38ac67a) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fix an issue rendering content within HTMLElement

- [#2511](https://github.com/withastro/astro/pull/2511) [`3d2c1849`](https://github.com/withastro/astro/commit/3d2c184962925300ca75c96b8115f88e68140ec7) Thanks [@matthewp](https://github.com/matthewp)! - Bug fix for `define:vars` with the --experimental-static-build flag

* [#2471](https://github.com/withastro/astro/pull/2471) [`c9bb1147`](https://github.com/withastro/astro/commit/c9bb1147cbfae20e3ecdf29ef2866a183b3b18e3) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Respect subpath URL paths in the fetchContent url property.

  This fixes an issue where fetchContent() URL property did not include the buildOptions.site path in it.

- [#2497](https://github.com/withastro/astro/pull/2497) [`6fe1b027`](https://github.com/withastro/astro/commit/6fe1b0279fce5a7a0e90ff79746ea0b641da3e21) Thanks [@JuanM04](https://github.com/JuanM04)! - Bumped Shiki version

- Updated dependencies [[`6fe1b027`](https://github.com/withastro/astro/commit/6fe1b0279fce5a7a0e90ff79746ea0b641da3e21)]:
  - @astrojs/markdown-remark@0.6.1-next.0

## 0.22.20

### Patch Changes

- [#2491](https://github.com/withastro/astro/pull/2491) [`c7a6ed9a`](https://github.com/withastro/astro/commit/c7a6ed9a8df88fcc643ec2667627fbf9b670db53) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fixed top-level await and other es features with the static build

* [#2479](https://github.com/withastro/astro/pull/2479) [`005751a9`](https://github.com/withastro/astro/commit/005751a920c14423648fd45b53cebc94e5108e9f) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add the `escapeHTML` utility to `astro/internal`

- [#2490](https://github.com/withastro/astro/pull/2490) [`69d5b709`](https://github.com/withastro/astro/commit/69d5b70900c6392bae1db89efcad57dbdcfa87da) Thanks [@matthewp](https://github.com/matthewp)! - Fix for CSS preprocessing using the static build

* [#2491](https://github.com/withastro/astro/pull/2491) [`c7a6ed9a`](https://github.com/withastro/astro/commit/c7a6ed9a8df88fcc643ec2667627fbf9b670db53) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Renders server-side HTMLElement as HTML tag

## 0.22.19

### Patch Changes

- [#2440](https://github.com/withastro/astro/pull/2440) [`462e3159`](https://github.com/withastro/astro/commit/462e315956601f3404bbb5d821ede6545ed76d03) Thanks [@matthewp](https://github.com/matthewp)! - Fixes HMR of CSS that is imported from astro, when using the static build flag

## 0.22.18

### Patch Changes

- [#2423](https://github.com/withastro/astro/pull/2423) [`ebe414f0`](https://github.com/withastro/astro/commit/ebe414f05b69d50de4aab64358cd4a31c254f7e6) Thanks [@delucis](https://github.com/delucis)! - Resolve sitemap URLs in relation to full site path

* [#2443](https://github.com/withastro/astro/pull/2443) [`ed0b46f9`](https://github.com/withastro/astro/commit/ed0b46f96faf144fe0946bce1528f4d605a4a42c) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix bug with RSS feed generation. `rss()` can now be called multiple times and URLs can now be fully qualified.

- [#2442](https://github.com/withastro/astro/pull/2442) [`dfe1f8b4`](https://github.com/withastro/astro/commit/dfe1f8b4e7d25b7887e34b6514bd2f50a86c7a7d) Thanks [@matthewp](https://github.com/matthewp)! - Allow setting ssr Vite config in the static build

## 0.22.17

### Patch Changes

- [#2432](https://github.com/withastro/astro/pull/2432) [`9e1bc175`](https://github.com/withastro/astro/commit/9e1bc1752f44db8f996c35f64cec259ce3fbc731) Thanks [@matthewp](https://github.com/matthewp)! - Fixes bugs with apostrophes in the title tag

* [#2414](https://github.com/withastro/astro/pull/2414) [`f2b8372c`](https://github.com/withastro/astro/commit/f2b8372c0cd7988246db3c7087fb7d7ebcff0340) Thanks [@matthewp](https://github.com/matthewp)! - Adds support for hoisted scripts to the static build

## 0.22.16

### Patch Changes

- [#2428](https://github.com/withastro/astro/pull/2428) [`3ad236ba`](https://github.com/withastro/astro/commit/3ad236ba01a694f3645b9b238af33d994fd7e6d9) Thanks [@matthewp](https://github.com/matthewp)! - Pin the compiler to fix obscure Windows bug

## 0.22.15

### Patch Changes

- [#2371](https://github.com/withastro/astro/pull/2371) [`85ad1aab`](https://github.com/withastro/astro/commit/85ad1aab67b9f1b9214db3200458ac37675b9afb) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Add support for styled RSS feeds using the new `stylesheet` option

* [#2416](https://github.com/withastro/astro/pull/2416) [`5208c88a`](https://github.com/withastro/astro/commit/5208c88aeb512250f2a443edede574710dbccffa) Thanks [@matthewp](https://github.com/matthewp)! - Adds Astro.resolve deprecation for the static build

- [#2392](https://github.com/withastro/astro/pull/2392) [`24aa3245`](https://github.com/withastro/astro/commit/24aa3245aef4e12a80946c6d56f731b14aed6220) Thanks [@obnoxiousnerd](https://github.com/obnoxiousnerd)! - Support markdown draft pages.
  Markdown draft pages are markdown pages which have `draft` set in their frontmatter. By default, these will not be built by Astro while running `astro build`. To disable this behavior, you need to set `buildOptions.drafts` to `true` or pass the `--drafts` flag while running `astro build`. An exaple of a markdown draft page is:

  ```markdown
  ---
  # src/pages/blog-post.md
  title: My Blog Post
  draft: true
  ---

  This is my blog post which is currently incomplete.
  ```

## 0.22.14

### Patch Changes

- [#2393](https://github.com/withastro/astro/pull/2393) [`bcc617f9`](https://github.com/withastro/astro/commit/bcc617f9dc560bd61535c136297e97fb11013d6f) Thanks [@matthewp](https://github.com/matthewp)! - Prepends site subpath when using --experimental-static-build

## 0.22.13

### Patch Changes

- [#2391](https://github.com/withastro/astro/pull/2391) [`c8a257ad`](https://github.com/withastro/astro/commit/c8a257adc4b2ed92aaf4aa74b0e1ac4db48530f2) Thanks [@matthewp](https://github.com/matthewp)! - Improvements performance for building sites with thousands of pages with the static build

## 0.22.12

### Patch Changes

- [#2370](https://github.com/withastro/astro/pull/2370) [`a7967530`](https://github.com/withastro/astro/commit/a7967530dfe9cfab5d6d866c8d2bcba9c47de39c) Thanks [@matthewp](https://github.com/matthewp)! - Fixes support for Lit within the static build

* [#2373](https://github.com/withastro/astro/pull/2373) [`92532b88`](https://github.com/withastro/astro/commit/92532b88820bc45f3f02bca0054e8433c3f7a743) Thanks [@matthewp](https://github.com/matthewp)! - Hydrated component fix with the static build

* Updated dependencies [[`20eaddb2`](https://github.com/withastro/astro/commit/20eaddb2a723253c7fbde3e56955a549bdf3f342)]:
  - @astrojs/renderer-react@0.4.1

## 0.22.11

### Patch Changes

- [#2367](https://github.com/withastro/astro/pull/2367) [`2aa5ba5c`](https://github.com/withastro/astro/commit/2aa5ba5c52d0fa6eb2d17ca0b38a761ab40f8ca4) Thanks [@matthewp](https://github.com/matthewp)! - Fixes use of framework renderers in the static build

* [#2365](https://github.com/withastro/astro/pull/2365) [`20d0cce6`](https://github.com/withastro/astro/commit/20d0cce681d5e913ca19c2466055f69541bced23) Thanks [@matthewp](https://github.com/matthewp)! - Fixes shared CSS within the static build

## 0.22.10

### Patch Changes

- [#2335](https://github.com/withastro/astro/pull/2335) [`f008a19c`](https://github.com/withastro/astro/commit/f008a19c9d4ad046ef7b24262605e8107c34a9bc) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Preserve pathnames for sitemap.xml

* [#2358](https://github.com/withastro/astro/pull/2358) [`10074972`](https://github.com/withastro/astro/commit/1007497297769455d41e23f48dfdbec90b403f2e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes the output when using the experimental-static-build flag

- [#2323](https://github.com/withastro/astro/pull/2323) [`69af658b`](https://github.com/withastro/astro/commit/69af658b00be0a3b1bb0eb11c2e480973a5a6301) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fix issue with plugins running twice in dev and build

* [#2338](https://github.com/withastro/astro/pull/2338) [`c0cb7eea`](https://github.com/withastro/astro/commit/c0cb7eead5389e93c9a3e8206a301e44bd928702) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fix preview issues triggered by pageUrlFormat & trailingSlash options

- [#2363](https://github.com/withastro/astro/pull/2363) [`7e0b32c5`](https://github.com/withastro/astro/commit/7e0b32c5696ec9db3cdee3de732de056b380568a) Thanks [@matthewp](https://github.com/matthewp)! - Fixes use of --experimental-static-build with markdown pages

## 0.22.9

### Patch Changes

- [#2337](https://github.com/withastro/astro/pull/2337) [`180dfcf2`](https://github.com/withastro/astro/commit/180dfcf2fc39c4697e178c47a3d3a5459d845cdf) Thanks [@matthewp](https://github.com/matthewp)! - Fix using the Code component in static build

## 0.22.8

### Patch Changes

- [#2330](https://github.com/withastro/astro/pull/2330) [`71ca0912`](https://github.com/withastro/astro/commit/71ca09125a86e74c73d30d01839e27859e1ade1a) Thanks [@matthewp](https://github.com/matthewp)! - Fixes subpath support in `astro preview`

## 0.22.7

### Patch Changes

- [#2324](https://github.com/withastro/astro/pull/2324) [`77ef43e6`](https://github.com/withastro/astro/commit/77ef43e66cf701de848a2998af646ee7762497d8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update compiler to remove console.log (sorry everyone!)

* [`e0de21ef`](https://github.com/withastro/astro/commit/e0de21ef57227eb4c56f216280b8aa5e5e848937) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Add `<guid>` to RSS feed.

- [#2318](https://github.com/withastro/astro/pull/2318) [`c0204c0a`](https://github.com/withastro/astro/commit/c0204c0a416865eab9b905b61231ed9a304120a8) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update `@astrojs/compiler` to [`0.7.3`](https://github.com/withastro/compiler/blob/main/lib/compiler/CHANGELOG.md#073)

* [#2319](https://github.com/withastro/astro/pull/2319) [`e6379d51`](https://github.com/withastro/astro/commit/e6379d514df4924ac8679a8c5a251b56a1a6bee3) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Updated @astropub/webapi

## 0.22.6

### Patch Changes

- [#2299](https://github.com/withastro/astro/pull/2299) [`5fbdd56f`](https://github.com/withastro/astro/commit/5fbdd56f157f58d9d768f9d5388340aaa316da81) Thanks [@tadeuzagallo](https://github.com/tadeuzagallo)! - Fix dynamic routes for sites with subpath

* [#2308](https://github.com/withastro/astro/pull/2308) [`e98659b7`](https://github.com/withastro/astro/commit/e98659b7d65c02e4e60a3621d0ce13ca5f9878f5) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Update the Astro compiler, fixing a number of bugs

## 0.22.5

### Patch Changes

- [#2305](https://github.com/withastro/astro/pull/2305) [`193ca60f`](https://github.com/withastro/astro/commit/193ca60f40c8875b1d655dcd0682560cc2e2487e) Thanks [@matthewp](https://github.com/matthewp)! - Fixes `astro check` errors with import.meta usage

- Updated dependencies [[`34486676`](https://github.com/withastro/astro/commit/344866762c3a96b92bd754cf3706db73e2d74647)]:
  - @astrojs/renderer-svelte@0.3.1

## 0.22.4

### Patch Changes

- [#2302](https://github.com/withastro/astro/pull/2302) [`9db22b97`](https://github.com/withastro/astro/commit/9db22b97b604e2ab1908b28e3461aefb222dcf97) Thanks [@matthewp](https://github.com/matthewp)! - Fix to allow the static build to build hydrated components

## 0.22.3

### Patch Changes

- [#2292](https://github.com/withastro/astro/pull/2292) [`2e55dc26`](https://github.com/withastro/astro/commit/2e55dc2686b0e2bff2e2ec76c184a17a3d2368c4) Thanks [@matthewp](https://github.com/matthewp)! - Rolls back a feature flag feature that was breaking the docs site

## 0.22.2

### Patch Changes

- [#2290](https://github.com/withastro/astro/pull/2290) [`c77cf52e`](https://github.com/withastro/astro/commit/c77cf52e1648a2581479bd3187b5a5fa1f918832) Thanks [@matthewp](https://github.com/matthewp)! - Preserve wasm stack trace when verbose logging is enabled

## 0.22.1

### Patch Changes

- [#2258](https://github.com/withastro/astro/pull/2258) [`db79d2e9`](https://github.com/withastro/astro/commit/db79d2e9ec02f3e3f25c6c10aa365acdd5c1a7cc) Thanks [@matthewp](https://github.com/matthewp)! - Fix for use of remote @import in inline styles

## 0.22.0

### Minor Changes

- [#2202](https://github.com/withastro/astro/pull/2202) [`45cea6ae`](https://github.com/withastro/astro/commit/45cea6aec5a310fed4cb8da0d96670d6b99a2539) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Officially drop support for Node v12. The minimum supported version is now Node v14.15+,

* [`c5a7305f`](https://github.com/withastro/astro/commit/c5a7305f04222743c99d70b3ea061a1d31a67efa) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Replace `fetch` detection via Vite plugin with a more resilient `globalThis` polyfill

### Patch Changes

- [#2240](https://github.com/withastro/astro/pull/2240) [`e07c1cbd`](https://github.com/withastro/astro/commit/e07c1cbd7ea46c57d637f981aaed43a733a846b1) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Pin vite to v2.6, since that is the version that we have vendored.

- Updated dependencies [[`45cea6ae`](https://github.com/withastro/astro/commit/45cea6aec5a310fed4cb8da0d96670d6b99a2539)]:
  - @astrojs/prism@0.4.0
  - @astrojs/renderer-preact@0.4.0
  - @astrojs/renderer-react@0.4.0
  - @astrojs/renderer-svelte@0.3.0
  - @astrojs/renderer-vue@0.3.0
  - @astrojs/markdown-remark@0.6.0

## 0.21.13

### Patch Changes

- Updated dependencies [[`b8c821a0`](https://github.com/withastro/astro/commit/b8c821a0743ed004691eae0eea471a368d2fa35f)]:
  - @astrojs/renderer-svelte@0.2.3

## 0.21.12

### Patch Changes

- [#2115](https://github.com/withastro/astro/pull/2115) [`0ef682c9`](https://github.com/withastro/astro/commit/0ef682c924a0836790acd2d4f8c1663eb99ffb75) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Improve error message on bad JS/TS frontmatter

* [#2156](https://github.com/withastro/astro/pull/2156) [`ef3950c6`](https://github.com/withastro/astro/commit/ef3950c647e523ff6f36cfa096c4a92596d32afa) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: missing CSS files

## 0.21.11

### Patch Changes

- [#2137](https://github.com/withastro/astro/pull/2137) [`cc1dae55`](https://github.com/withastro/astro/commit/cc1dae55c8bbf0a7d862e227f7daed138c485be4) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Exclude 404 pages from sitemap generation

* [#2112](https://github.com/withastro/astro/pull/2112) [`da7b41f5`](https://github.com/withastro/astro/commit/da7b41f5b8eb6d3a3e3a765be447e03ef5691979) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: fix missing styles in build

- [#2116](https://github.com/withastro/astro/pull/2116) [`d9d3906a`](https://github.com/withastro/astro/commit/d9d3906a3c215436a1e3d2ab64e63d23a772e059) Thanks [@e111077](https://github.com/e111077)! - add lit renderer reflection tests

* [#2135](https://github.com/withastro/astro/pull/2135) [`77c3fda3`](https://github.com/withastro/astro/commit/77c3fda379b5858a74fa54d278058efaf33fdac5) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Patch `fetch` support to prioritize authored code. Existing `fetch` imports and declarations are respected.

## 0.21.10

### Patch Changes

- [#2109](https://github.com/withastro/astro/pull/2109) [`3e4cfea4`](https://github.com/withastro/astro/commit/3e4cfea4e29ab958d69e4502c1f634a007393a7b) Thanks [@Mikkel-T](https://github.com/Mikkel-T)! - Fixes aliases on windows.

* [#2117](https://github.com/withastro/astro/pull/2117) [`8346a1f2`](https://github.com/withastro/astro/commit/8346a1f2b9e38d68788e0c6dc62f872a46ebe8a7) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fixes regression introduced in `@astrojs/compiler` related to active formatting elements

  See [CHANGELOG](https://github.com/withastro/compiler/blob/main/lib/compiler/CHANGELOG.md#057).

## 0.21.9

### Patch Changes

- [#2107](https://github.com/withastro/astro/pull/2107) [`4c444676`](https://github.com/withastro/astro/commit/4c44467668045733b4e5c3bbed8a1bde2ba421de) Thanks [@matthewp](https://github.com/matthewp)! - Fixes regression in build caused by use of URL module

  Using this module breaks the build because Vite tries to shim it, incorrectly.

* [#2106](https://github.com/withastro/astro/pull/2106) [`583459d0`](https://github.com/withastro/astro/commit/583459d0b6476fc79b351648c0db3c2869edfa12) Thanks [@matthewp](https://github.com/matthewp)! - Fix for using ?url with CSS imports

## 0.21.8

### Patch Changes

- [#2096](https://github.com/withastro/astro/pull/2096) [`11798a32`](https://github.com/withastro/astro/commit/11798a3209521664e02989e5ea3e791c8c5fb036) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Updates @astro/compiler and @astro/language-server.

## 0.21.7

### Patch Changes

- [#2065](https://github.com/withastro/astro/pull/2065) [`c6e4e283`](https://github.com/withastro/astro/commit/c6e4e2831e122cced890dfad47825fab3bd32db9) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: improve CSS import order

* [#2081](https://github.com/withastro/astro/pull/2081) [`62a5e98c`](https://github.com/withastro/astro/commit/62a5e98c9008a1ac88c3c38db64b74723f8fd422) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: CSS import ordering, empty CSS output on build

- [#2086](https://github.com/withastro/astro/pull/2086) [`2a2eaadc`](https://github.com/withastro/astro/commit/2a2eaadc2f5ca0ac88eb3fd987881a47b41e9bdd) Thanks [@matthewp](https://github.com/matthewp)! - Fixes invalidation of proxy module (inline script modules)

* [#2048](https://github.com/withastro/astro/pull/2048) [`1301f3da`](https://github.com/withastro/astro/commit/1301f3daa9991078652577f2addf4aaad6014712) Thanks [@matthewp](https://github.com/matthewp)! - Updates Astro.resolve to return project-relative paths

- [#2078](https://github.com/withastro/astro/pull/2078) [`ac3e8702`](https://github.com/withastro/astro/commit/ac3e870280e983a7977da79b6eec0568d38d8420) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix behavior of renderers when no children are passed in

* [#2091](https://github.com/withastro/astro/pull/2091) [`0a826c99`](https://github.com/withastro/astro/commit/0a826c999c8ee30d5ee2ae61ac4165fb9797da70) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: allow special characters in filenames

- [#2064](https://github.com/withastro/astro/pull/2064) [`5bda895f`](https://github.com/withastro/astro/commit/5bda895fcb7d1aa21223aa89d33912f97716c3ab) Thanks [@jonathantneal](https://github.com/jonathantneal)! - Fixes an issue where void elements are rendered with opening and closing tags.

* [#2076](https://github.com/withastro/astro/pull/2076) [`920d3da1`](https://github.com/withastro/astro/commit/920d3da135f29a3b4229aa7166902ae00be0a51f) Thanks [@tony-sull](https://github.com/tony-sull)! - Improving build validation and error messages for client hydration directives

- [#2075](https://github.com/withastro/astro/pull/2075) [`b348ca6c`](https://github.com/withastro/astro/commit/b348ca6c9fbc13dcf49718c7b3335f06b1ea0982) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: allow dynamic importing of rehype plugins

- Updated dependencies [[`ac3e8702`](https://github.com/withastro/astro/commit/ac3e870280e983a7977da79b6eec0568d38d8420)]:
  - @astrojs/renderer-preact@0.3.1
  - @astrojs/renderer-react@0.3.1
  - @astrojs/renderer-svelte@0.2.2
  - @astrojs/renderer-vue@0.2.1

## 0.21.6

### Patch Changes

- [#2050](https://github.com/withastro/astro/pull/2050) [`4e06767c`](https://github.com/withastro/astro/commit/4e06767c0148539f6fe868c4fc0335755908c110) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix `astro preview` port retry logic

* [#2049](https://github.com/withastro/astro/pull/2049) [`c491d1f4`](https://github.com/withastro/astro/commit/c491d1f423cc8ed7ba25d7d0dea6336ad9659a55) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: Sass compile errors cause compiler panic

- [#2066](https://github.com/withastro/astro/pull/2066) [`f5efbe14`](https://github.com/withastro/astro/commit/f5efbe141cf3b0956252a42ffc35a95211ee7513) Thanks [@drwpow](https://github.com/drwpow)! - Bugfix: Windows error in dev for hydrated components

## 0.21.5

### Patch Changes

- 341ec3cd: Fixes dev errors in hydrated components

  The errors would occur when there was state changes in hydrated components. This only occurs in dev but does result in the hydrated component not working. This fixes the underlying issue.

- 4436592d: Fix crash with unexpected file types in pages directory
- 50f3b8d7: Bugfix: improve style and script injection for partial pages
- fad6bd09: Fixes use of `PUBLIC_` to reference env vars

  Previously `PUBLIC_` worked in server-only components such as .astro components. However if you had a client-side component you had to use `VITE_`. This was a bug with our build that is now fixed.

## 0.21.4

### Patch Changes

- 76559faa: Chore: update compiler

## 0.21.3

### Patch Changes

- 8a5de030: Fix client:visible with multiple copies of same component
- 9ed6b3c0: Update compiler with the following patches:
  - Fix components supporting only one style or script
  - Fix regression where leading `<style>` elements could break generated tags
  - Fix case-sensitivity of void elements
  - Fix expressions not working within SVG elements
  - Fix panic when preprocessed style is empty
- 7a7427e4: Fix CSS URLs on Windows
- Updated dependencies [4cec1256]
  - @astrojs/renderer-svelte@0.2.1

## 0.21.2

### Patch Changes

- 22dd6bf6: Support `lang="postcss"` in addition to `lang="pcss"`
- d3476f24: Bump Sass dependency version
- 679d4395: Added `MarkdownParser` and `MarkdownParserResponse` to `@types`
- e4945232: Fix a host of compiler bugs, including:
  - CSS scoping of `*` character inside of `calc()` expressions
  - Encoding of double quotes inside of quoted attributes
  - Expressions inside of `<table>` elements
- 8cb77959: Fixes building of non-hoisted scripts
- fc5f4163: Fix regression with `astro build` 404.astro output
- Updated dependencies [679d4395]
  - @astrojs/markdown-remark@0.5.0

## 0.21.1

### Patch Changes

- 8775730e: Fix CSS scanning bug that could lead to infinite loops
- aec4e8da: Fix client:only behavior when only a single renderer is configured

## 0.21.0

### Minor Changes

- e6aaeff5: Astro 0.21 is here! [Read the complete migration guide](https://docs.astro.build/migration/0.21.0/).

  This new version of Astro includes:

  - A new, faster, [Go-based compiler](https://github.com/withastro/astro-compiler)
  - A completely new runtime backed by [Vite](https://vitejs.dev/), with significantly dev experience improvements
  - Improved support for loading Astro config files, including `.cjs`, `.js`, and `.ts` files
  - And [many more features](https://astro.build/blog/astro-021-preview/)!

### Patch Changes

- Updated dependencies [e6aaeff5]
- Updated dependencies [e6aaeff5]
- Updated dependencies [e6aaeff5]
  - @astrojs/renderer-preact@0.3.0
  - @astrojs/renderer-react@0.3.0
  - @astrojs/renderer-svelte@0.2.0
  - @astrojs/renderer-vue@0.2.0
  - @astrojs/markdown-remark@0.4.0
  - @astrojs/prism@0.3.0

## 0.21.0-next.12

### Patch Changes

- 8733599e: Adds missing vite dependency, vixing svelte and vue
- 2e0c790b: Fix Lit renderer built

## 0.21.0-next.11

### Patch Changes

- 00d2b625: Add Vite dependencies to astro
- Updated dependencies [00d2b625]
  - @astrojs/markdown-remark@0.4.0-next.2

## 0.21.0-next.10

### Patch Changes

- c7682168: Fix build by making vendored vite resolve to copy

## 0.21.0-next.9

### Patch Changes

- 41c6a772: Fix for dev server not starting
- 3b511059: Fix for OSX .astro file corruption

## 0.21.0-next.8

### Patch Changes

- c82ceff7: Bug fix for Debug when passed JSON contain HTML strings
- 53d9cf5e: Fixes dev server not stopping cleanly
- 8986d33b: Improve error display
- Updated dependencies [8986d33b]
  - @astrojs/renderer-vue@0.2.0-next.2

## 0.21.0-next.7

### Patch Changes

- dbc49ed6: Fix HMR regression
- 6b598b24: Fix middleware order
- 0ce86dfd: Fixes Vue scoped styles when built

## 0.21.0-next.6

### Patch Changes

- dbc49ed6: Fix HMR regression
- 6b598b24: Fix middleware order
- 0ce86dfd: Fixes Vue scoped styles when built

## 0.21.0-next.5

### Patch Changes

- 0f9c1910: Fixes routing regression in next.4. Subpath support was inadvertedly prevent any non-index routes from working when not using a subpath.

## 0.21.0-next.4

### Patch Changes

- b958088c: Make astro-root be a display: contents element
- 65d17857: Fixes hoisted scripts to be bundled during the build
- 3b8f201c: Add build output
- 824c1f20: Re-implement client:only support
- 3cd1458a: Bugfix: Bundled CSS missing files on Windows
- 4e55be90: Fixes layout file detection on non-unix environments
- fca1a99d: Provides first-class support for a site deployed to a subpath

  Now you can deploy your site to a subpath more easily. Astro will use your `buildOptions.site` URL and host the dev server from there.

  If your site config is `http://example.com/blog` you will need to go to `http://localhost:3000/blog/` in dev and when using `astro preview`.

  Includes a helpful 404 page when encountering this in dev and preview.

- 65216ef9: Bugfix: PostCSS not working in all contexts
- Updated dependencies [3cd1458a]
  - @astrojs/renderer-preact@0.3.0-next.1
  - @astrojs/renderer-react@0.3.0-next.1
  - @astrojs/renderer-svelte@0.2.0-next.1
  - @astrojs/renderer-vue@0.2.0-next.1

## 0.21.0-next.3

### Patch Changes

- 7eaabbb0: Fix error with Markdown content attribute parsing
- fd52bcee: Update the build to build/bundle assets
- 7eaabbb0: Fix bug with attribute serialization
- Updated dependencies [7eaabbb0]
  - @astrojs/markdown-remark@0.4.0-next.1

## 0.21.0-next.2

### Patch Changes

- fbae2bc5: **Improve support for Astro config files.**

In addition to properly loading `.cjs` and `.js` files in all cases, Astro now supports `astro.config.ts` files.

For convenience, you may now also move your `astro.config.js` file to a top-level `config/` directory.

- 2e1bded7: Improve Tailwind HMR in `dev` mode
- Fix bug when using `<Markdown></Markdown>` with no content
- Support `PUBLIC_` prefixed `.env` variables
- Respect `tsconfig.json` and `jsconfig.json` paths as aliases

## 0.21.0-next.1

### Patch Changes

- 11ee158a: Fix issue with `style` and `script` processing where siblings would be skipped

  Fix `Fragment` and `<>` handling for backwards compatability

  Fix CSS `--custom-proprty` parsing when using scoped CSS

## 0.21.0-next.0

### Minor Changes

- d84bfe71: Astro 0.21 Beta release! This introduces the new version of Astro that includes:

  - A new, faster, Go-based compiler
  - A runtime backed by Vite, with faster dev experience
  - New features

  See more at https://astro.build/blog/astro-021-preview/

### Patch Changes

- Updated dependencies [d84bfe71]
- Updated dependencies [d84bfe71]
- Updated dependencies [d84bfe71]
  - @astrojs/prism@0.3.0-next.0
  - @astrojs/markdown-remark@0.4.0-next.0
  - @astrojs/renderer-preact@0.3.0-next.0
  - @astrojs/renderer-react@0.3.0-next.0
  - @astrojs/renderer-svelte@0.2.0-next.0
  - @astrojs/renderer-vue@0.2.0-next.0

## 0.20.12

### Patch Changes

- Updated dependencies [31d06880]
  - @astrojs/renderer-vue@0.1.9

## 0.20.11

### Patch Changes

- 6813106a: Improve getStaticPaths memoization to successfully store values in the cache

## 0.20.10

### Patch Changes

- dbd2f507: Adds the `astro check` command

  This adds a new command, `astro check` which runs diagnostics on a project. The same diagnostics run within the Astro VSCode plugin! Just run:

  ```shell
  astro check
  ```

  Which works a lot like `tsc` and will give you error messages, if any were found. We recommend adding this to your CI setup to prevent errors from being merged.

## 0.20.9

### Patch Changes

- Updated dependencies [756e3769]
  - @astrojs/renderer-react@0.2.2

## 0.20.8

### Patch Changes

- 30835635: Fixed props shadowing

## 0.20.7

### Patch Changes

- 3a0dcbe9: Fix pretty byte output in build stats
- 98d785af: Expose slots to components

## 0.20.6

### Patch Changes

- dd92871f: During CSS bundling separate processing of `rel="preload"` from normal loading stylesheets, to preserve preloads, and source element attributes like `media`.
- d771dad6: Remove check for referenced files
- 9cf2df81: Improve stats logging to use `pretty-bytes` so that 20B doesn't get output as 0kB, which is accurate, but confusing
- 09b2f0e4: Fix passing Markdown content through props (#1259)
- Updated dependencies [97d37f8f]
  - @astrojs/renderer-preact@0.2.2
  - @astrojs/renderer-react@0.2.1
  - @astrojs/renderer-svelte@0.1.2
  - @astrojs/renderer-vue@0.1.8

## 0.20.5

### Patch Changes

- b03f8771: Add human readable config verification errors
- b03f8771: Sitemaps will not create entries for 404.html pages
- b03f8771: Fix parsing of an empty `<pre></pre>` tag in markdown files, which expected the pre tag to have a child
- b03f8771: Add new `<Code>` component, powered by the more modern shiki syntax highlighter.
- b03f8771: Fix astro bin bug in some pre-ESM versions of Node v14.x
- Updated dependencies [b03f8771]
- Updated dependencies [b03f8771]
  - @astrojs/markdown-support@0.3.1

## 0.20.4

### Patch Changes

- 231964f0: Adds interfaces for built-in components

## 0.20.3

### Patch Changes

- 290f2032: Fix knownEntrypoint warning for \_\_astro_hoisted_scripts.js

## 0.20.2

### Patch Changes

- 788c769d: # Hoisted scripts

  This change adds support for hoisted scripts, allowing you to bundle scripts together for a page and hoist them to the top (in the head):

  ```astro

  ```

- Updated dependencies [5d2ea578]
  - @astrojs/parser@0.20.2

## 0.20.1

### Patch Changes

- ff92be63: Add a new "astro preview" command

## 0.20.0

### Minor Changes

- affcd04f: **[BREAKING CHANGE]** stop bundling, building, and processing public files. This fixes an issue where we weren't actually honoring the "do not process" property of the public directory.

  If you were using the `public/` directory as expected and not using it to build files for you, then this should not be a breaking change. However, will notice that these files are no longer bundled.

  If you were using the `public/` directory to build files (for example, like `public/index.scss`) then you can expect this to no longer work. As per the correct Astro documentation.

### Patch Changes

- Updated dependencies [397d8f3d]
  - @astrojs/markdown-support@0.3.0

## 0.19.4

### Patch Changes

- 44fb8ebc: Remove non-null assertions, fix lint issues and enable lint in CI.
- 9482fade: Makes sure Astro.resolve works in nested component folders

## 0.19.3

### Patch Changes

- f9cd0310: Fix TypeScript "types" reference in package.json
- f9cd0310: Improve schema validation using zod
- efb41f22: Add `<Debug>` component for JavaScript-free client-side debugging.

## 0.19.2

### Patch Changes

- 3e605d7e: Add real-world check for ESM-CJS compatability to preflight check
- 1e0e2f41: Including Prism's `language-` class on code block `<pre>` tags
- 166c9ed6: Fix an issue where getStaticPaths is called multiple times per build
- c06da5dd: Add configuration options for url format behavior: buildOptions.pageDirectoryUrl & trailingSlash
- c06da5dd: Move 404.html output from /404/index.html to /404.html

## 0.19.1

### Patch Changes

- ece0953a: Fix CSS :global() selector bug
- Updated dependencies [a421329f]
  - @astrojs/markdown-support@0.2.4

## 0.19.0

### Minor Changes

- 239065e2: **[BREAKING]** Replace the Collections API with new file-based routing.

  This is a breaking change which impacts collections, pagination, and RSS support.
  Runtime warnings have been added to help you migrate old code to the new API.
  If you have trouble upgrading, reach out on https://astro.build/chat

  This change was made due to confusion around our Collection API, which many users found difficult to use. The new file-based routing approach should feel more familiar to anyone who has used Next.js or SvelteKit.

  Documentation added:

  - https://astro-docs-git-main-pikapkg.vercel.app/core-concepts/routing
  - https://astro-docs-git-main-pikapkg.vercel.app/guides/pagination
  - https://astro-docs-git-main-pikapkg.vercel.app/guides/rss
  - https://astro-docs-git-main-pikapkg.vercel.app/reference/api-reference#getstaticpaths

- 239065e2: Adds support for Astro.resolve

  `Astro.resolve()` helps with creating URLs relative to the current Astro file, allowing you to reference files within your `src/` folder.

  Astro _does not_ resolve relative links within HTML, such as images:

  ```html
  <img src="../images/penguin.png" />
  ```

  The above will be sent to the browser as-is and the browser will resolve it relative to the current **page**. If you want it to be resolved relative to the .astro file you are working in, use `Astro.resolve`.

- 239065e2: Adds support for client:only hydrator

  The new `client:only` hydrator allows you to define a component that should be skipped during the build and only hydrated in the browser.

  In most cases it is best to render placeholder content during the build, but that may not always be feasible if an NPM dependency attempts to use browser APIs as soon as is imported.

  **Note** If more than one renderer is included in your Astro config, you need to include a hint to determine which renderer to use. Renderers will be matched to the name provided in your Astro config, similar to `<MyComponent client:only="@astrojs/renderer-react" />`. Shorthand can be used for `@astrojs` renderers, i.e. `<MyComponent client:only="react" />` will use `@astrojs/renderer-react`.

  An example usage:

  ```astro

  ```

  This allows you to import a chart component dependent on d3.js while making sure that the component isn't rendered at all at build time.

### Patch Changes

- @astrojs/parser@0.18.6

## 0.19.0-next.3

### Minor Changes

- 1971ab3c: Adds support for client:only hydrator

  The new `client:only` hydrator allows you to define a component that should be skipped during the build and only hydrated in the browser.

  In most cases it is best to render placeholder content during the build, but that may not always be feasible if an NPM dependency attempts to use browser APIs as soon as is imported.

  **Note** If more than one renderer is included in your Astro config, you need to include a hint to determine which renderer to use. Renderers will be matched to the name provided in your Astro config, similar to `<MyComponent client:only="@astrojs/renderer-react" />`. Shorthand can be used for `@astrojs` renderers, i.e. `<MyComponent client:only="react" />` will use `@astrojs/renderer-react`.

  An example usage:

  ```astro

  ```

  This allows you to import a chart component dependent on d3.js while making sure that the component isn't rendered at all at build time.

### Patch Changes

- 1f13e403: Fix CSS scoping issue
- 78b5bde1: Adds support for Astro.resolve

  `Astro.resolve()` helps with creating URLs relative to the current Astro file, allowing you to reference files within your `src/` folder.

  Astro _does not_ resolve relative links within HTML, such as images:

  ```html
  <img src="../images/penguin.png" />
  ```

  The above will be sent to the browser as-is and the browser will resolve it relative to the current **page**. If you want it to be resolved relative to the .astro file you are working in, use `Astro.resolve`:

## 0.19.0-next.2

### Patch Changes

- 089d1e7a: update dependencies, and fix a bad .flat() call

## 0.19.0-next.1

### Patch Changes

- c881e71e: Revert 939b9d0 "Allow dev server port to be set by PORT environment variable"

## 0.19.0-next.0

### Minor Changes

- 0f0cc2b9: **[BREAKING]** Replace the Collections API with new file-based routing.

  This is a breaking change which impacts collections, pagination, and RSS support.
  Runtime warnings have been added to help you migrate old code to the new API.
  If you have trouble upgrading, reach out on https://astro.build/chat

  This change was made due to confusion around our Collection API, which many users found difficult to use. The new file-based routing approach should feel more familiar to anyone who has used Next.js or SvelteKit.

  Documentation added:

  - https://astro-docs-git-main-pikapkg.vercel.app/core-concepts/routing
  - https://astro-docs-git-main-pikapkg.vercel.app/guides/pagination
  - https://astro-docs-git-main-pikapkg.vercel.app/guides/rss
  - https://astro-docs-git-main-pikapkg.vercel.app/reference/api-reference#getstaticpaths

## 0.18.10

### Patch Changes

- 2321b577: - Allow Markdown with scoped styles to coexist happily with code syntax highlighting via Prism
- 618ea3a8: Properly escapes script tags with nested client:load directives when passing Astro components into framework components via props. Browsers interpret script end tags in strings as script end tags, resulting in syntax errors.
- 939b9d01: Allow dev server port to be set by `PORT` environment variable
- Updated dependencies [1339d5e3]
  - @astrojs/renderer-vue@0.1.7

## 0.18.9

### Patch Changes

- 8cf0e65a: Fixes a previous revert, makes sure head content is injected into the right place
- 8cf0e65a: Refactor the CLI entrypoint to support stackblitz and improve the runtime check

## 0.18.8

### Patch Changes

- b1959f0f: Reverts a change to head content that was breaking docs site

## 0.18.7

### Patch Changes

- 268a36f3: Fixes issue with head content being rendered in the wrong place
- 39df7952: Makes `fetch` available in all framework components
- Updated dependencies [f7e86150]
  - @astrojs/renderer-preact@0.2.1

## 0.18.6

### Patch Changes

- 27672096: Exclude remote srcset URLs
- 03349560: Makes Astro.request available in Astro components

## 0.18.5

### Patch Changes

- a1491cc6: Fix Vue components nesting
- Updated dependencies [cd2b5df4]
- Updated dependencies [a1491cc6]
  - @astrojs/parser@0.18.5
  - @astrojs/renderer-vue@0.1.6

## 0.18.4

### Patch Changes

- Updated dependencies [460e625]
  - @astrojs/markdown-support@0.2.3

## 0.18.3

### Patch Changes

- Updated dependencies [7015356]
  - @astrojs/markdown-support@0.2.2

## 0.18.2

### Patch Changes

- 829d5ba: Fix TSX issue with JSX multi-rendering
- 23b0d2d: Adds support for image srcset to the build
- Updated dependencies [70f0a09]
- Updated dependencies [fdb1c15]
  - @astrojs/markdown-support@0.2.1
  - @astrojs/renderer-vue@0.1.5

## 0.18.1

### Patch Changes

- d8cebb0: Removes a warning in Svelte hydrated components
- e90615f: Fixes warnings for Astro internals for fetch-content and slots

## 0.18.0

### Minor Changes

- f67e8f5: New Collections API (createCollection)

  BREAKING CHANGE: The expected return format from createCollection() has been changed. Visit https://docs.astro.build/core-concepts/collections to learn the new API.

  This feature was implemented with backwards-compatible deprecation warnings, to help you find and update pages that are using the legacy API.

- 40c882a: Fix url to find page with "index" at the end file name
- 0340b0f: Adds support for the client:media hydrator

  The new `client:media` hydrator allows you to define a component that should only be loaded when a media query matches. An example usage:

  ```astro

  ```

  This allows you to define components which, for example, only run on mobile devices. A common example is a slide-in sidebar that is needed to add navigation to a mobile app, but is never displayed in desktop view.

  Since Astro components can have expressions, you can move common media queries to a module for sharing. For example here are defining:

  **media.js**

  ```js
  export const MOBILE = '(max-width: 700px)';
  ```

  And then you can reference this in your page:

  **index.astro**

  ```astro

  ```

### Patch Changes

- e89a99f: This includes the props passed to a hydration component when generating the hash/id. This prevents multiple instances of the same component with differing props to be treated as the same component when hydrated by Astro.
- b8af49f: Added sass support
- a7e6666: compile javascript to target Node v12.x
- fb8bf7e: Allow multiple Astro servers to be running simultaneously by choosing random ports if the defaults are taken.
- 294a656: Adds support for global style blocks via `<style global>`

  Be careful with this escape hatch! This is best reserved for uses like importing styling libraries like Tailwind, or changing global CSS variables.

- 8f4562a: Improve slot support, adding support for named slots and fallback content within `slot` elements.

  See the new [Slots documentation](https://docs.astro.build/core-concepts/astro-components/#slots) for more information.

- 4a601ad: Restores the ability to use Fragment in astro components
- 0e761b9: Add ability to specify hostname in devOptions
- 164489f: Fix for `false` being rendered in conditionals
- e3182c7: Adds a missing dependency
- af935c1: Fix error when no renderers are passed
- 4726e34: Fixes cases where buildOptions.site is not respected
- c82e6be: Fix unfound ./snowpack-plugin-jsx.cjs error
- 007c220: Remove custom Astro.fetchContent() glob implementation, use `import.meta.globEager` internally instead.
- 9859f53: Correcting typo in ReadMe
- b85e68a: Fixes case where custom elements are not handled within JSX expressions
- Updated dependencies [a7e6666]
- Updated dependencies [294a656]
- Updated dependencies [bd18e14]
- Updated dependencies [bd18e14]
- Updated dependencies [1f79144]
- Updated dependencies [b85e68a]
  - @astrojs/parser@0.18.0
  - @astrojs/renderer-preact@0.2.0
  - @astrojs/renderer-react@0.2.0
  - @astrojs/renderer-vue@0.1.4

## 0.18.0-next.7

### Patch Changes

- e89a99f: This includes the props passed to a hydration component when generating the hash/id. This prevents multiple instances of the same component with differing props to be treated as the same component when hydrated by Astro.
- b8af49f: Added sass support
- 4726e34: Fixes cases where buildOptions.site is not respected

## 0.18.0-next.6

### Patch Changes

- Updated dependencies [1f79144]
  - @astrojs/renderer-vue@0.1.4-next.0

## 0.18.0-next.5

### Patch Changes

- 294a656: Adds support for global style blocks via `<style global>`

  Be careful with this escape hatch! This is best reserved for uses like importing styling libraries like Tailwind, or changing global CSS variables.

- 164489f: Fix for `false` being rendered in conditionals
- af935c1: Fix error when no renderers are passed
- Updated dependencies [294a656]
  - @astrojs/parser@0.18.0-next.5

## 0.18.0-next.4

### Patch Changes

- c82e6be: Fix unfound ./snowpack-plugin-jsx.cjs error

## 0.18.0-next.3

### Minor Changes

- Add support for [the new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) for React 17 and Preact.
- Add support for [Solid](https://www.solidjs.com/) when using the new [`@astrojs/renderer-solid`](https://npm.im/@astrojs/renderer-solid) package.

### Patch Changes

- 4a601ad: Restores the ability to use Fragment in astro components
- Updated dependencies [bd18e14]
- Updated dependencies [bd18e14]
  - @astrojs/renderer-preact@0.2.0-next.0
  - @astrojs/renderer-react@0.2.0-next.0

## 0.18.0-next.2

### Minor Changes

- f67e8f5: New Collections API (createCollection)

  BREAKING CHANGE: The expected return format from createCollection() has been changed. Visit https://docs.astro.build/core-concepts/collections to learn the new API.

  This feature was implemented with backwards-compatible deprecation warnings, to help you find and update pages that are using the legacy API.

- 40c882a: Fix url to find page with "index" at the end file name

### Patch Changes

- a7e6666: compile javascript to target Node v12.x
- fb8bf7e: Allow multiple Astro servers to be running simultaneously by choosing random ports if the defaults are taken.
- 0e761b9: Add ability to specify hostname in devOptions
- 007c220: Remove custom Astro.fetchContent() glob implementation, use `import.meta.globEager` internally instead.
- b85e68a: Fixes case where custom elements are not handled within JSX expressions
- Updated dependencies [a7e6666]
- Updated dependencies [b85e68a]
  - @astrojs/parser@0.18.0-next.2

## 0.18.0-next.1

### Patch Changes

- e3182c7: Adds a missing dependency

## 0.18.0-next.0

### Minor Changes

- 0340b0f: Adds support for the client:media hydrator

  The new `client:media` hydrator allows you to define a component that should only be loaded when a media query matches. An example usage:

  ```astro

  ```

  This allows you to define components which, for example, only run on mobile devices. A common example is a slide-in sidebar that is needed to add navigation to a mobile app, but is never displayed in desktop view.

  Since Astro components can have expressions, you can move common media queries to a module for sharing. For example here are defining:

  **media.js**

  ```js
  export const MOBILE = '(max-width: 700px)';
  ```

  And then you can reference this in your page:

  **index.astro**

  ```astro

  ```

### Patch Changes

- 8f4562a: Improve slot support, adding support for named slots and fallback content within `slot` elements.

  See the new [Slots documentation](https://docs.astro.build/core-concepts/astro-components/#slots) for more information.

- 9859f53: Correcting typo in ReadMe

## 0.17.3

### Patch Changes

- [release/0.17] Update compile target to better support Node v12.

## 0.17.2

### Patch Changes

- 1b73f95: Only show the buildOptions.site notice if not already set
- fb78b76: Improve error handling for unsupported Node versions
- d93f768: Add support for components defined in Frontmatter.

## 0.17.1

### Patch Changes

- 1e01251: Fixes bug with React renderer that would not hydrate correctly
- 42a6ace: Add support for components defined in Frontmatter.

- Updated dependencies [1e01251]
  - @astrojs/renderer-react@0.1.5

## 0.17.0

### Minor Changes

- 0a7b6de: ## Adds directive syntax for component hydration

  This change updates the syntax for partial hydration from `<Button:load />` to `<Button client:load />`.

  **Why?**

  Partial hydration is about to get super powers! This clears the way for more dynamic partial hydration, i.e. `<MobileMenu client:media="(max-width: 40em)" />`.

  **How to upgrade**

  Just update `:load`, `:idle`, and `:visible` to match the `client:load` format, thats it! Don't worry, the original syntax is still supported but it's recommended to future-proof your project by updating to the newer syntax.

## 0.16.3

### Patch Changes

- 5d1ff62: Hotfix for snowpack regression

## 0.16.2

### Patch Changes

- 20b4a60: Bugfix: do not override user `alias` passed into snowpack config
- 42a1fd7: Add command line flag `--silent` to astro to set no output.

## 0.16.1

### Patch Changes

- 2d3e369: Fix for using the snowpack polyfillNode option

## 0.16.0

### Minor Changes

- d396943: Add support for [`remark`](https://github.com/remarkjs/remark#readme) and [`rehype`](https://github.com/rehypejs/rehype#readme) plugins for both `.md` pages and `.astro` pages using the [`<Markdown>`](/docs/guides/markdown-content.md) component.

  For example, the `astro.config.mjs` could be updated to include the following. [Read the Markdown documentation](/docs/guides/markdown-content.md) for more information.

  > **Note** Enabling custom `remarkPlugins` or `rehypePlugins` removes Astro's built-in support for [GitHub-flavored Markdown](https://github.github.com/gfm/) support, [Footnotes](https://github.com/remarkjs/remark-footnotes) syntax, [Smartypants](https://github.com/silvenon/remark-smartypants). You must explicitly add these plugins to your `astro.config.mjs` file, if desired.

  ```js
  export default {
    markdownOptions: {
      remarkPlugins: ['remark-slug', ['remark-autolink-headings', { behavior: 'prepend' }]],
      rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', { behavior: 'prepend' }]],
    },
  };
  ```

### Patch Changes

- Updated dependencies [d396943]
- Updated dependencies [f83407e]
  - @astrojs/markdown-support@0.2.0

## 0.15.5

### Patch Changes

- 7b4c97c: Adds support for `hydrationPolyfills` in renderers

  Renderers can not specify polyfills that must run before the component code runs for hydration:

  ```js
  export default {
    name: '@matthewp/my-renderer',
    server: './server.js',
    client: './client.js',
    hydrationPolyfills: ['./my-polyfill.js'],
  };
  ```

  These will still wait for hydration to occur, but will run before the component script does.

## 0.15.4

### Patch Changes

- 6a660f1: Adds low-level custom element support that renderers can use to enable server side rendering. This will be used in renderers such as a Lit renderer.
- Updated dependencies [6a660f1]
  - @astrojs/parser@0.15.4

## 0.15.3

### Patch Changes

- 17579c2: Improves the error message when attempting to use `window` in a component.

## 0.15.2

### Patch Changes

- 1e735bb: Allows passing in a class to a child component which will be scoped
- e28d5cb: Improve error handling within `.astro` files (#526)
- aa86057: Updates collections to match URLs by exact template filename
- f721275: Fix issue where Markdown could close it's parent element early (#494)

## 0.15.1

### Patch Changes

- 8865158: Fixes postcss bug with the 'from' property

## 0.15.0

### Minor Changes

- a136c85: **This is a breaking change!**

  Astro props are now accessed from the `Astro.props` global. This change is meant to make prop definitions more ergonomic, leaning into JavaScript patterns you already know (destructuring and defaults). Astro components previously used a prop syntax borrowed from [Svelte](https://svelte.dev/docs#1_export_creates_a_component_prop), but it became clear that this was pretty confusing for most users.

  ```diff
   ---
  + const { text = 'Hello world!' } = Astro.props;
  - export let text = 'Hello world!';
   ---

   <div>{text}</div>
  ```

  [Read more about the `.astro` syntax](https://docs.astro.build/syntax/#data-and-props)

  ***

  ### How do I define what props my component accepts?

  Astro frontmatter scripts are TypeScript! Because of this, we can leverage TypeScript types to define the shape of your props.

  ```astro

  ```

  > **Note** Casting `Astro.props as Props` is a temporary workaround. We expect our Language Server to handle this automatically soon!

  ### How do I access props I haven't explicitly defined?

  One of the great things about this change is that it's straight-forward to access _any_ props. Just use `...props`!

  ```astro

  ```

  ### What about prop validation?

  We considered building prop validation into Astro, but decided to leave that implementation up to you! This way, you can use any set of tools you like.

  ```astro

  ```

### Patch Changes

- 4cd84c6: #528 Removes unused trapWarn function
- feb9a31: Fixes livereload on static pages
- 47ac2cc: Fix #521, allowing `{...spread}` props to work again
- 5629349: Bugfix: PostCSS errors in internal Snowpack PostCSS plugin
- Updated dependencies [21dc28c]
- Updated dependencies [47ac2cc]
  - @astrojs/renderer-react@0.1.4
  - @astrojs/parser@0.15.0

## 0.14.1

### Patch Changes

- 3f3e4f1: Allow `pageSize: Infinity` when creating a collection
- 44f429a: Allow node: prefix to load builtins

## 0.14.0

### Minor Changes

- 09b5779: Removes mounting the project folder and adds a `src` root option

## 0.13.12

_Rolling back to 0.13.10 to prevent a regression in the dev server output._

## 0.13.11

### Patch Changes

- 6573bea: Fixed README header aspect ratio
- 2671b6f: Fix [472](https://github.com/withastro/astro/issues/472) by not injecting `astro-*` scoped class unless it is actually used
- b547892: Makes providing a head element on pages optional
- b547892: Allows astro documents to omit the head element
- 0abd251: Allows renderers to provide knownEntrypoint config values
- Updated dependencies [0abd251]
  - @astrojs/renderer-preact@0.1.3
  - @astrojs/renderer-react@0.1.3
  - @astrojs/renderer-vue@0.1.3

## 0.13.10

### Patch Changes

- 233fbcd: Fix race condition caused by parallel build
- Updated dependencies [7f8d586]
  - @astrojs/parser@0.13.10

## 0.13.9

### Patch Changes

- 3ada25d: Pass configured Tailwind config file to the tailwindcss plugin
- f9f2da4: Add repository key to all package.json
- Updated dependencies [f9f2da4]
  - @astrojs/parser@0.13.9
  - @astrojs/prism@0.2.2
  - @astrojs/markdown-support@0.1.2

## 0.13.8

### Patch Changes

- 251b0b5: Less verbose HMR script
- 54c291e: Fix <script type="module"> resolution
- 272769d: Improve asset resolution
- 490f2be: Add support for Fragments with `<>` and `</>` syntax
- Updated dependencies [490f2be]
  - @astrojs/parser@0.13.8

## 0.13.7

### Patch Changes

- Updated dependencies [9d4a40f]
  - @astrojs/renderer-preact@0.1.2
  - @astrojs/renderer-react@0.1.2

## 0.13.6

### Patch Changes

- 016833a: Honors users HMR settings
- 73a43d9: Prevent dev from locking up on empty selectors

## 0.13.5

### Patch Changes

- 9f51e2d: Fix issue with arrow components in Preact/React

## 0.13.4

### Patch Changes

- 2d85409: Fixes serialization of boolean attributes
- e0989c6: Fix scoped CSS selector when class contains a colon
- 42dee79: Allows doctype to be written with any casing

## 0.13.3

### Patch Changes

- ab2972b: Update package.json engines for esm support
- Updated dependencies [ab2972b]
  - @astrojs/parser@0.13.3
  - @astrojs/prism@0.2.1
  - @astrojs/renderer-preact@0.1.1
  - @astrojs/renderer-react@0.1.1
  - @astrojs/renderer-svelte@0.1.1
  - @astrojs/renderer-vue@0.1.2

## 0.13.2

### Patch Changes

- c374a54: Bugfix: createCollection() API can be used without fetchContent()

## 0.13.1

### Patch Changes

- 61b5590: Pass "site" config to Snowpack as "baseUrl"

## 0.13.0

### Minor Changes

- ce93361: Set the minimum Node version in the engines field
- 1bab906: Removes a second instance of snowpack which degraded peformance

### Patch Changes

- 5fbc1cb: nit: ask user to modify devOptions.port when addr in use for dev

## 0.12.10

### Patch Changes

- 5cda571: Fix an issue with how files are watched during development

## 0.12.9

### Patch Changes

- 21b0c73: Removes some warnings that are internal to Astro

## 0.12.8

### Patch Changes

- f66fd1f: Fixes regression caused by attempting to prebuild an internal dep

## 0.12.7

### Patch Changes

- f6ef53b: Fixed a bug where recursive markdown was not working properly
- 5a871f3: Fixes logging to default to the info level
- f4a747f: improve build output

## 0.12.6

### Patch Changes

- 522c873: Fixes bug where astro build would fail when trying to log

## 0.12.5

### Patch Changes

- b1364af: Updates logging to display messages from Snowpack
- cc532cd: Properly resolve `tailwindcss` depedency if using Tailwind
- Updated dependencies [b1364af]
  - @astrojs/renderer-vue@0.1.1

## 0.12.4

### Patch Changes

- 0d6afae: Fixes a few small bugs with the `Markdown` component when there are multiple instances on the same page
- 1d930ff: Adds [`--verbose`](https://docs.astro.build/cli.md#--verbose) and [`--reload`](https://github.com/withastro/astro/blob/main/docs/cli/#--reload) flags to the `astro` CLI.

## 0.12.3

### Patch Changes

- fe6a985: Fixes resolution when esinstall installs Markdown and Prism components

## 0.12.2

### Patch Changes

- 50e6f49: Fixes issues with using astro via the create script
- Updated dependencies [50e6f49]
  - @astrojs/markdown-support@0.1.1

## 0.12.1

### Patch Changes

- Updated dependencies [6de740d]
  - astro-parser@0.12.1

## 0.12.0

### Minor Changes

- 8ff7998: Enable Snowpack's [built-in HMR support](https://www.snowpack.dev/concepts/hot-module-replacement) to enable seamless live updates while editing.
- ffb6380: Support for dynamic Markdown through the content attribute.
- 8ff7998: Enabled Snowpack's built-in HMR engine for Astro pages
- 643c880: **This is a breaking change**

  Updated the rendering pipeline for `astro` to truly support any framework.

  For the vast majority of use cases, `astro` should _just work_ out of the box. Astro now depends on `@astrojs/renderer-preact`, `@astrojs/renderer-react`, `@astrojs/renderer-svelte`, and `@astrojs/renderer-vue`, rather than these being built into the core library. This opens the door for anyone to contribute additional renderers for Astro to support their favorite framework, as well as the ability for users to control which renderers should be used.

  **Features**

  - Expose a pluggable interface for controlling server-side rendering and client-side hydration
  - Allows components from different frameworks to be nested within each other.
    > Note: `svelte` currently does support non-destructive hydration, so components from other frameworks cannot currently be nested inside of a Svelte component. See https://github.com/sveltejs/svelte/issues/4308.

  **Breaking Changes**

  - To improve compiler performance, improve framework support, and minimize JS payloads, any children passed to hydrated components are automatically wrapped with an `<astro-fragment>` element.

### Patch Changes

- 3d20623: Fixed a bug where Astro did not conform to JSX Expressions' [`&&`](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) syntax.

  Also fixed a bug where `<span data-attr="" />` would render as `<span data-attr="undefined" />`.

- 46871d2: Fixed bug where a class attribute was added to the doctype
- c9d833e: Fixed a number of bugs and re-enabled the `@astrojs/renderer-vue` renderer
- ce30bb0: Temporarily disable `@astrojs/renderer-vue` while we investigate an issue with installation
- addd67d: Rename `astroConfig` to `pages` in config. Docs updated.
- d2330a5: Improve error display for missing local files
- Updated dependencies [643c880]
- Updated dependencies [d2330a5]
- Updated dependencies [c9d833e]
  - @astrojs/renderer-preact@0.1.0
  - @astrojs/renderer-react@0.1.0
  - @astrojs/renderer-svelte@0.1.0
  - @astrojs/renderer-vue@0.1.0
  - astro-parser@0.12.0

## 0.12.0-next.1

### Patch Changes

- ce30bb0: Temporarily disable `@astrojs/renderer-vue` while we investigate an issue with installation

## 0.12.0-next.0

### Minor Changes

- 8ff7998: Enable Snowpack's [built-in HMR support](https://www.snowpack.dev/concepts/hot-module-replacement) to enable seamless live updates while editing.
- 8ff7998: Enabled Snowpack's built-in HMR engine for Astro pages
- 643c880: **This is a breaking change**

  Updated the rendering pipeline for `astro` to truly support any framework.

  For the vast majority of use cases, `astro` should _just work_ out of the box. Astro now depends on `@astrojs/renderer-preact`, `@astrojs/renderer-react`, `@astrojs/renderer-svelte`, and `@astrojs/renderer-vue`, rather than these being built into the core library. This opens the door for anyone to contribute additional renderers for Astro to support their favorite framework, as well as the ability for users to control which renderers should be used.

  **Features**

  - Expose a pluggable interface for controlling server-side rendering and client-side hydration
  - Allows components from different frameworks to be nested within each other.
    > Note: `svelte` currently does support non-destructive hydration, so components from other frameworks cannot currently be nested inside of a Svelte component. See https://github.com/sveltejs/svelte/issues/4308.

  **Breaking Changes**

  - To improve compiler performance, improve framework support, and minimize JS payloads, any children passed to hydrated components are automatically wrapped with an `<astro-fragment>` element.

### Patch Changes

- 3d20623: Fixed a bug where Astro did not conform to JSX Expressions' [`&&`](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) syntax.

  Also fixed a bug where `<span data-attr="" />` would render as `<span data-attr="undefined" />`.

- Updated dependencies [643c880]
  - @astrojs/renderer-preact@0.1.0-next.0
  - @astrojs/renderer-react@0.1.0-next.0
  - @astrojs/renderer-svelte@0.1.0-next.0
  - @astrojs/renderer-vue@0.1.0-next.0

## 0.11.0

### Minor Changes

- 19e20f2: Add Tailwind JIT support for Astro

### Patch Changes

- c43ee95: Bugfix: CSS bundling randomizes order
- 9cdada0: Fixes a few edge case bugs with Astro's handling of Markdown content
- Updated dependencies [9cdada0]
  - astro-parser@0.11.0

## 0.10.0

`astro` has been bumped to `0.10.0` to avoid conflicts with the previously published `astro` package (which was graciously donated to us at `v0.9.2`).

### Minor Changes

- b3886c2: Enhanced **Markdown** support! Markdown processing has been moved from `micromark` to `remark` to prepare Astro for user-provided `remark` plugins _in the future_.

  This change also introduces a built-in `<Markdown>` component for embedding Markdown and any Astro-supported component format inside of `.astro` files. [Read more about Astro's Markdown support.](https://docs.astro.build/markdown/)

### Patch Changes

- 9d092b5: Bugfix: Windows collection API path bug
- Updated dependencies [b3886c2]
  - astro-parser@0.1.0

## 0.0.13

### Patch Changes

- 7184149: Added canonical URL and site globals for .astro files
- b81abd5: Add CSS bundling
- 7b55d3d: chore: Remove non-null assertions
- 000464b: Fix bug when building Svelte components
- 95b1733: Fix: wait for async operation to finish
- e0a4f5f: Allow renaming for default import components
- 9feffda: Bugfix: fixes double <pre> tags generated from markdown code blocks
- 87ab4c6: Bugfix: Scoped CSS with pseudoclasses and direct children selectors
- e0fc2ca: fix: build stuck on unhandled promise reject

## 0.0.11

### Patch Changes

- 3ad0aac: Fix `fetchContent` API bug for nested `.md` files

## 0.0.10

### Patch Changes

- d924fcb: Fix issue with Prism component missing dependency
- Updated dependencies [d924fcb]
  - astro-prism@0.0.2
