import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '../components/ui/badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Default</Badge>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Secondary</Badge>',
  }),
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Destructive</Badge>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Outline</Badge>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-3 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `,
  }),
}

export const WithStatuses: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-3 flex-wrap">
        <Badge variant="default">Active</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="outline">Inactive</Badge>
        <Badge variant="destructive">Blocked</Badge>
      </div>
    `,
  }),
}

export const InText: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="space-y-3">
        <p>User Status: <Badge variant="default">Premium</Badge></p>
        <p>Subscription: <Badge variant="secondary">Monthly</Badge></p>
        <p>Notifications: <Badge variant="outline">3</Badge></p>
      </div>
    `,
  }),
}
