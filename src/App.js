import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Filter from './components/Filter';
import List from './components/List';
import { useEffect, useState } from 'react';
function App() {

  const [list, setList] = useState([])
  console.log('function');
  useEffect(() => {
    
    setList([
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
      {
        img:'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1393/1.jpg?5666',
        title:'ASUS',
        description:'Description asus'
      },
    ]) 
    return () => {
      console.log('return')
    }
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col xs='auto'>
          <Filter />
        </Col>
        <Col>
          <List list={list} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
