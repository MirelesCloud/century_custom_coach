import React from 'react'


const merchandise = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];




const products = [1, 2, 3, 4, 5];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const content = posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>{content}</div>
  )
}

function Test(props) {
  const listProducts = products.map((product) =>
    <li key={product.toString()}>{product}</li>
  );
  return (
    <ul>{listProducts}</ul>
  )
}

const AnotherTest = (props) => (
  <section>
    {products.map((product, idx) => (
      <ul key={idx}>
        <li>{product}</li>
      </ul>
    )
    )}
  </section>
)



function ThirdTest(props) {
  const stuff = merchandise.map((department, idx) =>
    <li key={idx}>
      <small>{department.category}</small>
      <h2>{department.name}</h2>
      <p>$ {department.price}</p>
      <small>{department.stocked}</small>
    </li>
  );

  return (
    <div>
        <ul>{stuff}</ul>
        <Test/>
        <AnotherTest/>
        <Blog/>
    </div>


  )
}




export default ThirdTest
