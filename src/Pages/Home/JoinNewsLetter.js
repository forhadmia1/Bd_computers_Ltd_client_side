import React from 'react';
import { toast } from 'react-toastify';

const JoinNewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const subscriber = { subscriber: email }
        fetch('https://lit-caverns-37458.herokuapp.com/subscriber', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                if (data.exists) {
                    return toast.success('Subscribed successfully!')
                } else {
                    return toast.error('Already Subscribed!')
                }
            })
        e.target.reset()
    }
    return (
        <section className="container my-24 px-6 mx-auto">
            <div className="mb-32 text-gray-800">
                <div
                    className="relative overflow-hidden bg-no-repeat bg-cover"
                    style={{
                        backgroundPosition: '50%',
                        backgroundImage: `url('https://images.unsplash.com/photo-1599575197678-4dc889dd24bd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbXB1dGVyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500')`,
                        height: '300px'
                    }}
                ></div>
                <div className="container text-gray-800 px-4 md:px-12">
                    <div
                        className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
                        style={{
                            marginTop: '-100px',
                            background: 'hsla(0, 0%, 100%, 0.8)',
                            backdropFilter: 'blur(30px)'
                        }}
                    >
                        <div className="flex flex-wrap justify-center text-center lg:text-left">
                            <div className="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                                <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                                    <div className="mb-10 lg:mb-0">
                                        <h2 className="text-3xl font-bold">
                                            Do not miss any updates.
                                            <br />
                                            <span className="text-blue-600">Subscribe to the newsletter</span>
                                        </h2>
                                    </div>

                                    <div className="mb-6 md:mb-0">
                                        <form onSubmit={handleSubmit} className="md:flex flex-row">
                                            <input
                                                type="text"
                                                name='email'
                                                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Enter your email"
                                            />
                                            <input
                                                type="submit"
                                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                value={'Subscribe'}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default JoinNewsLetter;