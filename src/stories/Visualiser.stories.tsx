import type { Meta, StoryObj } from '@storybook/react'
import { Visualiser } from '..'
import data from './assets/data.json'

const meta: Meta<typeof Visualiser> = {
	component: Visualiser,
}

export default meta

type Story = StoryObj<typeof Visualiser>

export const Primary: Story = {
	render: args => (
		<div style={{ width: '100%' }}>
			<Visualiser data={data} />
		</div>
	),
}
