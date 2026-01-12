import type { Meta, StoryObj } from '@storybook/vue3'
import AddUserButton from '../components/AddUserButton.vue'

const meta: Meta<typeof AddUserButton> = {
  title: 'Users/AddUserButton',
  component: AddUserButton,
  tags: ['autodocs'],
  args: {
    label: 'ユーザーを追加',
    disabled: false,
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof AddUserButton>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithAction: Story = {
  args: {
    label: 'ユーザーを追加 (log)',
  },
  render: (args) => ({
    components: { AddUserButton },
    setup() {
      const onClick = () => {
        // Storybook action handler
        console.log('Add user clicked')
      }
      return { args, onClick }
    },
    template: '<AddUserButton v-bind="args" @click="onClick" />',
  }),
}
