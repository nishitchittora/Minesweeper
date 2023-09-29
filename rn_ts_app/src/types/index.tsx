export interface GridCellAttributesType {
	visibility: boolean;
	is_bomb: boolean;
	near_by_bombs: number;
}

export interface GridType {
	n: number;
	m: number;
	bombs: number;
	timeInSec: number;
}
