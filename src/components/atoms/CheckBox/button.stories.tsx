import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckBox } from './index'

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = args => {
    const [toogle, setIsToogle] = React.useState<boolean>(false)

    return (
        <CheckBox id="signin" value={toogle} onChange={e => setIsToogle(e.value)}>
            {args.children}
        </CheckBox>
    )
}

export const Default = Template.bind({})
Default.args = {
    children: '로그인 정보 저장',
}
