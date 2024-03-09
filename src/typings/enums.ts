/**
 * Data visualisation modes
 */
export enum Renderer {
	Table = 'Table',
	TableHeatmap = 'Table Heatmap',
	TableColumnHeatmap = 'Table Column Heatmap',
	TableRowHeatmap = 'Table Row Heatmap',
	ExportableTSV = 'Exportable TSV',
	GroupedColumnChart = 'Grouped Column Chart',
	StackedColumnChart = 'Stacked Column Chart',
	GroupedBarChart = 'Grouped Bar Chart',
	StackedBarChart = 'Stacked Bar Chart',
	LineChart = 'Line Chart',
	DotChart = 'Dot Chart',
	AreaChart = 'Area Chart',
	ScatterChart = 'Scatter Chart',
	MultiplePieChart = 'Multiple Pie Chart',
}

/**
 * Data aggregator method names
 */
export enum Aggregator {
	Count = 'Count',
	CountUniqueValues = 'Count Unique Values',
	ListUniqueValues = 'List Unique Values',
	Sum = 'Sum',
	IntegerSum = 'Integer Sum',
	Average = 'Average',
	Median = 'Median',
	SampleVariance = 'Sample Variance',
	SampleStandardDeviation = 'Sample Standard Deviation',
	Minimum = 'Minimum',
	Maximum = 'Maximum',
	First = 'First',
	Last = 'Last',
	SumOverSum = 'Sum Over Sum',
	SumAsFractionOfTotal = 'Sum as Fraction of Total',
	SumAsFractionOfRows = 'Sum as Fraction of Rows',
	SumAsFractionOfColumns = 'Sum as Fraction of Columns',
	CountAsFractionOfTotal = 'Count as Fraction of Total',
	CountAsFractionOfRows = 'Count as Fraction of Rows',
	CountAsFractionOfColumns = 'Count as Fraction of Columns',
}
