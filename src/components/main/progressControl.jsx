import styles from './progressControl.module.scss';

function NextStep({handleNextClick}) {
  return (
    <button className={styles.button_next} onClick={handleNextClick}>
      下一步
    </button>
  )
}

function PreStep({handlePreClick}) {
  return (
    <button className={styles.button_prev} onClick={handlePreClick}>
      上一步
    </button>
  )
}

function ConfirmButton({handleSubmit}) {
  return (
    <button className={styles.button_submit} onClick={handleSubmit}>
      確認下單
    </button>
  )
}

export default function ProgressControl() {
  return (
    <section className="progress-control-container">
      <section className={styles.button_group}>
        <NextStep />
        {/* <PreStep /> */}
        {/* <ConfirmButton /> */}
      </section>
    </section>
  )
}