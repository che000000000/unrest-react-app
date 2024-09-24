import profileLoading from './profile-loading.module.css'

const ProfileLoading = (props: any) => {
    return (
        <div className={profileLoading.container}>
            <div className={profileLoading.title}>Загрузка профиля...</div>
        </div>
    )
}

export default ProfileLoading