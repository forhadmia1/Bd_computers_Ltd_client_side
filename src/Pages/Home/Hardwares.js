import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import HardwareCard from './HardwareCard';

const Hardwares = () => {
    const { isLoading, error, data: hardwares } = useQuery("hardware", () =>
        fetch('http://localhost:5000/hardwares')
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    return (
        <section>
            <h2 className='text-3xl text-accent font-bold text-center my-16'>Tools</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto justify-items-center'>
                {
                    hardwares.map(hardware => <HardwareCard
                        key={hardware._id}
                        hardware={hardware}
                    />)
                }
            </div>
        </section>
    );
};

export default Hardwares;