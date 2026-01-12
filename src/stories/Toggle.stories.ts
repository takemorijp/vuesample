import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Toggle from '../components/ui/toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <div>
        <Toggle v-model:pressed="pressed">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </Toggle>
        <p class="mt-4 text-sm">State: {{ pressed ? 'Active' : 'Inactive' }}</p>
      </div>
    `,
  }),
}

export const Pressed: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(true)
      return { pressed }
    },
    template: `
      <div>
        <Toggle v-model:pressed="pressed">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </Toggle>
        <p class="mt-4 text-sm">State: {{ pressed ? 'Active' : 'Inactive' }}</p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <Toggle v-model:pressed="pressed" disabled>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </Toggle>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <Toggle v-model:pressed="pressed" class="px-4">
        Bold
      </Toggle>
    `,
  }),
}

export const TextFormatting: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const bold = ref(false)
      const italic = ref(false)
      const underline = ref(false)
      return { bold, italic, underline }
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-2 border border-gray-200 rounded-lg p-2">
          <Toggle v-model:pressed="bold" aria-label="Toggle bold" title="Bold">
            <span class="font-bold">B</span>
          </Toggle>
          <Toggle v-model:pressed="italic" aria-label="Toggle italic" title="Italic">
            <span class="italic">I</span>
          </Toggle>
          <Toggle v-model:pressed="underline" aria-label="Toggle underline" title="Underline">
            <span class="underline">U</span>
          </Toggle>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg bg-white">
          <p :class="[bold && 'font-bold', italic && 'italic', underline && 'underline']">
            Sample text with formatting
          </p>
        </div>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const selected = ref([])
      const options = ['Option 1', 'Option 2', 'Option 3']
      const toggle = (opt: string) => {
        const idx = selected.value.indexOf(opt)
        if (idx > -1) {
          selected.value.splice(idx, 1)
        } else {
          selected.value.push(opt)
        }
      }
      return { selected, options, toggle }
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-2">
          <Toggle
            v-for="opt in options"
            :key="opt"
            :pressed="selected.includes(opt)"
            @click="toggle(opt)"
          >
            {{ opt }}
          </Toggle>
        </div>
        <p class="text-sm text-gray-600">Selected: {{ selected.length > 0 ? selected.join(', ') : 'None' }}</p>
      </div>
    `,
  }),
}

export const IconToggle: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const bookmarked = ref(false)
      return { bookmarked }
    },
    template: `
      <div class="space-y-4">
        <Toggle v-model:pressed="bookmarked" aria-label="Bookmark">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path v-if="bookmarked" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z"/>
            <path v-else fill="none" stroke="currentColor" stroke-width="2" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 19V5z"/>
          </svg>
        </Toggle>
        <p class="text-sm">{{ bookmarked ? 'Bookmarked' : 'Not bookmarked' }}</p>
      </div>
    `,
  }),
}
