// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.loadSource(async store => {
    store.addMetadata('siteName', 'ryd Germany')
    store.addMetadata('siteTwitter', '@RYDofficialDE')
    store.addMetadata('siteUrl', 'https://de.ryd.one' )
    store.addMetadata('fallbackImage', '/assets/static/placeholder.png')
    store.addMetadata('siteLogo', '/assets/static/placeholder.png')
  })

  api.createPages(async ({ graphql, createPage }) => {
    // load data from Storyblok API
    const { data } = await graphql(`{
      allStoryblokEntry {
        edges {
          node {
            id
            full_slug
            name
          }
        }
      },
      header: allStoryblokEntry (
        filter: { 
          name: { eq: "Header" }
        }
      ){
        edges {
          node {
            id
            full_slug
            name
          }
        }
      }
    }`)


 
    // for each content found create a page
    data.allStoryblokEntry.edges.forEach(({ node }) => {
      if (node.full_slug === 'home') {
        createPage({
          path: '/',
          component: './src/templates/StoryblokEntry.vue',
          context: {
            id: node.id,
            language: node.language
          }
        })
      }
      createPage({
        path: `/${node.full_slug}`,
        component: './src/templates/StoryblokEntry.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}