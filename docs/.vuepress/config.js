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
        sidebarDepth: 2,
        sidebar: 'auto',
        lastUpdated: '最后更新时间',
    }
}