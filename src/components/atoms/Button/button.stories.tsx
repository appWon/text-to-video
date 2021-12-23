import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'

export default {
    title: 'Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: '입력',
}
