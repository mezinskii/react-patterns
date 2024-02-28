
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ marginTop: "20px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
