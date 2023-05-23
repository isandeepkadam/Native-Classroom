import { Button, Flex, Text } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { SparklesIcon } from "react-native-heroicons/solid"

export const Navbar = () => {
  return (
    <SafeAreaView>
      <Button>
        <Flex align="center" direction="row-reverse">
          <Text>Navbar</Text> <SparklesIcon color="red" fill="black" />
        </Flex>
      </Button>
    </SafeAreaView>
  )
}
