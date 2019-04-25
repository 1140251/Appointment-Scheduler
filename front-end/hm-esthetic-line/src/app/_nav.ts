export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
    },
    // {
    //     title: true,
    //     name: 'FES'
    // },
    {
        name: 'Customer Orders',
        url: '/listCustomerOrders/listCustomerOrders',
        icon: 'icon-speedometer',
    },
    {
        name: 'Customers',
        url: '/Customers',
        icon: 'icon-people',
    },
    {
        name: 'Services',
        url: '/Services',
        icon: 'icon-home',
    },
    {
        name: 'Appointments',
        url: '/Appointments',
        icon: 'cui-calendar',
    },
    {
        name: 'KPIs',
        url: '/kpis',
        icon: 'icon-speedometer',
        children: [
            {
                name: 'Total Kgs of Yarn in each Production Process',
                url: '/kpis/totalYarnInEachProcess',
                icon: 'icon-puzzle'
            },
            {
                name: 'Total Sales per Yarn Type Sold',
                url: '/kpis/totalSalesPerYarnTypeSold',
                icon: 'icon-puzzle'
            },
            {
                name: 'Sales of closed orders',
                url: '/kpis/salesOfClosedOrders',
                icon: 'icon-puzzle'
            }
        ]
    },
];
