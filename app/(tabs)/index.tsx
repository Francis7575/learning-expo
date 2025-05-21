import { Text } from "@react-navigation/elements";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href={"/notifications"}>
        <Text>visit notifications</Text>
      </Link>
    </View>
  );
}

