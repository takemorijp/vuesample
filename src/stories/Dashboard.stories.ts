import type { Meta, StoryObj } from '@storybook/vue3'
import Dashboard from '../components/pages/Dashboard.vue'

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const Default: Story = {
  render: () => ({
    components: { Dashboard },
    template: '<div class="bg-slate-50"><Dashboard /></div>',
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { Dashboard },
    template: `
      <div class="bg-slate-50 p-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <div class="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div class="h-4 w-60 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div v-for="i in 4" :key="i" class="bg-white rounded-lg border border-slate-200 p-6">
              <div class="h-4 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div class="h-8 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div class="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithData: Story = {
  render: () => ({
    components: { Dashboard },
    template: '<div class="bg-slate-50 min-h-screen"><Dashboard /></div>',
  }),
}
