import React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet';

const RestaurantList = ({ restaurants }) => (
  <Table alignSelf="center">
    <TableHeader>
      <TableCell>
        <Text weight="bold">Warung</Text>
      </TableCell>
      <TableCell>
        <Text weight="bold">No. Telepon</Text>
      </TableCell>
    </TableHeader>
    <TableBody>
      {restaurants.map(restaurantObj => (
        <TableRow key={restaurantObj.name}>
          <TableCell>
            <Text>{restaurantObj.name}</Text>
          </TableCell>
          <TableCell>
            <Text>{restaurantObj.phone}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default RestaurantList;
