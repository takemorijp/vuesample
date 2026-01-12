import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Switch from '../components/ui/switch.vue'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Switch v-model:checked="checked" />',
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Switch v-model:checked="checked" />',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Switch v-model:checked="checked" disabled />',
  }),
}

export const DisabledChecked: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Switch v-model:checked="checked" disabled />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div class="flex items-center gap-3">
        <Switch v-model:checked="checked" id="notifications" />
        <label for="notifications" class="text-sm font-medium">
          Enable Notifications
        </label>
      </div>
    `,
  }),
}

export const Options: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const settings = ref({
        notifications: true,
        emails: false,
        sms: true,
      })
      return { settings }
    },
    template: `
      <div class="space-y-4 w-96">
        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <label class="text-sm font-medium">Push Notifications</label>
          <Switch v-model:checked="settings.notifications" />
        </div>
        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <label class="text-sm font-medium">Email Updates</label>
          <Switch v-model:checked="settings.emails" />
        </div>
        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <label class="text-sm font-medium">SMS Alerts</label>
          <Switch v-model:checked="settings.sms" />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref({
        sm: false,
        md: false,
        lg: false,
      })
      return { checked }
    },
    template: `
      <div class="flex gap-4 items-center">
        <div class="flex flex-col gap-2 items-center">
          <Switch v-model:checked="checked.sm" class="h-5 w-9" />
          <span class="text-xs">Small</span>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Switch v-model:checked="checked.md" />
          <span class="text-xs">Medium</span>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Switch v-model:checked="checked.lg" class="h-7 w-14" />
          <span class="text-xs">Large</span>
        </div>
      </div>
    `,
  }),
}

export const Status: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const enabled = ref(true)
      return { enabled }
    },
    template: `
      <div class="flex items-center gap-3">
        <Switch v-model:checked="enabled" />
        <span class="text-sm" :class="enabled ? 'text-green-600' : 'text-red-600'">
          {{ enabled ? 'Active' : 'Inactive' }}
        </span>
      </div>
    `,
  }),
}
