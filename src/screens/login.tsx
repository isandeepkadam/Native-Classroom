import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Link as NavLink, useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Select,
  Text,
  ScrollView,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {defaultUser, genders, roles, User} from '../store/user/types';

const Tab = createMaterialTopTabNavigator();
const TAB_REGISTER = 'TabRegister';
const TAB_LOGIN = 'TabLogin';

type LoginUserType = Pick<User, 'email'> & {password: string};
type LoginUserErrorType = {
  [key in keyof LoginUserType]: boolean;
};
type RegisterUserType = User & {password: string; confirmPassword: string};
type RegisterUserErrorType = {
  [key in keyof RegisterUserType]: boolean;
};

const TabLogin = () => {
  const [formData, setFormData] = useState<LoginUserType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginUserErrorType>({
    email: false,
    password: false,
  });
  const navigation = useNavigation();

  const handleChange = (key: keyof LoginUserType, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  };
  const handleSubmit = () => {
    if (!formData.email.includes('@')) {
      setErrors(prev => ({...prev, email: true}));
    } else {
      setErrors(prev => ({...prev, email: false}));
    }
    if (!(formData.password.trim().length > 6)) {
      setErrors(prev => ({...prev, password: true}));
    } else {
      setErrors(prev => ({...prev, password: false}));
    }
    const canContinue = Object.values(errors).every(v => !v);
    if (canContinue) {
      navigation.push('Home');
    }
  };
  return (
    <SafeAreaView>
      <Center h="lg" px="10">
        <Box w="full">
          <FormControl mb="5" isInvalid={errors.email}>
            <FormControl.Label isRequired>Email</FormControl.Label>
            <Input
              placeholder="Eg: bill@gmail.com"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
            />
            <FormControl.ErrorMessage>
              Provide a valid email address. Valid email should contain @ and
              correct domain(like .com, .org, .edu)
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box w="full">
          <FormControl mb="5" isInvalid={errors.password}>
            <FormControl.Label isRequired>Password</FormControl.Label>
            <Input
              type="password"
              secureTextEntry
              placeholder="Eg: Some@Strong#123"
              value={formData.password}
              onChangeText={value => handleChange('password', value)}
            />
            <FormControl.ErrorMessage>
              Password should contain a minimum 1 lowercase, uppercase, special
              characters and number
            </FormControl.ErrorMessage>
            <Text
              underline
              fontWeight="medium"
              color="darkBlue.600"
              textAlign="right"
              accessibilityLabel="If you have forgot password. You can reset it. click on Forgot password to do so">
              <NavLink to={{screen: TAB_REGISTER}}>Forgot Password</NavLink>
            </Text>
          </FormControl>
        </Box>
        <Box w="full">
          <Button
            accessibilityLabel="Press this button to Login. If everything is correct you will be logged in"
            onPressOut={handleSubmit}>
            Submit
          </Button>
        </Box>
        <Flex w="full" display="flex" mt="4" direction="row">
          <Text>Don't have an account?</Text>
          <Text underline fontWeight="medium" color="darkBlue.600" mx="1">
            <NavLink to={{screen: TAB_REGISTER}}>Create New</NavLink>
          </Text>
        </Flex>
      </Center>
    </SafeAreaView>
  );
};
const TabRegister = () => {
  const [formData, setFormData] = useState<RegisterUserType>({
    ...defaultUser,
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<RegisterUserErrorType>(() => {
    const obj = {} as RegisterUserErrorType;
    for (const key in formData) {
      // @ts-ignore
      obj[key] = false;
    }
    return obj;
  });
  const navigation = useNavigation();
  const handleChange = (key: keyof RegisterUserType, value: string) => {
    setFormData(prev => ({...prev, [key]: value}));
  };
  const handleSubmit = () => {
    if (!/^[A-Za-z]{2,18} [A-Za-z]{2,24}$/g.test(formData.fullName)) {
      setErrors(prev => ({...prev, fullName: true}));
    } else {
      setErrors(prev => ({...prev, fullName: false}));
    }
    if (!formData.email.includes('@')) {
      setErrors(prev => ({...prev, email: true}));
    } else {
      setErrors(prev => ({...prev, email: false}));
    }
    if (!(formData.password.trim().length > 6)) {
      setErrors(prev => ({...prev, password: true}));
    } else {
      setErrors(prev => ({...prev, password: false}));
    }
    if (
      formData.password.trim().length < 1 ||
      formData.password !== formData.confirmPassword
    ) {
      setErrors(prev => ({...prev, confirmPassword: true}));
    } else {
      setErrors(prev => ({...prev, confirmPassword: false}));
    }
    if (!genders.includes(formData.gender)) {
      setErrors(prev => ({...prev, gender: true}));
    } else {
      setErrors(prev => ({...prev, gender: false}));
    }
    if (!roles.includes(formData.role)) {
      setErrors(prev => ({...prev, role: true}));
    } else {
      setErrors(prev => ({...prev, role: false}));
    }
    console.log({formData, errors});
    const canContinue = Object.values(errors).every(v => !v);
    if (canContinue) {
      navigation.push('Home');
    }
  };
  return (
    <SafeAreaView>
      <ScrollView h="full">
        <Center h="full" px="10">
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.fullName}>
              <FormControl.Label isRequired>Full Name</FormControl.Label>
              <Input
                placeholder="Eg: Bill Gates"
                value={formData.fullName}
                onChangeText={value => handleChange('fullName', value)}
              />
              <FormControl.ErrorMessage>
                Full Name should contain First and Last Name(only alphabets)
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.email}>
              <FormControl.Label isRequired>Email</FormControl.Label>
              <Input
                placeholder="Eg: bill@gmail.com"
                value={formData.email}
                onChangeText={value => handleChange('email', value)}
              />
              <FormControl.ErrorMessage>
                Provide a valid email address. Valid email should contain @ and
                correct domain(like .com, .org, .edu)
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.password}>
              <FormControl.Label isRequired>Password</FormControl.Label>
              <Input
                type="password"
                secureTextEntry
                placeholder="Eg: Some@Strong#123"
                value={formData.password}
                onChangeText={value => handleChange('password', value)}
              />
              <FormControl.ErrorMessage>
                Password should contain a minimum 1 lowercase, uppercase,
                special characters and number
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.confirmPassword}>
              <FormControl.Label isRequired>Confirm Password</FormControl.Label>
              <Input
                type="password"
                secureTextEntry
                placeholder="Eg: Some@Strong#123"
                value={formData.confirmPassword}
                onChangeText={value => handleChange('confirmPassword', value)}
              />
              <FormControl.ErrorMessage>
                Password and confirm password should match
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.gender}>
              <FormControl.Label isRequired>Gender</FormControl.Label>
              <Select
                selectedValue={formData.gender}
                accessibilityLabel={
                  'Select Your gender. Should be one of ' + genders.join(', ')
                }
                onValueChange={value => handleChange('gender', value)}>
                {genders.map(gender => (
                  <Select.Item
                    key={gender}
                    label={gender.charAt(0).toUpperCase() + gender.slice(1)}
                    value={gender}
                  />
                ))}
              </Select>
              <FormControl.ErrorMessage>
                Please select a gender
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <FormControl mb="5" isInvalid={errors.role}>
              <FormControl.Label isRequired>Role</FormControl.Label>
              <Select
                selectedValue={formData.role}
                accessibilityLabel={
                  'Select Your Role. Should be one of ' + roles.join(', ')
                }
                onValueChange={value => handleChange('role', value)}>
                {roles.map(role => (
                  <Select.Item
                    key={role}
                    label={role.charAt(0).toUpperCase() + role.slice(1)}
                    value={role}
                  />
                ))}
              </Select>
              <FormControl.ErrorMessage>
                Please select a gender
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box w="full">
            <Button
              accessibilityLabel="Press this button to Login. If everything is correct you will be logged in"
              onPressOut={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

const LoginScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TAB_LOGIN}
        component={TabLogin}
        options={{title: 'Sign in'}}
      />
      <Tab.Screen
        name={TAB_REGISTER}
        component={TabRegister}
        options={{title: 'Sign up'}}
      />
    </Tab.Navigator>
  );
};

export default LoginScreen;
