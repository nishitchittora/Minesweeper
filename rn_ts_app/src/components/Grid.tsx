import { StatusBar } from "expo-status-bar";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GridCellAttributesType, GridType } from "../types";
import GridCell from "./GridCell";

const Grid: FC<GridType> = ({ n, m, bombs }) => {
	const randomNumber = () => {
		return Math.floor(Math.random() * n * m);
	};
	const [gridCellAttributes, setGridCellAttributes] = useState<
		GridCellAttributesType[]
	>([
		...Array(n * m).map((_) => ({
			visibility: false,
			is_bomb: false,
			near_by_bombs: 0,
		})),
	]);
	useEffect(() => {
		let place_bombs = bombs;
		if (bombs > n * m) {
			place_bombs = (n * m) / 2;
		}
		let tmp_data = gridCellAttributes;
		let all_bombs_placed: boolean = false;
		while (!all_bombs_placed) {
			let cellLocation = randomNumber();
			if (!gridCellAttributes?.[cellLocation]?.is_bomb) {
				tmp_data[cellLocation] = {
					visibility: false,
					is_bomb: true,
					near_by_bombs: 0,
				};
				place_bombs -= 1;
			}
			if (place_bombs <= 0) all_bombs_placed = true;
		}

		for (let i = 0; i < n * m; i++) {
			let row = i / m;
			let column = i % m;
			let near_by_bombs = 0;
			if (row - 1 >= 0) {
				near_by_bombs += tmp_data[(row - 1) * m + column].is_bomb
					? 1
					: 0;
				if (column > 0) {
					near_by_bombs += tmp_data[(row - 1) * m + (column - 1)]
						.is_bomb
						? 1
						: 0;
				}
				if (column <= m - 1) {
					near_by_bombs += tmp_data[(row - 1) * m + (column + 1)]
						.is_bomb
						? 1
						: 0;
				}
			}
			if (row + 1 <= n - 1) {
				near_by_bombs += tmp_data[(row + 1) * m + column].is_bomb
					? 1
					: 0;
				if (column > 0) {
					near_by_bombs += tmp_data[(row + 1) * m + (column - 1)]
						.is_bomb
						? 1
						: 0;
				}
				if (column <= m - 1) {
					near_by_bombs += tmp_data[(row + 1) * m + (column + 1)]
						.is_bomb
						? 1
						: 0;
				}
			}

			if (column - 1 >= 0) {
				near_by_bombs += tmp_data[row * m + (column - 1)].is_bomb
					? 1
					: 0;
			}

			if (column + 1 >= m - 1) {
				near_by_bombs += tmp_data[row * m + (column + 1)].is_bomb
					? 1
					: 0;
			}

			tmp_data[i].near_by_bombs = near_by_bombs;
		}

		setGridCellAttributes(tmp_data);
	});

	return (
		<View>
			<Text>Hello</Text>
			{[...Array(n).keys()].map((i) => {
				return (
					<View style={{ flex: 1 }}>
						{[...Array(m).keys()].map((j) => {
							return <GridCell data={gridCellAttributes} />;
						})}
					</View>
				);
			})}
		</View>
	);
};

export default Grid;
