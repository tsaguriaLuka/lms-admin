import styles from "./index.module.scss";

const ProgramStage = ({ children }) => {
  return (
    <div className={ styles.Stage }>
      <p className={ styles['Stage-stage-order'] }>
        Stage
      </p>

      <h2 className={ styles['Stage-stage-description'] }> Stage description </h2>

      <div className={ styles.Stage__wrapper }>
        { children }
      </div>
    </div>
  )
}

export default ProgramStage
