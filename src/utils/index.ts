/**
 * Extract labels from incoming data
 * @param data Incoming data prop
 * @returns List of labels
 */
export const generateLabels = (data: Object[]) =>
	!data.length
		? []
		: Object.keys(data[0]).filter(
				key =>
					(key &&
						key !== 'id' &&
						typeof (data[0] as Record<string, unknown>)[key]) === 'number'
			)

/**
 * Extract labels from incoming data
 * @param sample Sample data element
 * @returns Labels sorted into metrics and measures
 */
export const extractLabels = (sample: Object) => {
	const measures = []
	const metrics = []
	for (const key in sample) {
		const value = (sample as Record<string, unknown>)[key]
		if (typeof value === 'number') metrics.push(key)
		else if (typeof value === 'string') measures.push(key)
	}
	return { measures, metrics }
}
