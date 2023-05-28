import { Link as NavLink } from "@react-navigation/native"
import { Box, Button, FormControl, Input, Link, Stack, Text, WarningOutlineIcon } from "native-base"
import { useState } from "react"

export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
export const passwordRegex = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })
  const validate = (): boolean => {
    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: "Invalid email",
      }))
      return false
    } else {
      setErrors(prev => ({
        ...prev,
        email: "",
      }))
    }
    if (!passwordRegex.test(formData.password)) {
      setErrors(prev => ({
        ...prev,
        password: "Invalid password",
      }))
      return false
    } else {
      setErrors(prev => ({
        ...prev,
        password: "",
      }))
    }
    return true
  }
  const onSubmit = () => {
    validate() ? console.log("Submit") : console.log("Incorrect data")
  }
  return (
    <Box>
      <Text fontSize="xl" textAlign="center">
        Login
      </Text>
      <Box display="flex" alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={errors.email.length > 0}>
            <Stack mx="4">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                type="text"
                placeholder="billy@gmail.com"
                onChangeText={value => setFormData({ ...formData, email: value })}
              />
              <FormControl.HelperText>Must contain @</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={errors.password.length > 0}>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                placeholder="SomeStrong@123Passcode"
                onChangeText={value => setFormData({ ...formData, password: value })}
              />
              <FormControl.HelperText>Must be atleast 6 characters.</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
        <Box w="100%" maxWidth="300px">
          <Button onPress={onSubmit} mt="5" colorScheme="cyan">
            Login
          </Button>
        </Box>
        <Box mt="5">
          <Text>
            Dont have an account?{" "}
            <Link fontWeight="bold">
              <NavLink to={{ screen: "Register" }}>Create New</NavLink>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
