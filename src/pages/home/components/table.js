import { useState, useMemo } from 'react'
import {
  Table,
  TableHead,
  TableTitle,
  TableBody,
  TableRow,
  Button,
} from 'ui'

import { getRow } from './row'

import { TABLE_HEAD_LIST } from './const'
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
            {sortedItems.map((item) => getRow(item))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default HomeTable