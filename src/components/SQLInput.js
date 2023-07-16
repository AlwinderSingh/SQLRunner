import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function SQLInput({ handleFileContent,fileContent,execute,handleOpenSQLModal,handleCloseSQLModal,showSQLModal,sql }) {
  const [inputValue, setInputValue] = useState(sql);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleExecuteClick = () => {
    if(inputValue.slice(-1)===';'){
    execute(inputValue);
    handleFileContent(fileContent+inputValue)
    setInputValue('');
    handleCloseSQLModal();
    }
    else{
        alert('End the query with a ";"')
    }
  };

 
  return (
    <Modal show={showSQLModal} onHide={handleCloseSQLModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter SQL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="sql-input">
            <Form.Label>Enter SQL:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div style={{color:"red"}}>Make Sure the SQL ends with a ";"</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSQLModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleExecuteClick}>
            Save & Run
          </Button>
          
        </Modal.Footer>
      </Modal>
  );
}


export default SQLInput;
