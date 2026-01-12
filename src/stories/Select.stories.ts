import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from '../components/ui/select.vue'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <div class="w-96">
        <select v-model="selected" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected || 'None' }}</p>
      </div>
    `,
  }),
}

export const WithValue: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref('option2')
      return { selected }
    },
    template: `
      <div class="w-96">
        <select v-model="selected" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref('option1')
      return { selected }
    },
    template: `
      <div class="w-96">
        <select v-model="selected" disabled class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 opacity-50 cursor-not-allowed">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    `,
  }),
}

export const WithGroups: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <div class="w-96">
        <select v-model="selected" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select a country</option>
          <optgroup label="Asia">
            <option value="jp">Japan</option>
            <option value="kr">Korea</option>
            <option value="cn">China</option>
          </optgroup>
          <optgroup label="Europe">
            <option value="uk">United Kingdom</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
          </optgroup>
          <optgroup label="Americas">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="mx">Mexico</option>
          </optgroup>
        </select>
      </div>
    `,
  }),
}

export const Size: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref({ sm: '', md: '', lg: '' })
      return { selected }
    },
    template: `
      <div class="w-96 space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Small</label>
          <select v-model="selected.sm" class="w-full px-3 py-1 text-sm border border-gray-300 rounded">
            <option>Select...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Medium</label>
          <select v-model="selected.md" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            <option>Select...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Large</label>
          <select v-model="selected.lg" class="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg">
            <option>Select...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(['option1'])
      return { selected }
    },
    template: `
      <div class="w-96">
        <label class="block text-sm font-medium mb-2">Select Multiple</label>
        <select v-model="selected" multiple class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected.join(', ') }}</p>
      </div>
    `,
  }),
}
