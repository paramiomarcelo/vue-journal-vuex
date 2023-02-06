

export default {
    name:'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-noentry" */ '../views/NoEntrySelected.vue'),

        },
        {
            path: ':id',
            name: 'entry',
            component:() => import(/* webpackChunkName: "daybook-noentry" */ '../views/EntryView.vue'),
        }
    ]
}