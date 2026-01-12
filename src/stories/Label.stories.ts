import type { Meta, StoryObj } from '@storybook/vue3'
import Label from '../components/ui/label.vue'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => ({
    components: { Label },
    template: '<Label>Default Label</Label>',
  }),
}

export const WithInput: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="space-y-2">
        <Label for="email">Email Address</Label>
        <input id="email" type="email" placeholder="your@email.com" class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    `,
  }),
}

export const WithCheckbox: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex items-center gap-2">
        <input id="subscribe" type="checkbox" class="rounded" />
        <Label for="subscribe" class="font-normal cursor-pointer">Subscribe to our newsletter</Label>
      </div>
    `,
  }),
}

export const Required: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="space-y-2">
        <Label>
          Full Name
          <span class="text-red-500 ml-1">*</span>
        </Label>
        <input type="text" placeholder="John Doe" class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    `,
  }),
}

export const Optional: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="space-y-2">
        <Label>
          Phone Number
          <span class="text-gray-500 text-sm ml-2">(Optional)</span>
        </Label>
        <input type="tel" placeholder="+81-90-1234-5678" class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="space-y-2">
        <Label class="opacity-50">Disabled Field</Label>
        <input type="text" value="Cannot edit" disabled class="w-64 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 opacity-50" />
      </div>
    `,
  }),
}

export const FormExample: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="space-y-6 max-w-md">
        <div class="space-y-2">
          <Label for="name">Full Name <span class="text-red-500">*</span></Label>
          <input id="name" type="text" placeholder="John Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div class="space-y-2">
          <Label for="email">Email <span class="text-red-500">*</span></Label>
          <input id="email" type="email" placeholder="john@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div class="space-y-2">
          <Label for="message">Message <span class="text-red-500">*</span></Label>
          <textarea id="message" placeholder="Your message..." class="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"></textarea>
        </div>
        <div class="flex items-center gap-2">
          <input id="agree" type="checkbox" class="rounded" />
          <Label for="agree" class="font-normal">I agree to the terms</Label>
        </div>
      </div>
    `,
  }),
}
