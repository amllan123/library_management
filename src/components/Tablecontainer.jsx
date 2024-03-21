import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { userList } from "@/dummyData";

const Tablecontainer = ({}) => {
  return (
    <div className="w-full bg-white rounded-lg p-4">
      <div className="flex items-center justify-between ">
        <span>User List</span>
        <Button>Add User</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6">User Id</TableHead>
            <TableHead className="w-2/6">name</TableHead>
            <TableHead className="w-2/6">Book</TableHead>
            <TableHead className="w-1/6">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.map((item) => (
            <TableRow>
              <TableCell className="w-1/6">{item.id}</TableCell>
              <TableCell className="w-2/6">{item.name}</TableCell>
              <TableCell className="w-2/6">{item.bookIssued}</TableCell>
              <TableCell className="w-1/6">
                <HoverCard>
                  <HoverCardTrigger>
                    <Ellipsis />
                  </HoverCardTrigger>
                  <HoverCardContent className="flex flex-col items-center gap-4">
                    <Button>Issue Book</Button>
                    <Button variant="destructive">Delete User</Button>
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="w-full flex flex-row-reverse">
        <span className="text-orange-600 font-semibold">see all</span>
      </div>
    </div>
  );
};

export default Tablecontainer;
