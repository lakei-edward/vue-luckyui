module.exports = {
    base:'/luckyui.github.io/',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'lucky-logo.png' }
        ]
    ],
    title: 'vue-luckyui',
    description: 'vue-luckyui，让我们打开不一样的UI组件库吧',
    themeConfig: {
        logo: '/lucky-logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '快速入门', link: '/pages/' },
            { text: '个人博客', link: 'http://43.142.176.173/lakeiedward/'},
            { text: 'GitHub', link: 'https://github.com/lakei-edward/vue-luckyui' },
        ],
        sidebar:{
            '/pages/':[
                {
                    title: '快速入门',
                    collapsable:false,
                    children:[
                        '',
                    ]
                },
                {
                    title: '组件',
                    collapsable:false,
                    children:[
                        'Button',
                        'Divider',
                        'Contextmenu',
                        'Buttongroup',
                        'Popupmenu',
                        'Download',
                        'DisablePanel',
                    ]
                },
                {
                    title: '留言',
                    collapsable:false,
                    children:[
                        'talk'
                    ]
                }
            ],
        }
    }
}