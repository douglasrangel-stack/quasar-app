const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: 'starships',
                component: () =>
                    import ('pages/Starships.vue')
            },
            {
                path: 'account',
                component: () =>
                    import ('pages/Account.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes