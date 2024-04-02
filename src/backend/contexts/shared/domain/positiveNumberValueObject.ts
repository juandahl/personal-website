export class PositiveNumberValueObject {
	constructor(public readonly value: number) {
		if (value < 0) {
			throw new Error("Value cannot be negative");
		}
	}
}