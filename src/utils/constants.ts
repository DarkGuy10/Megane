export const DEFAULT_CHART_OPTIONS = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: 'Insert Chart Title',
			font: {
				size: 18,
				weight: 'bold' as const,
			},
			color: '#333', // warning: hardcode
		},
	},
	scales: {
		x: {
			ticks: {
				color: '#000',
				font: {
					weight: 'bold' as const,
				},
			},
			grid: {
				color: 'rgba(0, 0, 0, 0.1)',
			},
		},
		y: {
			ticks: {
				color: '#000',
				font: {
					// Ensure this matches one of the expected types
					weight: 'bold' as const, // This change ensures the value matches the expected type.
				},
			},
			grid: {
				color: 'rgba(0,0,0,0.1)',
			},
		},
	},
	maintainAspectRatio: false,
}
