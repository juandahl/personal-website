import { StringValueObject } from "../../shared/domain/stringValueObject";

export class Title extends StringValueObject {
	constructor(public readonly value: string) {
		if (!value || value.trim() === "") {
			throw new Error("Title invalid");
		}
		super(value);
	}
}
