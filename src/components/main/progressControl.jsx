import styles from './progressControl.module.scss';

function NextStep({handleNextClick}) {
  return (
    <button className={styles.next} onClick={handleNextClick}>
      下一步
    </button>
  )
}

function PreStep({handlePreClick}) {
  return (
    <button className={styles.prev} onClick={handlePreClick}>
      上一步
    </button>
  )
}

function ConfirmButton({handleSubmit}) {
  return (
    <button className={styles.next} onClick={handleSubmit}>
      確認下單
    </button>
  )
}

function ButtonGroup({phase,children}) {
  return (
    <section className={styles.button_group} data-phase={phase}>
      {children}
    </section>
  )
}

export default function ProgressControl() {
  return (
    <section className="progress-control-container">
      <ButtonGroup phase='address'>
        <NextStep />
      </ButtonGroup>
    </section>
  )
}