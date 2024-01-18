const data = [
        {
                name: 'Главная',
                path: '/'
        },
        {
                name: 'О нас',
                path: '/about',
                list: [
                        {
                                name: 'О компании',
                                path: '/about'
                        },
                        {
                                name: 'Часто задаваемые вопросы',
                                path: '/faqs'
                        },
                        {
                                name: 'Блог',
                                path: '/blog'
                        },
                        {
                                name: 'Доставка и оплата',
                                path: '/delivery-and-payment'
                        }
                ]
        },
        {
                name: 'Портфолио',
                path: '/portfolio',
                list: [
                        {
                                name: 'Все работы',
                                path: '/portfolio',
                                main: true
                        },
                        {
                                name: 'Двери',
                                path: '/doors',
                        },
                        {
                                name: 'Столы',
                                path: '/tables',
                        },
                        {
                                name: 'Стулья',
                                path: '/tables',
                        },
                        {
                                name: 'Коммоды',
                                path: '/tables',
                        },
                ]
        },
        {
                name: 'Контакты',
                path: '/contacts',
        },
]

export default data