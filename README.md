# ryd.one development

This website is built using the modern site generator for Vue.js, [Gridsome](https://gridsome.org/).

The site uses the [Storyblok](https://www.storyblok.com/) CMS.

## Updating gas station map data

1. Replace data file in `/src/data/gas-stations.csv`. **Note:** column headers must remain the same.
2. Run `npm run generate` and commit the changes.

## Local component development

1. Download the node modules
   `npm install`
2. Run the project
   `npm run develop`

You can develop Storyblok components using their interface or the CLI. Please see the Storyblok docs for more info.

## Deploying changes

Storyblok is connected to the `staging` branch and content updates are automatically deployed to https://staging.dlf3y81nu0i2t.amplifyapp.com/.

Please do all development on new branches and create a PR to merge them into the `staging` branch once tested. Our preference is for you to have another developer approve the merge (not us) but it's up to ryd whether they wish for this to occur or not.

While we are actively working on this project, we will update the `master` branch from any new changes that are published into `staging`. This process will likely change once we hand over the project to ryd.

To simplify the testing and approval process, new branches are automatically deployed with the branch name as the subdomain, e.g. the `docs` branch is deployed to https://docs.dlf3y81nu0i2t.amplifyapp.com/.

Deployment can take up to 7 minutes. If the branch does not deploy, check that you can run the build command locally, i.e. `npm run build`.

## Methodlogies and styles

Vue components that are used once per page should be prefixed with _The_, e.g. `TheHeader`. Sub components take on the parent name, i.e. `TheHeaderSidenav`.

Styles for once-off components should be prefixed with _xy-_, e.g. `xy-header`. All child styles adopt the parent prefix, so `header-container` etc. The parent class should wrap all children, but no further nesting is necessary.

Vue components that are reusable should be prefixed with _V_, e.g. `VButton`. Sub components adopt the parent name, i.e. `VButtonItem`.

Styles for reusable components should be prefixed with _v-_, e.g. `v-button`. All child styles adopt the parent prefix, so `button-primary` etc. The parent class should wrap all children, but no further nesting is necessary.

We use the same naming convention for Vue components in Storyblok.

We use the scss language for stylesheets. Please include the global `styles.scss`. Top level base styles exist in the `Default.vue` and should target elements directly, i.e. `h1` or `a` etc.
