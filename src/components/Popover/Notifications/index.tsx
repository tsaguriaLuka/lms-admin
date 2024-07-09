import styles from "./index.module.scss";

import Modal from "@components/Modal";
import IconHat from "@components/Icons/hat.tsx";
import IconBox from "@components/Icons/Box";

const Notifications = ({
  isNotificationsModal,
  setNotificationsModal
}) => {
  return (
    <Modal
      isOpened={ isNotificationsModal }
      onClose={ () => setNotificationsModal(false) }
      className={ styles.Notifications }
    >
      <div className={ styles.Notifications__item }>
        <IconBox>
          <IconHat />
        </IconBox>

        <div className={ styles.Notifications__item__content }>
          <div className={ styles['Notifications__item__content-header'] }>
            <div>New block</div>

            <p className={ styles['Notifications__item__content-header-date'] }>2 june 15:44</p>
          </div>

          <p
            className={ styles['Notifications__item__content-message'] }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deleniti quidem velit. Accusamus, laudantium, temporibus?
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default Notifications
