import navigationStyles from '../Navigation/Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={navigationStyles.information__box}>
    <div className={navigationStyles.information__background}>
      <div className={navigationStyles.information__iconBox}>
        <div className={navigationStyles.information__icon}>O</div>
      </div>
      <div className={navigationStyles.information__options}>
        <div className={navigationStyles.information__menu}>Menu</div>
        <div className={navigationStyles.information__restaurant}>Restaurant</div>
        <div className={navigationStyles.information__classes}>Classes</div>
      </div>
      <div className={navigationStyles.information__bookFone}>
        <div className={navigationStyles.information__bookATable}>BOOK A TABLE</div>
      </div>
    </div>
  </div>
  )
}

export default Navigation;