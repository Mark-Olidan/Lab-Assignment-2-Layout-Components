import { Text, View } from "react-native";
import App from './App';
export default function Index() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        flex:1,
      }}
    >
      <App/>
    </View>
  );
}
