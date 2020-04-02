import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

/**
function App() {
 
  var person = {
    name:"Dr. Mahfuz",
    job: "Singer"
  }

  var person2 = {
    name:"Eva Rahman",
    job: "Kokil Konti"
  }

  var style = {
    color:'red',
    backgroundColor:'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited done <code>src/App.js</code> and save to reload.
        </p>
   
   <h2>My Heading</h2>
   <p>My Frist React Pragraph</p>
  <p style={style}>Doctor: {person.name + " - " + person.job}</p>
  <p style={{color:'red'}}>Singer : {person2.name + " - " + person2.job}</p>
      
      </header>
    </div>
  );
}
export default App; 
*/

function App(){
  var name = "Kalam Uddin"
  const nayoks = ['Razzk', 'Jasim','Alamgir','Salman','Kura','Tara'];
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'Adobe Premier', price:'$7.99'}
  ]
// const productNames = products.map(product =>product);
// console.log(productNames);

const nayokNames = nayoks.map(nayok => nayok);
console.log(nayokNames);
return(
  <div className="App">
    <header  className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
     <p>I am Rafiqul Islam : {name}</p>

{/* // for Counter */}

<Counter></Counter>
<Users></Users>

<ul>
  {
    nayoks.map(nayok => <li>{nayok}</li>)
  }
  <br/>
  {
    products.map(product => <li>{product.name}</li>)
 
  }
</ul>

<ul>
  {/* {
    products.map(product =><Product> product = {product} </Product> )
  } */}
</ul>


<ul>
    <li>{nayoks[0]}</li>
    <li>{nayoks[1]}</li>
    <li>{nayoks[2]}</li>
    <li>{nayoks[3]}</li>
    <li>{nayoks[4]}</li>
</ul>
    {
     products.map(pd => <Product product={pd}></Product>)
    }


     {/* <Products name={products[0].name} price={products[0].price}></Products> */}
     {/* <Product product={products[0]}></Product>
     <Product product={products[1]}></Product> */}
     {/* <Product product={products[2]}></Product> */}
      {/* <Person name={nayoks[0]} nayika="Mow" ></Person>
      <Person name={nayoks[1]} nayika="Shabana"></Person>
      <Person name={nayoks[2]} nayika="Khalamma"></Person>
      <Person name={nayoks[3]} nayika="Janir Ma"></Person> */}
    </header>
  </div>

);
}


function Users(){
  const [users, setUsers] = useState([]);
useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
},[])
  return (
    <div>
      <h3>Dynamic Users:{users.lenght}</h3>
     <ul>
       {
         console.log(users)
       }
     {
        users.map(user => <li>{user.name} - {user.email}</li>)
        
      }
     </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1 ;
  //   setCount(newCount);
  // }
  // const handleDecrease = () => {
  //   const newCount = count - 1 ;
  //   setCount(newCount);
  // }
 
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1) } >DisLike</button>
      <button onClick={() => setCount(count + 1) } >Like</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'#ededed',
    height:'200px',
    width:'200px',
    float:'left',
    color:'black'
   
  }
  
  return (
    <div style={productStyle}>
        <h4>{props.product.name}</h4>
        <h5>{props.product.price}</h5>
        <button>Buy Now</button>

    </div>
  )
}

function Person(props){
  var PersonStyle = {border:'2px solid yellow',margin:'10px', padding:'5px 25px'}

  return (
    <div style={PersonStyle}>
      <h1>Nayok of :: {props.name} </h1>
  <h2>Nayka of :: {props.nayika}</h2>
    </div>
  )
}
export default App;