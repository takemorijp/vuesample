import type { Meta, StoryObj } from '@storybook/vue3'
import Header from '../components/Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Pages/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => ({
    components: { Header },
    template: '<Header />',
  }),
}

export const WithNavigation: Story = {
  render: () => ({
    components: { Header },
    template: '<div class="bg-gray-100"><Header /></div>',
  }),
}

export const Dark: Story = {
  render: () => ({
    components: { Header },
    template: '<div class="bg-slate-900"><Header /></div>',
  }),
}
