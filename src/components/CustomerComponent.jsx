import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import CustomerComponentTable from "./CustomerComponentTable";

export function CustomerComponent() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://homework-api.noevchanmakara.site/api/v1/customers").then(
      (res) =>
        res.json().then((customers) => {
          setCustomers(customers);
        }),
    );
  });
  return (
    <div className="w-[950px] mt-5">
      <div className="border rounded-lg overflow-hidden">
          <Table className="w-full">
            <TableCaption className="bg-gray-200">A list of your recent invoices.</TableCaption>
            <TableHeader className=" font-semibold">
              <TableRow>
                <TableHead className="font-semibold">Customer Name</TableHead>
                <TableHead className="font-semibold">Birthdate</TableHead>
                <TableHead className="font-semibold">Amount Spend</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {customers?.payload?.map((customers) => (
              <CustomerComponentTable
                key={customers.customerId}
                customers={customers}
              />
            ))}
            </TableBody>
          </Table>
        </div>
      </div>
  );
}
