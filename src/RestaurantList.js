import React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet';

const RestaurantList = ({ restaurants }) => (
  <Table alignSelf="center">
    <TableHeader>
      <TableCell>
        <Text weight="bold">Warung</Text>
      </TableCell>
    </TableHeader>
    <TableBody>
      {restaurants.map(restaurantName => (
        <TableRow key={restaurantName}>
          <TableCell>
            <Text>{restaurantName}</Text>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default RestaurantList;
