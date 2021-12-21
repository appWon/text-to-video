import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './index'

export default {
    title: 'Atoms/Input',
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: '이메일을 입력해주세요',
}
