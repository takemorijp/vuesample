import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Slider from '../components/ui/slider.vue'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const value = ref(50)
      return { value }
    },
    template: `
      <div class="w-96">
        <Slider v-model="value" :min="0" :max="100" />
        <p class="mt-4 text-center text-lg font-medium">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const Range: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const values = ref([20, 80])
      return { values }
    },
    template: `
      <div class="w-96">
        <Slider v-model="values" :min="0" :max="100" />
        <p class="mt-4 text-center">Range: {{ values[0] }} - {{ values[1] }}</p>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const volume = ref(70)
      return { volume }
    },
    template: `
      <div class="w-96 space-y-4">
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium">Volume</label>
          <span class="text-sm text-gray-600">{{ volume }}%</span>
        </div>
        <Slider v-model="volume" :min="0" :max="100" />
      </div>
    `,
  }),
}

export const Step: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const price = ref(50)
      return { price }
    },
    template: `
      <div class="w-96 space-y-4">
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium">Price</label>
          <span class="text-sm text-gray-600">\${{ price }}</span>
        </div>
        <Slider v-model="price" :min="0" :max="100" :step="5" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const value = ref(50)
      return { value }
    },
    template: `
      <div class="w-96 opacity-50">
        <Slider v-model="value" :min="0" :max="100" disabled />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const color1 = ref(33)
      const color2 = ref(66)
      const color3 = ref(100)
      return { color1, color2, color3 }
    },
    template: `
      <div class="w-96 space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">Blue</label>
          <Slider v-model="color1" :min="0" :max="100" class="accent-blue-500" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Green</label>
          <Slider v-model="color2" :min="0" :max="100" class="accent-green-500" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Red</label>
          <Slider v-model="color3" :min="0" :max="100" class="accent-red-500" />
        </div>
      </div>
    `,
  }),
}

export const MultipleRange: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const range = ref([25, 75])
      return { range }
    },
    template: `
      <div class="w-96 space-y-4">
        <div class="flex justify-between items-center">
          <label class="text-sm font-medium">Price Range</label>
          <span class="text-sm text-gray-600">\${{ range[0] }} - \${{ range[1] }}</span>
        </div>
        <Slider v-model="range" :min="0" :max="200" :step="10" />
      </div>
    `,
  }),
}
