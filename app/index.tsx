import { styles } from "@/styles/auth.styles";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <TouchableOpacity onPress={() => alert("Hello")}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("Hello pressable")}>
        <Text>Press Me - pressable  </Text>
      </Pressable>

      <Image source={require("../assets/images/icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Image source={{ uri: "https://images.unsplash.com/photo-1747607174999-0ca07c1ef75a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" }}
        style={{ width: 100, height: 100 }} />
    </View>
  );
}

