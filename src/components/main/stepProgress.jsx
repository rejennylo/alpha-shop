import styles from './stepProgress.module.scss';

function ProgressGroup({label,number}) {
  return (
    <span className={styles.progress_group}>
      <span className={styles.progress_icon}>
        <span className={styles.text}>{number}</span>
      </span>
      <span className={styles.progress_label}>{label}</span>
    </span>
  )
}

export default function StepProgress() {
  return(
    <>
    <h2 className={styles.register_title}>結帳</h2>
    <section className={styles.progress_container}>
      <ProgressGroup 
      number='1'
      label='寄送地址'/>
      <span className={styles.progress_bar} data-order='1'></span>
      <ProgressGroup 
      number='2'
      label='運送方式'/>
      <span className={styles.progress_bar} data-order='2'></span>
      <ProgressGroup 
      number='3'
      label='付款資訊'/>
    </section>
    </>
  )
}