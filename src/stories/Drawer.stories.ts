import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from '../components/ui/drawer.vue'

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded m-4">Open Drawer</button>
        <div v-if="isOpen" class="fixed inset-0 z-50">
          <div @click="isOpen = false" class="absolute inset-0 bg-black/30"></div>
          <div class="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">Drawer Title</h2>
                <button @click="isOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <p class="text-gray-600 mb-4">Drawer content goes here</p>
              <button @click="isOpen = false" class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const LeftSide: Story = {
  render: () => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded m-4">Open Drawer</button>
        <div v-if="isOpen" class="fixed inset-0 z-50">
          <div @click="isOpen = false" class="absolute inset-0 bg-black/30"></div>
          <div class="absolute left-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">Navigation Menu</h2>
                <button @click="isOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <nav class="space-y-2">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Home</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Products</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Services</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false)
      const formData = ref({ name: '', email: '' })
      return { isOpen, formData }
    },
    template: `
      <div>
        <button @click="isOpen = true" class="px-4 py-2 bg-green-500 text-white rounded m-4">Add User</button>
        <div v-if="isOpen" class="fixed inset-0 z-50">
          <div @click="isOpen = false" class="absolute inset-0 bg-black/30"></div>
          <div class="absolute right-0 top-0 h-screen w-96 bg-white shadow-lg overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 class="text-xl font-bold">Add New User</h2>
              <button @click="isOpen = false" class="text-gray-400">✕</button>
            </div>
            <div class="p-6 space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input v-model="formData.name" type="text" placeholder="John Doe" class="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input v-model="formData.email" type="email" placeholder="john@example.com" class="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <button @click="isOpen = false" class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add User</button>
              <button @click="isOpen = false" class="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const FullHeight: Story = {
  render: () => ({
    components: { Drawer },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div class="h-screen bg-gray-50">
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded m-4">Open Drawer</button>
        <p class="text-gray-600 m-4">Background content is visible</p>
        <div v-if="isOpen" class="fixed inset-0 z-50">
          <div @click="isOpen = false" class="absolute inset-0 bg-black/30"></div>
          <div class="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto">
            <div class="p-6 space-y-3">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">Full Height Drawer</h2>
                <button @click="isOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <div v-for="i in 10" :key="i" class="p-3 border border-gray-200 rounded">Item {{ i }}</div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
