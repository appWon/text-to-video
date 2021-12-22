import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Chip } from './index'

export default {
    title: 'Atoms/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
    label: '홍보',
    checked: true,
}
