module.exports = {
    title: 'ToTwo - Blogs',
    description: '研发要比产品还懂业务 ',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    port: 16010 ,
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
          { text: '首页', link: '/' },
          { text: '简介', link: '/md/introduce/' },
          { text: 'ToTwoBBS', link: 'https://bbs.mytotwo.cn/' },
        ],
        sidebar: [
            {
              title: '简介',   
              path: '/md/introduce/', 
              collapsable: false, 
              sidebarDepth: 1
            },
            {
              title: '测试',
              children: [
                {
                    title: '测试',   
                    path: '/md/test/', 
                    collapsable: false, 
                    sidebarDepth: 1
                }
              ]
            }
        ],
        smoothScroll: true,
        lastUpdated: '最后更新时间',
        docsRepo: 'https://gitee.com/HTRTan/vuepress-totwo',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '完善此页！'
    },
    plugins: [
        ['@vuepress/plugin-back-to-top' , true],
        ['@vuepress/plugin-medium-zoom' , true],
        ['vuepress-plugin-code-copy', true]
    ]
}