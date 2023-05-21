import React from 'react';
import { Button } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCircleIcon } from 'react-native-heroicons/solid';

const Navbar = () => {
	return (
		<SafeAreaView>
			<UserCircleIcon size={22} color="black" />
			<Button>Navbar</Button>
		</SafeAreaView>
	);
};

export default Navbar;
