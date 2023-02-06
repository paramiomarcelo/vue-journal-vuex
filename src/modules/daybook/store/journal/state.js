



export default  () => ({
    isLoanding: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus sequi harum voluptate illo, quos blanditiis sunt culpa tempore magni omnis nemo iusto amet eligendi modi, reiciendis quam! Quis, excepturi neque!',
            picture: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'consectetur adipisicing elit. Ducimus sequi harum voluptate illo, quos blanditiis sunt culpa tempore magni omnis nemo iusto amet eligendi modi, reiciendis quam! Quis, excepturi neque!',
            picture: null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'voluptate illo, quos blanditiis sunt culpa tempore magni omnis nemo iusto amet eligendi modi, reiciendis quam! Quis, excepturi neque!',
            picture: null
        }
    ]
})