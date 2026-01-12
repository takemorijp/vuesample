import type { Meta, StoryObj } from '@storybook/vue3'
import SignUp from '../components/SignUp.vue'

const meta: Meta<typeof SignUp> = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof SignUp>

export const Default: Story = {
  render: () => ({
    components: { SignUp },
    template: '<div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center"><SignUp /></div>',
  }),
}

export const FilledForm: Story = {
  render: () => ({
    components: { SignUp },
    template: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
          <form class="space-y-4">
            <input type="text" placeholder="Full Name" value="John Doe" class="w-full px-4 py-2 border rounded-lg" />
            <input type="email" placeholder="Email" value="john@example.com" class="w-full px-4 py-2 border rounded-lg" />
            <input type="tel" placeholder="Phone" value="+81-90-1234-5678" class="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="Company" value="Acme Corp" class="w-full px-4 py-2 border rounded-lg" />
            <input type="password" placeholder="Password" value="••••••••" class="w-full px-4 py-2 border rounded-lg" />
            <label class="flex items-center">
              <input type="checkbox" checked class="mr-2" />
              <span class="text-sm">I agree to the Terms</span>
            </label>
            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create Account</button>
          </form>
        </div>
      </div>
    `,
  }),
}

export const WithValidationError: Story = {
  render: () => ({
    components: { SignUp },
    template: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
          <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            Password must be at least 8 characters
          </div>
          <form class="space-y-4">
            <input type="text" placeholder="Full Name" class="w-full px-4 py-2 border rounded-lg" />
            <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg" />
            <input type="tel" placeholder="Phone" class="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="Company" class="w-full px-4 py-2 border rounded-lg" />
            <input type="password" placeholder="Password" class="w-full px-4 py-2 border border-red-300 rounded-lg" />
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm">I agree to the Terms</span>
            </label>
            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create Account</button>
          </form>
        </div>
      </div>
    `,
  }),
}
