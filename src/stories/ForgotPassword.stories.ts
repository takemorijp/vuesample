import type { Meta, StoryObj } from '@storybook/vue3'
import ForgotPassword from '../components/ForgotPassword.vue'

const meta: Meta<typeof ForgotPassword> = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ForgotPassword>

export const Default: Story = {
  render: () => ({
    components: { ForgotPassword },
    template: '<div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center"><ForgotPassword /></div>',
  }),
}

export const EmailSent: Story = {
  render: () => ({
    components: { ForgotPassword },
    template: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
          <div class="mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-2">Email Sent</h2>
          <p class="text-gray-600 mb-4">Check your email for reset instructions</p>
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Back to Login</button>
        </div>
      </div>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { ForgotPassword },
    template: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 class="text-2xl font-bold mb-6">Forgot Password</h2>
          <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            Email not found in our system
          </div>
          <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded-lg mb-4" />
          <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mb-3">Send Reset Link</button>
          <button class="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">Back</button>
        </div>
      </div>
    `,
  }),
}
