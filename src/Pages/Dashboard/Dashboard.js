import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [admin] = useAdmin()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-slate-200">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=''>My Profile</Link></li>
                    {!admin ?
                        <>
                            <li><Link to='myOrders'>My Orders</Link></li>
                            <li><Link to={'addReviews'}>Add Reviews</Link></li>
                        </>
                        :
                        <>
                            <li><Link to={'makeAdmin'}>Make Admin</Link></li>
                            <li><Link to={'manageOrder'}>Manage All Orders</Link></li>
                            <li><Link to={'addProduct'}>Add Product</Link></li>
                            <li><Link to={'manageProduct'}>Manage Products</Link></li>
                        </>}

                </ul>

            </div>
        </div >
    );
};

export default Dashboard;