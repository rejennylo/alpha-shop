import styles from './steps.module.scss'
import { InputGroup } from './stepOne'


export default function StepThree() {
  return (
      <from className={styles.form}>
        <h3 className={styles.form_title}>付款資訊</h3>
        <section className={styles.form_body}>
          <div className={styles.col}>
            <InputGroup label='持卡人姓名'>
              <input className={styles.input_info} type="text" placeholder="John Doe" />
            </InputGroup>
          </div>
          <div className={styles.col}>
            <InputGroup label='卡號'>
              <input className={styles.input_info} type="text" placeholder="1111 2222 3333 4444" />
            </InputGroup>
          </div>
          <div className={styles.col}>
            <InputGroup label='有效期限'>
              <input className={styles.input_info} type="text" placeholder="MM/YY" />
            </InputGroup>
            <InputGroup label='CVC/CCV'>
              <input className={styles.input_info} type="text" placeholder="123" />
            </InputGroup>
          </div>
        </section>
      </from>
  )
}