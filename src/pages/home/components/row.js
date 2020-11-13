import { useState } from 'react'

import {
  TableCol,
  Link,
  Text,
  Chip,
  Range,
  Checkbox,
  TableRow,
} from 'ui'

import css from './table.module.scss'

import { getFormattedInteger, getColorTextByInteger } from './utils'

function CheckboxWrapper({ checked = false }) {
  const [isChecked, setChecked] = useState(checked)

  const handleChecked = () => {
    setChecked(!isChecked)
  }

  return (
    <Checkbox checked={isChecked} onChange={handleChecked}/>
  )
}

export const getRow = ({
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
    <TableRow id={id}>
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
          {sellSide}
        </Chip>
      </TableCol>
    </TableRow>
  )
}