import styles from './steps.module.scss'

function Radio({id, text, period}) {
  return (
    <label className={styles.radio_group}>
      <input className={styles.radio_input} id={id} name='shipping' type="radio" />
      <div className={styles.radio_info}>
        <div className={styles.col}>
          <div className={styles.text}>{text}</div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.period}>{period}</div>
      </div>
      <div className={styles.radio_box_border}></div>
    </label>
  )
}

export default function StepTwo() {
  return (
    <section className={styles.form}>
      <h3 className={styles.form_title}>運送方式</h3>
      <section className={styles.form_body}>
        <Radio 
        id='shipping-standard'
        text='標準運送'
        period='3~7 個工作天'/>
        <Radio 
        id='shipping-dhl'
        text='DHL 貨運'
        period='48 小時內送達'/>
      </section>
    </section>
  )
}
