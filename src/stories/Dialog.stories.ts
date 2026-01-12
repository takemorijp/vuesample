import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from '../components/ui/dialog.vue'

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Open Dialog</button>
        <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-96" @click.stop>
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold">Dialog Title</h2>
              <button @click="isOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <p class="text-gray-600 mb-6">This is a simple dialog component</p>
            <div class="flex gap-2 justify-end">
              <button @click="isOpen = false" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
              <button @click="isOpen = false" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const isOpen = ref(false)
      const formData = ref({ name: '', email: '' })
      return { isOpen, formData }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">New User</button>
        <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-96" @click.stop>
            <h2 class="text-xl font-bold mb-4">Add New User</h2>
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input v-model="formData.name" type="text" placeholder="John Doe" class="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input v-model="formData.email" type="email" placeholder="john@example.com" class="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
            </div>
            <div class="flex gap-2 justify-end">
              <button @click="isOpen = false" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
              <button @click="isOpen = false" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add User</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Alert: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete Item</button>
        <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-96" @click.stop>
            <div class="mb-4 flex items-start gap-3">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold">Delete Item?</h3>
                <p class="text-gray-600 text-sm mt-1">This action cannot be undone</p>
              </div>
            </div>
            <div class="flex gap-2 justify-end">
              <button @click="isOpen = false" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
              <button @click="isOpen = false" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded">Open Full Dialog</button>
        <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" @click.stop>
            <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 class="text-2xl font-bold">Large Dialog Content</h2>
              <button @click="isOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="p-6 space-y-4">
              <p>This is a large dialog that can contain more content</p>
              <p>It has a sticky header and can scroll if needed</p>
              <p>Perfect for complex forms or detailed information displays</p>
            </div>
            <div class="border-t border-gray-200 bg-gray-50 p-6 flex gap-2 justify-end">
              <button @click="isOpen = false" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Cancel</button>
              <button @click="isOpen = false" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
