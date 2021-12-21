import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputPassword } from './index'

export default {
    title: 'Molecules/Input',
    component: InputPassword,
} as ComponentMeta<typeof InputPassword>

const Template: ComponentStory<typeof InputPassword> = args => <InputPassword {...args} />

export const Default = Template.bind({})
