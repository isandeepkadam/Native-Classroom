import { Button, Flex, Text } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { SparklesIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"

export const Navbar = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Flex direction="row" w="full" style={styles.br}>
        <Button onPress={() => navigation.navigate("Login")} style={styles.grow}>
          <Flex align="center" direction="row-reverse">
            <Text>Login</Text> <SparklesIcon color="red" fill="black" />
          </Flex>
        </Button>
        <Button onPress={() => navigation.navigate("Register")} style={styles.grow}>
          <Flex align="center" direction="row-reverse">
            <Text>Register</Text> <SparklesIcon color="red" fill="black" />
          </Flex>
        </Button>
      </Flex>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  br: {
    // borderColor: "red",
    // borderWidth: 2,
    // borderStyle: "solid",
  },
  grow: {
    flexGrow: 1,
  },
})
