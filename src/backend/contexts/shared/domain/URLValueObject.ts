export class URLValueObject {
	constructor(public readonly value: string) {
		try {
			new URL(value);
		} catch (err) {
			throw new Error("URL invalid");
		}
	}
}
