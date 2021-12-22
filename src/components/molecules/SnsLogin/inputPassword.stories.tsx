import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SnsLogin } from './index'

export default {
    title: 'Molecules/SnsLogin',
    component: SnsLogin,
} as ComponentMeta<typeof SnsLogin>

const Template: ComponentStory<typeof SnsLogin> = args => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '200px',
            height: '50px',
        }}
    >
        <SnsLogin {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    url: 'https://ttv.waynehills.co/assets/i_google_b.png',
    value: '구글로 로그인하기',
}
