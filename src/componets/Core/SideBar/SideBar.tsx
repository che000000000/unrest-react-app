import SideBarRoute from './ListElement/SideBarRoute'
import sideBar from './side-bar.module.css'

const SideBar = () => {
    const sideBarRoutes = [
        { name: 'Профиль', route: '/profile' },
        { name: 'Диалоги', route: '/dialogs' },
        { name: 'Подписки', route: '/subscribes' },
        { name: 'Сообщества', route: '/communities' }
    ]
    const listElements = sideBarRoutes.map((route: any) => (
        <SideBarRoute name={route.name} route={route.route} />
    ))
    return (
        <aside className={sideBar.container}>
            <nav className={sideBar.nav}>
                <ul className={sideBar.routes_list}>
                    {listElements}
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar