import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumb from '../components/ui/breadcrumb.vue'

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb>
        <div class="flex items-center gap-2 text-sm">
          <a href="#" class="text-blue-600 hover:underline">Home</a>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline">Products</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-700">Electronics</span>
        </div>
      </Breadcrumb>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb>
        <div class="flex items-center gap-2 text-sm">
          <a href="#" class="flex items-center gap-1 text-blue-600 hover:underline">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </a>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline">Dashboard</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-700">Settings</span>
        </div>
      </Breadcrumb>
    `,
  }),
}

export const Long: Story = {
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb>
        <div class="flex items-center gap-2 text-sm overflow-x-auto">
          <a href="#" class="text-blue-600 hover:underline whitespace-nowrap">Home</a>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline whitespace-nowrap">Products</a>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline whitespace-nowrap">Electronics</a>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline whitespace-nowrap">Computers</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-700 whitespace-nowrap">Laptops</span>
        </div>
      </Breadcrumb>
    `,
  }),
}

export const Collapsible: Story = {
  render: () => ({
    components: { Breadcrumb },
    setup() {
      const items = [
        { label: 'Home', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Design System', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Breadcrumb', href: '#' },
      ]
      return { items }
    },
    template: `
      <Breadcrumb>
        <div class="flex items-center gap-2 text-sm">
          <a href="#" class="text-blue-600 hover:underline">Home</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-400">...</span>
          <span class="text-gray-400">/</span>
          <a href="#" class="text-blue-600 hover:underline">Components</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-700">Breadcrumb</span>
        </div>
      </Breadcrumb>
    `,
  }),
}

export const Dark: Story = {
  render: () => ({
    components: { Breadcrumb },
    template: `
      <div class="bg-slate-900 p-4 rounded">
        <Breadcrumb>
          <div class="flex items-center gap-2 text-sm">
            <a href="#" class="text-blue-400 hover:underline">Home</a>
            <span class="text-slate-500">/</span>
            <a href="#" class="text-blue-400 hover:underline">Docs</a>
            <span class="text-slate-500">/</span>
            <span class="text-slate-300">Getting Started</span>
          </div>
        </Breadcrumb>
      </div>
    `,
  }),
}

export const WithSeparators: Story = {
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb>
        <div class="flex items-center gap-2 text-sm">
          <a href="#" class="text-blue-600 hover:underline">Home</a>
          <span class="text-gray-400">›</span>
          <a href="#" class="text-blue-600 hover:underline">Products</a>
          <span class="text-gray-400">›</span>
          <a href="#" class="text-blue-600 hover:underline">Category</a>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700">Item</span>
        </div>
      </Breadcrumb>
    `,
  }),
}
