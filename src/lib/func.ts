import type { Tag } from "./datatype";

export const getTagName = (id: number, tagPool: Tag[], filterBox: Tag[]) =>
	tagPool.find((t) => t.id === id)?.name ??
	filterBox.find((t) => t.id === id)?.name ??
	"";