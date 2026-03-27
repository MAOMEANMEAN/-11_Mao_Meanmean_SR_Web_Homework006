
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function CustomerComponentTable({customers}) {
  return (
    <Table>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium">{customers.firstName} {customers.lastName}</TableCell>
            <TableCell className="text-gray-700 font-medium text-right">{customers.birthDate}</TableCell>
            <TableCell className="font-semibold text-green-800 pl-20 text-right">{customers.moneySpent}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  )
}
