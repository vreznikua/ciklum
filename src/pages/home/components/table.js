import { useState, useMemo } from 'react'
import {
  Table,
  TableHead,
  TableTitle,
  TableBody,
  TableRow,
  TableCol,
  Link,
  Text,
  Chip,
  Range,
  Checkbox,
  Button,
} from 'ui'

import { TABLE_HEAD_LIST } from './const'
import { getFormattedInteger, getColorTextByInteger } from './utils'

import css from './table.module.scss'

const rowData = [
  {
    id: 1,
    symbol: 'AFK',
    price: 19.51,
    change: -0.14,
    changePersent: -0.71,
    alerts: true,
    volume: 1911,
    avgVolume: 11420,
    prevClose: 19.65,
    open: 19.65,
    high: 19.65,
    low: 19.65,
    range: {
      low: 19.65,
      rangePercent: 20,
      high: 19.69,
    },
    quant: 4.32,
    authors: 4.32,
    sellSide: null,
  },
  {
    id: 2,
    symbol: 'BRK.A',
    price: 335200,
    change: 1584.00,
    changePersent: 0.47,
    alerts: false,
    volume: 43,
    avgVolume: 282.18,
    prevClose: 333651,
    open: 333651,
    high: 333651,
    low: 333651,
    range: {
      low: 335081,
      rangePercent: 70,
      high: 336392,
    },
    quant: 3.00,
    authors: 4.32,
    sellSide: 4.56,
  },
]


function CheckboxWrapper({ checked = false }) {
  const [isChecked, setChecked] = useState(checked)

  const handleChecked = () => {
    setChecked(!isChecked)
  }

  return (
    <Checkbox checked={isChecked} onChange={handleChecked}/>
  )
}

function HomeTable() {

  const [sortConfig, setSortConfig] = useState(null)

  const sortedItems = useMemo(() => {
    let list = [...rowData]
    if (sortConfig !== null) {
      list.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'up' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'down' ? 1 : -1
        }
        return 0
      })
    }
    return list
  }, [sortConfig])

  const handleSortConfig = key => {
    let direction = 'up'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'up') {
      direction = 'down'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className={css.table}>
      <div className={css.table__wrapper}>
        <Table caption="Portfolio 1 - Dividends & Income">
          <TableHead>
            <TableRow>
              {TABLE_HEAD_LIST.map(({id, text, align}) => (
                <TableTitle key={id} align={align}>
                  <Button onClick={() => handleSortConfig('symbol')} className={css['sort-button']}>
                    {text}
                  </Button>  
                </TableTitle>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedItems.map(({
              id, symbol, price, change, changePersent, alerts, volume, avgVolume, prevClose, open, high, low, range: {
                low: rangeLow,
                rangePercent,
                high: rangeHigh,
              },
              quant,
              authors,
              sellSide,
            }) => {
              return (
                <TableRow key={id}>
                  <TableCol align="left">
                    <Link>{symbol}</Link>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(price)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text color={getColorTextByInteger(change)}>
                      {getFormattedInteger(change)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text  color={getColorTextByInteger(changePersent)}>
                      {`${changePersent}%`}
                    </Text>
                  </TableCol>
                  <TableCol>
                    <CheckboxWrapper checked={alerts || false}/>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(volume)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(avgVolume)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(prevClose)}
                    </Text>
                  </TableCol>
                  <TableCol>
                    <Text align="right">
                      {getFormattedInteger(open)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(high)}
                    </Text>
                  </TableCol>
                  <TableCol align="right">
                    <Text>
                      {getFormattedInteger(low)}
                    </Text>
                  </TableCol>
                  <TableCol>
                    <div className={css.range}>
                      <Text caption color="grey">
                        {getFormattedInteger(rangeLow)}
                      </Text>
                      <Range pointPlacement={rangePercent} className={css.range__pointer }/>
                      <Text caption color="grey">
                        {getFormattedInteger(rangeHigh)}
                      </Text>
                    </div>
                  </TableCol>
                  <TableCol>
                    <Chip color="light-green">
                      {quant}
                    </Chip>
                  </TableCol>
                  <TableCol>
                    <Chip color="light-green">
                      {authors}
                    </Chip>
                  </TableCol>
                  <TableCol>
                    <Chip>
                      {sellSide || 'NR'}
                    </Chip>
                  </TableCol>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default HomeTable