import { useState } from "react"
import { emailRegex, passwordRegex } from "./Login"
import { Box, Button, FormControl, Input, Link, Stack, Text, WarningOutlineIcon } from "native-base"
import { Link as NavLink } from "@react-navigation/native"

interface User {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}
const defaultUser = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

type UserErrors = {
  [key in keyof User]: boolean
}

export const Register = () => {
  const [formData, setFormData] = useState<User>(defaultUser)
  const [errors, setErrors] = useState<UserErrors>({
    email: false,
    password: false,
    confirmPassword: false,
    fullName: false,
  })
  const validate = (): boolean => {
    console.log({
      email: emailRegex.test(formData.email),
      password: passwordRegex.test(formData.password),
      confirmPassword: formData.password === formData.confirmPassword,
      actualEmail: formData.email,
      actualPassword: formData.password,
      actualConfirmPassword: formData.confirmPassword,
    })
    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: true,
      }))
      return false
    } else {
      setErrors(prev => ({
        ...prev,
        email: false,
      }))
    }
    if (!passwordRegex.test(formData.password)) {
      setErrors(prev => ({
        ...prev,
        password: true,
      }))
      return false
    } else {
      setErrors(prev => ({
        ...prev,
        password: false,
      }))
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: true,
      }))
      return false
    } else {
      setErrors(prev => ({
        ...prev,
        confirmPassword: true,
      }))
    }
    // if (!/^[a-z]{2,18} [a-z]{2,18}$/i.test(formData.fullName)) {
    //   setErrors(prev => ({
    //     ...prev,
    //     fullName:true,
    //   }))
    //   return false
    // } else {
    //   setErrors(prev => ({
    //     ...prev,
    //     fullName: false,
    //   }))
    // }

    return true
  }
  const onSubmit = () => {
    // validate() ? console.log("Submit") : console.log("Incorrect data")
    // console.log({
    //   email: formData.email,
    //   password: formData.password,
    //   confirmPassword: formData.confirmPassword,
    // })
    if (emailRegex.test(formData.email) == false) {
      console.log("Email is not valid")
      setErrors(prev => ({
        ...prev,
        email: true,
      }))
      return
    } else {
      setErrors(prev => ({
        ...prev,
        email: false,
      }))
    }
    console.log({
      passwordRegexTest: passwordRegex.test(formData.password),
    })
    if (passwordRegex.test(formData.password) == false) {
      console.log("Password is not valid\n", formData.password)
      console.log({
        regexInsideIfClause: passwordRegex.test(formData.password) == false,
      })

      setErrors(prev => ({
        ...prev,
        password: true,
      }))
      return
    } else {
      setErrors(prev => ({
        ...prev,
        password: false,
      }))
    }
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match")
      setErrors(prev => ({
        ...prev,
        confirmPassword: true,
      }))
      return
    } else {
      setErrors(prev => ({
        ...prev,
        confirmPassword: false,
      }))
    }

    console.log({
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    })
  }
  return (
    <Box>
      <Text fontSize="xl" textAlign="center">
        Login
      </Text>
      <Box display="flex" alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={errors.email}>
            <Stack mx="4">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                type="text"
                placeholder="billy@gmail.com"
                onChangeText={value => setFormData(prev => ({ ...prev, email: value }))}
              />
              <FormControl.HelperText>Must contain @</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Enter valid email
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={errors.password}>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                placeholder="SomeStrong@123Passcode"
                onChangeText={value => setFormData(prev => ({ ...prev, password: value }))}
              />
              <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>

        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={errors.confirmPassword}>
            <Stack mx="4">
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                type="password"
                placeholder="SomeStrong@123Passcode"
                onChangeText={value => setFormData(prev => ({ ...prev, confirmPassword: value }))}
              />
              <FormControl.HelperText>Same password as above</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Passwords do not match
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
        <Box w="100%" maxWidth="300px">
          <Button onPress={onSubmit} mt="5" colorScheme="cyan">
            Register
          </Button>
        </Box>
        <Box mt="5">
          <Text>Already have an account?</Text>
          <Link fontWeight="bold">
            <NavLink to={{ screen: "Login" }}>Login</NavLink>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
