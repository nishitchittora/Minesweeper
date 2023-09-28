import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GridCellAttributesType } from "../types";

export default function GridCell() {
	return (
		<TouchableOpacity
			style={{ flex: 1, backgroundColor: "blue" }}
			onPress={() => {}} // Action
		>
			<View
				style={{
					backgroundColor: "red",
				}}
			>
				<Text>Yes</Text>
			</View>
		</TouchableOpacity>
	);
}

// const styles = StyleSheet.create({
// 	square: {
// 		flex: 1,
// 		aspectRatio: 1,
// 		backgroundColor: "red",
// 	},
// });
