import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Progress from '../components/ui/progress.vue'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-96">
        <Progress :value="65" />
      </div>
    `,
  }),
}

export const DifferentValues: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-96 space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">0%</p>
          <Progress :value="0" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">25%</p>
          <Progress :value="25" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">50%</p>
          <Progress :value="50" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">75%</p>
          <Progress :value="75" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">100%</p>
          <Progress :value="100" />
        </div>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-96 space-y-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium">Loading...</span>
          <span class="text-sm text-gray-600">65%</span>
        </div>
        <Progress :value="65" />
      </div>
    `,
  }),
}

export const Animated: Story = {
  render: () => ({
    components: { Progress },
    setup() {
      const value = ref(0)
      const start = () => {
        if (value.value < 100) {
          value.value += Math.random() * 30
          if (value.value > 100) value.value = 100
          setTimeout(start, 500)
        }
      }
      return { value, start }
    },
    template: `
      <div class="w-96 space-y-4">
        <Progress :value="value" />
        <button @click="start" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Start Progress
        </button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-96 space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-blue-500"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Medium</p>
          <Progress :value="50" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-blue-500"></div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-96 space-y-4">
        <div>
          <p class="text-sm font-medium mb-2">Success</p>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-3/4 bg-green-500"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Warning</p>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-yellow-500"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Danger</p>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/4 bg-red-500"></div>
          </div>
        </div>
      </div>
    `,
  }),
}
