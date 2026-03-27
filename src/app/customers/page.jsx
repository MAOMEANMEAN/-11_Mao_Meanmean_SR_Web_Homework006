"use client";
import { CustomerComponent } from '@/components/CustomerComponent';
import CustomerComponentTable from '@/components/CustomerComponentTable';
import React, { useEffect, useState } from 'react'

export default function page() {
    // const [customers, setCustomers] = useState([])
  return (
    <div>
        <CustomerComponent />
    </div>
  )
}
