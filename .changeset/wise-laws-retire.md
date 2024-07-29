---
"@asyncapi/generator": minor
---

- New release pipeline supporting monorepo,
- Package `@asyncapi/generator-filters` is now part of `generator` repo and won't be released separately. New name of the library is `nunjuckis-filters`,
- By default `@asyncapi/generator-filters` package, known as package with a lot of different nunjucks filters, is registered and added to generator and you no longer have to configure it in your `package.json`. Package `@asyncapi/generator-filters` will no longer be published to NPM separately and is deprecated.