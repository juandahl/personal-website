import { StringValueObject } from "../../shared/domain/stringValueObject";

export class Description extends StringValueObject {
	constructor(public readonly value: string) {
		if (!value || value.trim() === "") {
			throw new Error("Description invalid");
		}
		super(value);
	}
}
