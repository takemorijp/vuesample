import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import RadioGroup from '../components/ui/radio-group.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const selected = ref('option1')
      return { selected }
    },
    template: `
      <div class="space-y-3 w-96">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="option1" class="w-4 h-4" />
          <span class="text-sm">Option 1</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="option2" class="w-4 h-4" />
          <span class="text-sm">Option 2</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="option3" class="w-4 h-4" />
          <span class="text-sm">Option 3</span>
        </label>
        <p class="text-sm text-gray-600 mt-4">Selected: {{ selected }}</p>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const selected = ref('monthly')
      return { selected }
    },
    template: `
      <div class="space-y-4 w-96">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="monthly" class="w-4 h-4" />
          <span class="text-sm font-medium">Monthly Billing</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="yearly" class="w-4 h-4" />
          <span class="text-sm font-medium">Yearly Billing</span>
        </label>
      </div>
    `,
  }),
}

export const WithDescription: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const plan = ref('pro')
      return { plan }
    },
    template: `
      <div class="space-y-4 w-96">
        <label class="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg">
          <input type="radio" v-model="plan" value="basic" class="w-4 h-4 mt-1" />
          <div>
            <p class="text-sm font-medium">Basic</p>
            <p class="text-xs text-gray-600">Perfect for getting started</p>
          </div>
        </label>
        <label class="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg">
          <input type="radio" v-model="plan" value="pro" class="w-4 h-4 mt-1" />
          <div>
            <p class="text-sm font-medium">Pro</p>
            <p class="text-xs text-gray-600">For growing businesses</p>
          </div>
        </label>
        <label class="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg">
          <input type="radio" v-model="plan" value="enterprise" class="w-4 h-4 mt-1" />
          <div>
            <p class="text-sm font-medium">Enterprise</p>
            <p class="text-xs text-gray-600">For large scale operations</p>
          </div>
        </label>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const selected = ref('option1')
      return { selected }
    },
    template: `
      <div class="space-y-3 w-96 opacity-60">
        <label class="flex items-center gap-3 cursor-not-allowed">
          <input type="radio" v-model="selected" value="option1" disabled class="w-4 h-4" />
          <span class="text-sm">Disabled Option 1</span>
        </label>
        <label class="flex items-center gap-3 cursor-not-allowed">
          <input type="radio" v-model="selected" value="option2" disabled class="w-4 h-4" />
          <span class="text-sm">Disabled Option 2</span>
        </label>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const selected = ref('blue')
      return { selected }
    },
    template: `
      <div class="space-y-3 w-96">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="blue" class="w-4 h-4 accent-blue-500" />
          <span class="text-sm">Blue</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="green" class="w-4 h-4 accent-green-500" />
          <span class="text-sm">Green</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" v-model="selected" value="red" class="w-4 h-4 accent-red-500" />
          <span class="text-sm">Red</span>
        </label>
      </div>
    `,
  }),
}
