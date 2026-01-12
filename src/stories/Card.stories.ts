import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '../components/ui/Card.vue'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="w-80">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Card Title</h3>
          <p class="text-gray-600">This is a simple card component with some content.</p>
        </div>
      </Card>
    `,
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="w-80">
        <div class="border-b border-gray-200 p-6">
          <h3 class="font-bold text-lg">Card Header</h3>
          <p class="text-sm text-gray-600">Subtitle or description</p>
        </div>
        <div class="p-6">
          <p class="text-gray-700">Card content goes here.</p>
        </div>
      </Card>
    `,
  }),
}

export const WithImage: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="w-80 overflow-hidden">
        <div class="w-full h-40 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Image Card</h3>
          <p class="text-gray-600 text-sm">Card with an image header</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
        </div>
      </Card>
    `,
  }),
}

export const Elevated: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="w-80 shadow-lg">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Elevated Card</h3>
          <p class="text-gray-600">This card has more shadow for elevation effect.</p>
        </div>
      </Card>
    `,
  }),
}

export const Stats: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card class="p-6">
          <p class="text-sm text-gray-600 mb-2">Total Users</p>
          <p class="text-3xl font-bold">1,234</p>
          <p class="text-sm text-green-600 mt-2">+12% from last month</p>
        </Card>
        <Card class="p-6">
          <p class="text-sm text-gray-600 mb-2">Revenue</p>
          <p class="text-3xl font-bold">$45,231</p>
          <p class="text-sm text-green-600 mt-2">+8% from last month</p>
        </Card>
        <Card class="p-6">
          <p class="text-sm text-gray-600 mb-2">Growth</p>
          <p class="text-3xl font-bold">23.5%</p>
          <p class="text-sm text-red-600 mt-2">-5% from last month</p>
        </Card>
      </div>
    `,
  }),
}

export const Hover: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="w-80 cursor-pointer hover:shadow-xl transition-shadow hover:border-blue-400">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-2">Hover Me</h3>
          <p class="text-gray-600">This card responds to hover interactions.</p>
        </div>
      </Card>
    `,
  }),
}
