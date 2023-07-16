import TableComponent from './TableComponent';

function EditTable({ sql,handleOpenSQLModal,handleEditSQL }) {
  const edit=(item)=>{
  handleEditSQL(item)
  handleOpenSQLModal()
  }
  return (
    <div className="history-table-container">
      <div className="rounded-rectangle">
        <h3>Edit Previous Queries</h3>
        <TableComponent 
          data={sql.map((item, index) => ({
            'S.no': index + 1,
            SQL: item,
            Operations: <><button className='btn btn-primary' style={{marginRight:"10px"}} onClick={() => edit(item)}>Edit</button></>,
          }))}
        />
      </div>
    </div>
  );
}

export default EditTable;
