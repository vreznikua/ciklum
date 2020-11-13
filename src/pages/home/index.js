import { Button, Separator, Tabs } from 'ui'
import css from './home.module.scss'
import { EditIcon, ExelIcon, EarningsIcon, PrintIcon } from 'icons'
import Table from './components/table.js'


function HomePage() {

  const sections = [
    {id: 'summar',  title: 'Summar', content: <div className={css.table__content}><Table /></div>},
    {id: 'holdings',  title: 'Holdings', content: <div className={css.table__content}>Holdings content</div>}
  ]

  return (
    <div className={css.page}>
      <main>
        <section>
          <div className={css.head}>
            <h2 className={css.head__title}>
                Portfolio 1 - Dividends & Income
            </h2>
            <div className={css.options}>
              <Button
                primary
                className={css['spacer-desktop']}
              >
                  + Add Symbol
              </Button>  
              <Button
                className={css['spacer-desktop']}
                icon={<EditIcon />}
              >
                  Edit Portfolio
              </Button>
              <Separator className={css['spacer-desktop']}/>
              <Button
                className={css['spacer-desktop']}
                icon={<ExelIcon />}
              />
              <Button
                className={css['spacer-desktop']}
                icon={<PrintIcon />}
              />
              <Separator className={css['spacer-desktop']}/>
              <Button
                icon={<EarningsIcon />}
              >
                  View Headlines
              </Button>
            </div>
          </div>
        </section>
        <section className={css.table}>
          <Tabs sections={sections} />
        </section>
      </main>
    </div>
  )
}

export default HomePage