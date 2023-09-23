import StepProgress from './stepProgress';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import ProgressControl from './progressControl';
import styles from './main.module.scss';


function Register() {
  return (
    <>
      <section className={styles.register_container}>
        <StepProgress />
        <section className={styles.form_container}>
          <StepOne />
          {/* <StepTwo /> */}
        </section>
        <ProgressControl />
      </section>
    </>
  )
}

export default function Main() {
  return (
    <div className={styles.site_main}>
      <div className={styles.main_container}>
        <Register />
      </div>
    </div>
  )
}