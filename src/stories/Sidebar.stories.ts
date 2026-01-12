import type { Meta, StoryObj } from '@storybook/vue3'
import Sidebar from '../components/Sidebar.vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Pages/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => ({
    components: { Sidebar },
    template: '<div class="flex h-screen"><Sidebar /></div>',
  }),
}

export const Collapsed: Story = {
  render: () => ({
    components: { Sidebar },
    template: '<div class="flex h-screen"><Sidebar /></div>',
  }),
}

export const Dark: Story = {
  render: () => ({
    components: { Sidebar },
    template: '<div class="flex h-screen bg-slate-900"><Sidebar /></div>',
  }),
}
