import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 my-6 md:my-12'>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>1. How will you improve the performance of a React Application?</h2>
                <p className='mt-4'>Avoid Inline Function Definition in the Render Function.Avoid using Index as Key for map. Avoiding Props in Initial States.avoid spreading properties into a DOM elements.CSS Animations Instead of JS Animations.</p>
            </div>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>2. What are the different ways to manage a state in a React application?</h2>
                <ul className='mt-4'>
                    <li>Local state - Local state is data we manage in one or another component.</li>
                    <li>Global state - Global state is data we manage across multiple components.</li>
                    <li>Server state - Data that comes from an external server that must be integrated with our UI state.</li>
                    <li>URL state - Data that exists on our URLs, including the pathname and query parameters</li>
                </ul>
            </div>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>3. How does prototypical inheritance work?</h2>
                <p className='mt-4'>Every object with it's methods and properties contains an internal and hidden property known as prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>
            </div>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='mt-4'>We set the state const [products, setProducts] = useState([]). If we set the state directly, for example, const products = [...]. When we calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components.</p>
            </div>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='mt-4'>In the products array, to search product by name. we can fliter in the array to get all the product that match the name. For example, products.filter(product => product.name.includes('name'))</p>
            </div>
            <div className='shadow-xl rounded-xl p-6'>
                <h2 className='text-xl font-semibold'>6. What is a unit test? Why should write unit tests?</h2>
                <p className='mt-4'>In computer programming, unit testing is a software testing method by which individual units of source code sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures are tested to determine whether they are fit for use.</p>
                <p className='mt-4'>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>
        </div>
    );
};

export default Blogs;