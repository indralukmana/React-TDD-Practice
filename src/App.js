import React from 'react';
import NewRestaurantListPage from './NewRestaurantListPage';
import { Grommet, Button, Box } from 'grommet';
import { grommet, dark } from 'grommet/themes';
import { Info } from 'grommet-icons';

export default class App extends React.Component {
	state = {
	  theme: true,
	};

	toggleTheme = () => {
	  this.setState({ theme: !this.state.theme });
	};

	render() {
	  return (
	    <Grommet style={{ height: '100vh' }} theme={this.state.theme ? grommet : dark}>
	      <Box align="center" pad="medium" gap="medium" fill="true">
	        <Button plain icon={<Info />} onClick={this.toggleTheme} data-test="themeToggleButton" />
	        <NewRestaurantListPage />
	      </Box>
	    </Grommet>
	  );
	}
}
