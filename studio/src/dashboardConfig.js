export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fabef5e363891bc339c96e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aqpdw6bj',
                  apiId: '73abf661-00b2-422d-a22f-615910d102ad'
                },
                {
                  buildHookId: '5fabef5fbd5a19c0dffb8089',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2x7zdiba',
                  apiId: '5fd9d826-d30c-406a-ba69-5ac56b246326'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klincode/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2x7zdiba.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
