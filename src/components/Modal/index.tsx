import Styles from './index.module.scss'
import classNames from "classnames/bind";

const Modal = ({ isOpened, onClose, className, children }) => {
  if (!isOpened) return null;

  return (
    <div className={ Styles.Modal }>
      <div
        className={ Styles.Modal__overlay }
        onClick={ onClose }
      />

      <div
        className={ classNames(className, Styles.Modal__content) }
        onClick={(e) => e.stopPropagation()}
      >
        { children }
      </div>
    </div>
  );
};

export default Modal;
