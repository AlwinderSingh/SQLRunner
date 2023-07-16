import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import RecentCards from './components/RecentCards';
import Papa from 'papaparse';
import ModalWithTable from './components/ModalWithTable';
import HistoryTable from "./components/HistoryTable"
import SQLInput from './components/SQLInput';
import EditTable from './components/EditTable';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showTable, setShowTable] = useState(false);
  const [csvData, setCSVData] = useState([]);
  const [sql,setSql]=useState([])
  const [currSql,setCurrSql]=useState("")
  const [showSQLModal, setShowSQLModal] = useState(false);
  const [fileContent, setFileContent] = React.useState('');
  const [editSQL,setEditSQL]=useState("")

  const handleEditSQL=(sql)=>{
    setEditSQL(sql);
  }
  const handleFileContent=(content)=>{
    setFileContent(content)
  }
  const handleOpenSQLModal = () => {
    setShowSQLModal(true);
  };
 

  const handleCloseSQLModal = () => {
    setShowSQLModal(false);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const execute = (SQL) => {
   
    setSql((sql)=>[...sql,SQL])
    setCurrSql(SQL)
    const mockmapping={
      "SELECT S.no,name,class, from EMP where EMPCODE>100;":"faithful.csv",
      "SELECT S.no,name,class, from EMP where EMPCODE>200;":"freshman_kgs.csv",
      "SELECT S.no,name,class, from EMP where EMPCODE>300;":"grades.csv",
      "SELECT S.no,name,class, from EMP where EMPCODE>400;":"hw_25000.csv",
      "SELECT S.no,name,class, from EMP where EMPCODE>500;":"lead_shot.csv",
      "SELECT S.no,name,class, from EMP where EMPCODE>600;":"snakes_count_1000.csv"
    }
    // Perform the execution with the provided title
    console.log(`${SQL}`);
        
      let filePath=Object.values(mockmapping).at(Math.floor((Math.random() * Object.values(mockmapping).length**2)%Object.values(mockmapping).length));
    
    fetch(filePath)
    .then((response) => response.text())
    .then((contents) => {
      Papa.parse(contents, {
        header: true, // Specify that the CSV file has headers
        complete: function (results) {
          const data = results.data; // Parsed CSV data
          setCSVData(data); // Set the CSV data in state
          setShowTable(true); // Show the table overlay
        },
      });
    })
    .catch((error) => {
      console.error('Error fetching CSV file:', error);
    });
    // Set showTable to true to show the table overlay
    setShowTable(true);
  };

  return (
    <div className="App">
      <NavBar activeTab={activeTab} handleOpenSQLModal={handleOpenSQLModal} handleEditSQL={handleEditSQL} handleTabClick={handleTabChange} />
      {activeTab === 'home' && <><Banner /><div className={"title"}><h3>Recent Queries <h6>(Hover Over SQL ID to view)</h6></h3> </div><RecentCards fileContent={fileContent} handleFileContent={handleFileContent} handleOpenSQLModal={handleOpenSQLModal} execute={execute} filePath={"SQLs.txt"} /></>}
      {showTable && <ModalWithTable currSql={currSql} csvData={csvData} showTable={showTable} setShowTable={setShowTable} />}
      {activeTab === 'history' && <HistoryTable sql={sql} execute={execute} />}
      {showSQLModal &&<SQLInput sql={editSQL} fileContent={fileContent} handleFileContent={handleFileContent} setCSVData={setCSVData} execute={execute} handleCloseSQLModal={handleCloseSQLModal} handleOpenSQLModal={handleOpenSQLModal} showSQLModal={showSQLModal} />}
      {activeTab==="edit" && <EditTable sql={sql} handleOpenSQLModal={handleOpenSQLModal} handleEditSQL={handleEditSQL}/>}
    </div>
  );
}

export default App;