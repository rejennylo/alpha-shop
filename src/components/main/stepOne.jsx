import styles from './steps.module.scss'

const cities = [
  { id: 'NULL', name: '請選擇縣市' },
  { id: 'KLU', name: '基隆市' },
  { id: 'TPH', name: '新北市' },
  { id: 'TPE', name: '臺北市' },
  { id: 'TYC', name: '桃園市' },
  { id: 'HSH', name: '新竹縣' },
  { id: 'HSC', name: '新竹市' },
  { id: 'MAC', name: '苗栗市' },
  { id: 'MAL', name: '苗栗縣' },
  { id: 'TXG', name: '臺中市' },
  { id: 'CWH', name: '彰化縣' },
  { id: 'CWS', name: '彰化市' },
  { id: 'NTC', name: '南投市' },
  { id: 'NTO', name: '南投縣' },
  { id: 'YLH', name: '雲林縣' },
  { id: 'CHY', name: '嘉義縣' },
  { id: 'CYI', name: '嘉義市' },
  { id: 'TNN', name: '臺南市' },
  { id: 'KHH', name: '高雄市' },
  { id: 'IUH', name: '屏東縣' },
  { id: 'PTS', name: '屏東市' },
  { id: 'ILN', name: '宜蘭縣' },
  { id: 'ILC', name: '宜蘭市' },
  { id: 'HWA', name: '花蓮縣' },
  { id: 'HWC', name: '花蓮市' },
  { id: 'TTC', name: '臺東市' },
  { id: 'TTT', name: '臺東縣' },
  { id: 'PEH', name: '澎湖縣' },
  { id: 'KMN', name: '金門縣' },
  { id: 'LNN', name: '連江縣' }
]

const genders = [
  { value: 'mr', sex: '先生'},
  { value: 'ms', sex: '女士'},
  { value: 'mx', sex: '不明'},
]

function InputGroup({label, children}) {
  return (
    <div className={styles.input_group}>
      <div className={styles.input_label}>{label}</div>
      {children}
    </div>
  )
}

export default function StepOne() {
  return (
      <from className={styles.form}>
        <h3 className={styles.form_title}>寄送地址</h3>
        <section className={styles.form_body}>
          <div className={styles.col}>
            <InputGroup
            label='性別'>
              <div className={styles.select_container}>
                <select defaultValue="mr">
                  {genders.map(gender => <option value={gender.value}>{gender.sex}</option>)}
                </select>
              </div>
            </InputGroup>
            <InputGroup
            label='姓名'>
              <input className={styles.input_info} type="text" placeholder="請輸入姓名" />
            </InputGroup>
          </div>
          <div className={styles.col}>
            <InputGroup
            label='電話'>
              <input className={styles.input_info} type="tel" placeholder="請輸入行動電話" />
            </InputGroup>
            <InputGroup
            label='Email'>
              <input className={styles.input_info} type="email" placeholder="請輸入電子郵件" />
            </InputGroup>
          </div>
          <div className={styles.col}>
            <InputGroup 
            label='縣市'>
              <div className={styles.select_container}>
                <select required>
                  {cities.map(city => <option key={city.id} value={city.id}>{city.name}</option>)}
                </select>
              </div>
            </InputGroup>
            <InputGroup 
            label='地址'>
              <input className={styles.input_info} type="email" placeholder="請輸入地址" />
            </InputGroup>
          </div>
        </section>
      </from>
  )
}