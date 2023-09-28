import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Grid from "./src/components/Grid";

export default function App() {
	console.log("ASDASD");
	return (
		<View style={styles.container}>
			<Text>Helloasdasd</Text>
			<Grid n={2} m={2} bombs={2} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
