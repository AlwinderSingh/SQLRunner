import React, { useState, useEffect } from 'react';
import { Modal, Dropdown, Button } from 'react-bootstrap';
import TableComponent from './TableComponent';

const ModalWithTable = ({ currSql, csvData, showTable, setShowTable }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const rowsPerPage = 15;
  const [paginatedData, setPaginatedData] = useState([]);

  const totalPages = Math.ceil(csvData.length / rowsPerPage);

  

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleCountRows = () => {
    const rowCount = csvData.length;
    alert(`Number of rows: ${rowCount}`);
  };

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(convertToCSV(csvData));
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "result.csv");
    link.click();
  };

  const handleSortColumn = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortData = (data) => {
  if (sortColumn) {
    const sortedData = [...data];
    sortedData.forEach((row) => {
      for (let key in row) {
        if (typeof row[key] === 'string') {
          row[key] = row[key].replace(/^"|"$/g, ''); // Remove leading and trailing quotation marks
        }
      }
    });

    sortedData.sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (isNaN(valueA) && isNaN(valueB)) {
        // Both values are non-numeric, compare as strings
        return valueA.localeCompare(valueB);
      } else if (isNaN(valueA)) {
        // valueA is non-numeric, treat it as greater than valueB
        return 1;
      } else if (isNaN(valueB)) {
        // valueB is non-numeric, treat it as greater than valueA
        return -1;
      } else {
        // Both values are numeric, compare as numbers
        return parseFloat(valueA) - parseFloat(valueB);
      }
    });

    if (sortDirection === 'desc') {
      sortedData.reverse();
    }

    return sortedData;
  }

  return data;
};

  const convertToCSV = (data) => {
    const csvRows = [];
    
    const headerRow = Object.keys(data[0]).join(",");
    csvRows.push(headerRow);
  
    data.forEach((row) => {
      const values = Object.values(row).map((value) => {
        
        return value;
      });
  
      const csvRow = values.join(",");
      csvRows.push(csvRow);
    });
  
    return csvRows.join("\n");
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = csvData.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  }, [currentPage, csvData]);

  if (!showTable || !csvData || csvData.length === 0) {
    return null;
  }

  const sortedData = sortData(paginatedData);

  return (
    <Modal className="modal-lg" show={showTable} onHide={() => setShowTable(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{currSql}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableComponent data={sortedData} />

        <div className="pagination">
          <Button variant="outline-primary" onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </Button>
          <span className="pagination-label">
            {`${currentPage}/${totalPages}`}
          </span>
          <Button variant="outline-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </Button>

          <Button variant="primary" onClick={handleCountRows} style={{ marginLeft: 10, marginRight: 10 }}>
            Count Rows
          </Button>
          <Button variant="primary" onClick={handleDownloadCSV} style={{ marginLeft: 10, marginRight: 10 }}>
            Download CSV
          </Button>

          <Dropdown>
            <Dropdown.Toggle variant="primary" id="sort-dropdown">
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(csvData[0]).map((column) => (
                <Dropdown.Item key={column} onClick={() => handleSortColumn(column)}>
                  {column}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalWithTable;
