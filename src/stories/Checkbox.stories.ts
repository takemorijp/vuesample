import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from '../components/ui/checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Checkbox v-model:checked="checked" />',
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Checkbox v-model:checked="checked" />',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Checkbox v-model:checked="checked" disabled />',
  }),
}

export const DisabledChecked: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Checkbox v-model:checked="checked" disabled />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox v-model:checked="checked" id="agree" />
        <label for="agree" class="text-sm font-medium">I agree to the terms</label>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const selected = ref(['option1'])
      return { selected }
    },
    template: `
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <Checkbox v-model="selected" value="option1" />
          <label class="text-sm">Option 1</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="selected" value="option2" />
          <label class="text-sm">Option 2</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="selected" value="option3" />
          <label class="text-sm">Option 3</label>
        </div>
        <p class="text-sm text-gray-600 mt-4">Selected: {{ selected }}</p>
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const items = ref([
        { id: 1, label: 'Item 1', checked: false },
        { id: 2, label: 'Item 2', checked: true },
        { id: 3, label: 'Item 3', checked: false },
      ])
      const allChecked = ref(false)
      const toggleAll = () => {
        allChecked.value = !allChecked.value
        items.value.forEach(item => item.checked = allChecked.value)
      }
      return { items, allChecked, toggleAll }
    },
    template: `
      <div class="space-y-4 w-64">
        <div class="flex items-center gap-2 pb-3 border-b">
          <Checkbox v-model:checked="allChecked" @update:checked="toggleAll" />
          <label class="text-sm font-medium">Select All</label>
        </div>
        <div class="space-y-2">
          <div v-for="item in items" :key="item.id" class="flex items-center gap-2">
            <Checkbox v-model:checked="item.checked" />
            <label class="text-sm">{{ item.label }}</label>
          </div>
        </div>
        <p class="text-sm text-gray-600 pt-3">
          Checked: {{ items.filter(i => i.checked).length }} / {{ items.length }}
        </p>
      </div>
    `,
  }),
}
