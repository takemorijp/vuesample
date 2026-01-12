import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Login from '../components/Login.vue'

const meta: Meta<typeof Login> = {
  title: 'Auth/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Login>

export const Default: Story = {
  render: () => ({
    components: { Login },
    template: '<div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center"><Login /></div>',
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { Login },
    setup() {
      return {
        template: '<div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center"><Login /></div>',
      }
    },
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { Login },
    template: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
          <div class="animate-pulse space-y-4">
            <div class="h-10 bg-gray-200 rounded"></div>
            <div class="h-10 bg-gray-200 rounded"></div>
            <div class="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    `,
  }),
}
