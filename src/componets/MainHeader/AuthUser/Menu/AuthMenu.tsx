import authMenu from './auth-menu.module.css'
import MenuElement from './MenuElement/MenuElement'
import SignOut from './SignOut/SignOut'

const AuthMenu = (props: any) => {
    const menuList = [
        { name: 'Настройки', route: '/main-content/settings' },
        { name: 'Поддержка', route: '/main-content/support' }
    ]

    const menuListElements = menuList.map((element: any, index: number) => (
        <MenuElement key={index} name={element.name} route={element.route} />
    ))

    return (
        <div className={props.openedStatus ? authMenu.container : authMenu.container_closed}>
            <ul className={authMenu.menu_list}>
                <SignOut />
                {menuListElements}
            </ul>
        </div>
    )
}

export default AuthMenu