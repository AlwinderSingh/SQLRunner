import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import { OverlayTrigger, Tooltip} from "react-bootstrap"
import { useState } from 'react';


const RecentCards = ({ fileContent,handleFileContent,execute,filePath,handleOpenSQLModal }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };
  const addSql=()=>{
    handleOpenSQLModal()
  }

  const readFile = async () => {
    try {
      const response = await fetch(filePath);
      const content = await response.text();
      console.log(response)
      handleFileContent(content);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  React.useEffect(() => {
    if (filePath) {
      readFile();
    }
  }, [filePath]);
  React.useEffect(()=>{
    console.log(fileContent)
  },[fileContent.length])
 
  
  const renderCards = () => {
    if (!fileContent) return null;
  
    const linesAll = fileContent.split(';');
    const linestrunc = linesAll.slice(-5,-1);
    const numRows = Math.ceil(linestrunc.length / 5);
    const lines=linestrunc.reverse();
  
    return Array.from({ length: numRows }, (_, rowIndex) => (
        <Row key={rowIndex}>
          {rowIndex === 0 && (
            <Col sm={2}>
              <Card bg="success">
                <Card.Body>
                  <Card.Title>
                    <a onClick={() => addSql()} style={{ cursor: 'pointer', fontSize: '48px', fontWeight: 'bold' }}>+</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
          {lines.slice(rowIndex * 5, (rowIndex + 1) * 5).map((line, index) => (
            <Col key={index} sm={2}>
              <Card>
                <Card.Body>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{line}</Tooltip>}
                  >
                    <Card.Title
                      onMouseEnter={() => handleCardHover(index)}
                      onMouseLeave={() => handleCardHover(null)}
                    >
                      {"SQL" + (index+1)}
                    </Card.Title>
                  </OverlayTrigger>
                  <Card.Text>
                    <Button variant="primary" onClick={() => execute(` ${line}`)}>
                      Execute
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ));
      
  };
  
  

  return <div className="card-layout">{renderCards()}</div>;
};


export default RecentCards;
