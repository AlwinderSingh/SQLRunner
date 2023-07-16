import TableComponent from './TableComponent';

function HistoryTable({ sql, execute }) {
  return (
    <div className="history-table-container">
      <div className="rounded-rectangle">
        <h3>History</h3>
        <TableComponent 
          data={sql.map((item, index) => ({
            'S.no': index + 1,
            SQL: item,
            Operations: <button className='btn btn-primary' onClick={() => execute(item)}>Execute</button>,
          }))}
        />
      </div>
    </div>
  );
}

export default HistoryTable;
