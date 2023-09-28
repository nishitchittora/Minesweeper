import { StatusBar } from "expo-status-bar";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GridCellAttributesType, GridType } from "../types";
import GridCell from "./GridCell";

const Grid: FC<GridType> = ({ n, m }) => {
	const [gridVisibility, setGridVisibility] =
		useState<GridCellAttributesType[]>();
	useEffect(() => {
		const tmpGridCell = [
			...Array(n * m).map((_) => ({ visibility: false })),
		];
		setGridVisibility(tmpGridCell);
	});

	return (
		<View>
			<Text>Hello</Text>
			{/* {[...Array(n).keys()].map((i) => {
				return (
					<View style={{ flex: 1 }}>
						{[...Array(m).keys()].map((j) => {
							return <GridCell />;
						})}
					</View>
				);
			})} */}
		</View>
	);
};

export default Grid;
