import SideBarRoute from './ListElement/SideBarRoute'
import sideBar from './side-bar.module.css'
import SideFooter from './SideFooter/SideFooter'

const SideBar = () => {
    const mainRoutes = [
        { name: 'Профиль', route: 'profile' },
        { name: 'Диалоги', route: 'dialogs' },
        { name: 'Подписки', route: 'subscribes' },
        { name: 'Сообщества', route: 'communities' }
    ]
    const serviceRoutes = [
        {name: 'Настройки', route: '/settings'},
        {name: 'Поддержка', route: '/support'},
        {name: 'Сообщить о проблеме', route: '/report'}
    ]
    const mainRoutesElements = mainRoutes.map((route: any, index: number) => (
        <SideBarRoute key={index} name={route.name} route={route.route} />
    ))
    const serviceRoutesElements = serviceRoutes.map((route: any, index: number) => (
        <SideBarRoute key={index} name={route.name} route={route.route} />
    ))
    return (
        <aside className={sideBar.container}>
            <nav className={sideBar.nav}>
                <ul className={sideBar.routes_list}>
                    {mainRoutesElements}
                </ul>
            </nav>
            <div className={sideBar.split_line}></div>
            <nav className={sideBar.nav}>
                <ul className={sideBar.routes_list}>
                    {serviceRoutesElements}
                </ul>
            </nav>
            <div className={sideBar.split_line}></div>
            <SideFooter />
        </aside>
    )
}

export default SideBar