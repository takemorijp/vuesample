import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from '../components/ui/Input.vue'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
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
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'example@email.com',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Cannot edit')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const WithValue: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Prefilled value')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
}

export const AllTypes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const values = ref({
        text: '',
        email: '',
        password: '',
        number: '',
        tel: '',
        url: '',
      })
      return { values }
    },
    template: `
      <div class="space-y-4 max-w-sm">
        <div>
          <label class="block text-sm font-medium mb-2">Text</label>
          <Input type="text" placeholder="Enter text..." v-model="values.text" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Email</label>
          <Input type="email" placeholder="example@email.com" v-model="values.email" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Password</label>
          <Input type="password" placeholder="Enter password..." v-model="values.password" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Number</label>
          <Input type="number" placeholder="Enter number..." v-model="values.number" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Phone</label>
          <Input type="tel" placeholder="+81-90-1234-5678" v-model="values.tel" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">URL</label>
          <Input type="url" placeholder="https://example.com" v-model="values.url" />
        </div>
      </div>
    `,
  }),
}
