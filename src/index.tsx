import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from 'index.module.css'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Colors,
	BarElement,
	ArcElement,
} from 'chart.js'
//import type { GraphData } from '@/typings'
//import { DEFAULT_CHART_OPTIONS } from '@/utils/constants'
import { extractLabels } from '@/utils'
import { LabelElement, Pane, Draggable, Droppable } from '@/components'
import { Bar } from 'react-chartjs-2'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import { DropField } from './components/DropField/DropField'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Colors,
	BarElement,
	ArcElement
)

export interface Dataset<T = unknown> {
	label: string
	data: T[]
}

export interface GraphData {
	labels: string[]
	datasets: Dataset[]
}

export interface VisualizerProps<T> {
	data: T[]
}

export interface LabelData {
	x: string
	y: string
	active: {
		type: string
		label: string
	}
}

export const Visualiser = <T extends Object>({ data }: VisualizerProps<T>) => {
	const labels = extractLabels(data[0])
	const [labelData, setLabelData] = useState<LabelData>({
		x: '',
		y: '',
		active: { type: '', label: '' },
	})
	const [graphData, setGraphData] = useState<GraphData>()

	useEffect(() => {
		if (!labelData.x || !labelData.y) return
		const graphData = {
			labels: data.map(each => each[labelData.x as keyof typeof each]),
			datasets: [
				{
					label: labelData.y,
					data: data.map(each => each[labelData.y as keyof typeof each]),
					borderWidth: 2,
				},
			],
		}
		setGraphData(graphData as unknown as GraphData)
	}, [labelData.x, labelData.y])

	return (
		<DndContext
			onDragStart={event => {
				const [, type, label] = event.active.id.toString().split('_')
				setLabelData(prevLabelData => ({
					...prevLabelData,
					active: { type, label },
				}))
			}}
			onDragEnd={event => {
				const { active, over } = event
				let newLabelData = { ...labelData }
				newLabelData.active = { label: '', type: '' }
				if (over && over.data.current?.accepts === active.data.current?.type) {
					const [, , label] = active.id.toString().split('_')
					switch (over.data.current?.accepts) {
						case 'measure':
							newLabelData.x = label
							break
						case 'metric':
							newLabelData.y = label
							break
					}
				}
				setLabelData(newLabelData)
			}}
		>
			<div className={styles.wrapper}>
				<Pane>
					<div className={styles.header}>Columns</div>
					<div className={styles.labelsList}>
						Measures
						{labels.measures.map((label, index) => (
							<Draggable
								key={index}
								type='measure'
								id={`draggable_measure_${label}`}
							>
								<LabelElement type='measure' label={label} />
							</Draggable>
						))}
						Metrics
						{labels.metrics.map((label, index) => (
							<Draggable
								type='metric'
								key={index}
								id={`draggable_metric_${label}`}
							>
								<LabelElement type='metric' label={label} />
							</Draggable>
						))}
					</div>
				</Pane>
				<Pane>
					<Droppable accepts='measure' id='droppable_measure'>
						<DropField label='X Axis' placeholder='Drop a measure'>
							{labelData.x}
						</DropField>
					</Droppable>
					<Droppable accepts='metric' id='droppable_metric'>
						<DropField label='Y Axis' placeholder='Drop a metric'>
							{labelData.y}
						</DropField>
					</Droppable>
				</Pane>
				{!!graphData && <Bar data={graphData} />}
			</div>
			{createPortal(
				<DragOverlay>
					{labelData.active.label ? (
						<LabelElement
							type={labelData.active.type}
							label={labelData.active.label}
						/>
					) : null}
				</DragOverlay>,
				document.body
			)}
		</DndContext>
	)
}
