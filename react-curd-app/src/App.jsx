import { useState } from 'react'
import './App.css';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';

// {
//     "code": "0",
//     "message": "",
//     "data": {
//         "reference_id": "orderid2111286925",
//         "order_number": "132D56U7UB9IDD476ECE9",
//         "order_status": "success",
//         "order_date": "2024-02-01T05:08:05.126942Z",
//         "retailer_code": "RGDH266-GFCA",
//         "currency": "USD",
//         "product": [
//             {
//                 "sku": "9801",
//                 "quantity": 1,
//                 "unit_SRP": 1.9900,
//                 "unit_price_after_disc_comm": 1.8905,
//                 "disc_comm_rate": 5.0000,
//                 "tax_rate": 9.0000,
//                 "total_tax_amount": 0.0000,
//                 "total_amount": 1.9000
//             }
//         ],
//         "pins": [
//             {
//                 "sku": "9801",
//                 "serialNumber": "RGD-210729-005262",
//                 "pinCode": "RGDHTES0005262",
//                 "serialNumber2": "",
//                 "pinCode2": "",
//                 "pin_expiry_date": "2026-12-30T16:00:00.000Z"
//             }
//         ]
//     }
// }


function App() {

    return (
        <>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/header' element={<Header />} />
                </Routes>
            </div>
        </>
    )
}

export default App

