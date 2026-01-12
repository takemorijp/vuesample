import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Textarea from '../components/ui/textarea.vue'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-96" />',
  }),
}

export const WithValue: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('This is some prefilled content in the textarea.')
      return { args, value }
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-96" />',
  }),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('This textarea is disabled')
      return { args, value }
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-96" />',
  }),
}

export const Rows: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="space-y-6 w-96">
        <div>
          <label class="block text-sm font-medium mb-2">Small (3 rows)</label>
          <Textarea v-model="value" placeholder="Small textarea" rows="3" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Medium (6 rows)</label>
          <Textarea v-model="value" placeholder="Medium textarea" rows="6" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Large (10 rows)</label>
          <Textarea v-model="value" placeholder="Large textarea" rows="10" />
        </div>
      </div>
    `,
  }),
}

export const WithCharacterCount: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      const maxLength = 200
      return { value, maxLength }
    },
    template: `
      <div class="w-96">
        <label class="block text-sm font-medium mb-2">Message (max {{ maxLength }} characters)</label>
        <Textarea
          v-model="value"
          :maxlength="maxLength"
          placeholder="Type your message..."
          rows="6"
        />
        <div class="mt-2 flex justify-between text-sm">
          <span class="text-gray-600">{{ value.length }} / {{ maxLength }}</span>
          <span v-if="value.length > maxLength * 0.8" class="text-orange-600">{{ maxLength - value.length }} remaining</span>
        </div>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="w-96 space-y-2">
        <label for="message" class="block text-sm font-medium">Message <span class="text-red-500">*</span></label>
        <Textarea
          id="message"
          v-model="value"
          placeholder="Please enter your message..."
          rows="5"
        />
        <p class="text-xs text-gray-500">Provide a detailed message to help us assist you better.</p>
      </div>
    `,
  }),
}

export const Validation: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      const isValid = ref(true)
      return {
        value,
        isValid,
        validate: () => {
          isValid.value = value.value.trim().length >= 10
        },
      }
    },
    template: `
      <div class="w-96 space-y-2">
        <label class="block text-sm font-medium">Feedback <span class="text-red-500">*</span></label>
        <Textarea
          v-model="value"
          @blur="validate"
          placeholder="Please enter at least 10 characters..."
          rows="4"
          :class="{ 'border-red-500': !isValid }"
        />
        <p v-if="!isValid && value" class="text-sm text-red-500">Feedback must be at least 10 characters</p>
      </div>
    `,
  }),
}
