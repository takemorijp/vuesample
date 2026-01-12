import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from '../components/ui/alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert>
          <div class="space-y-2">
            <h4 class="font-medium">Alert Title</h4>
            <p class="text-sm">This is the alert description message</p>
          </div>
        </Alert>
      </div>
    `,
  }),
}

export const Info: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert class="bg-blue-50 border-blue-200">
          <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          <div class="space-y-2">
            <h4 class="font-medium text-blue-900">Information</h4>
            <p class="text-sm text-blue-800">This is an informational alert message</p>
          </div>
        </Alert>
      </div>
    `,
  }),
}

export const Success: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert class="bg-green-50 border-green-200">
          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <div class="space-y-2">
            <h4 class="font-medium text-green-900">Success</h4>
            <p class="text-sm text-green-800">Your operation completed successfully</p>
          </div>
        </Alert>
      </div>
    `,
  }),
}

export const Warning: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert class="bg-yellow-50 border-yellow-200">
          <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <div class="space-y-2">
            <h4 class="font-medium text-yellow-900">Warning</h4>
            <p class="text-sm text-yellow-800">Please review this important notice</p>
          </div>
        </Alert>
      </div>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert class="bg-red-50 border-red-200">
          <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <div class="space-y-2">
            <h4 class="font-medium text-red-900">Error</h4>
            <p class="text-sm text-red-800">An error occurred, please try again</p>
          </div>
        </Alert>
      </div>
    `,
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="w-96">
        <Alert class="bg-blue-50 border-blue-200">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2">
              <h4 class="font-medium text-blue-900">Update Available</h4>
              <p class="text-sm text-blue-800">A new version is available. Please update now.</p>
            </div>
            <button class="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 flex-shrink-0">
              Update
            </button>
          </div>
        </Alert>
      </div>
    `,
  }),
}
