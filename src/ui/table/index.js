import './table.scss'
import classNames from 'classnames'

function TableTitle({children = null, align = null}) {
  return (
    <th className={classNames(
      'table__cell',
      'table__cell--head',
      {[`table__cell--${align}`]: align},
    )}>
      <span className="table__title">
        {children}
      </span>
    </th>
  )
}

function TableCol({children = null, align = null}) {
  return (
    <td
      className={classNames(
        "table__cell", 
        "table__cell--body", 
        {[`table__cell--${align}`]: align},
      )}
    >
      {children}
    </td>
  )
} 

function TableHead({ children = null }) {
  return <thead>{children}</thead>
}

function TableBody({ children = null }) {
  return <tbody className="table__body">{children}</tbody>
}

function TableRow({ children = null }) {
  return <tr className="table__row">{children}</tr>
}

function Table({
  caption = '',
  children = null,
}) {
  return (
    <table className="table">
      {caption && (
        <caption className="sr-only">
          {caption}
        </caption>
      )}
      {children}
    </table>
  )
}
export {
  Table,
  TableCol,
  TableHead,
  TableTitle,
  TableRow,
  TableBody,
}