import {Box, Center} from 'native-base';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const bgColor = useColorScheme() === 'dark' ? Colors.black : Colors.white;
  return (
    <SafeAreaView>
      <Box
        style={{
          backgroundColor: bgColor,
        }}>
        <Center>
          <Center
            bg="primary.400"
            _text={{
              color: 'white',
              fontWeight: 'bold',
            }}
            height={200}
            width={{
              base: 200,
              lg: 250,
            }}>
            This is the NOT Center
          </Center>
        </Center>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
