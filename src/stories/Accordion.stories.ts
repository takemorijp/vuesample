import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from '../components/ui/accordion.vue'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => ({
    components: { Accordion },
    template: `
      <div class="w-96">
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
            <span>Section 1</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
          <div class="px-4 py-3 bg-gray-50 text-sm text-gray-700">
            This is the content for section 1
          </div>
        </div>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Accordion },
    template: `
      <div class="w-96 space-y-2">
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
            <span>Section 1</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
          <div class="px-4 py-3 bg-gray-50 text-sm text-gray-700">
            Content 1
          </div>
        </div>
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
            <span>Section 2</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
            <span>Section 3</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    `,
  }),
}

export const FAQ: Story = {
  render: () => ({
    components: { Accordion },
    template: `
      <div class="w-full max-w-2xl">
        <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div class="space-y-2">
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
              <span>What is this service?</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
            <div class="px-4 py-3 bg-gray-50 text-sm text-gray-700">
              This is our main service that helps you manage your business
            </div>
          </div>
          <div class="border border-gray-200 rounded-lg">
            <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50">
              <span>How do I get started?</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { Accordion },
    template: `
      <div class="w-96 space-y-2">
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button class="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-blue-50 gap-3">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Information</span>
            </div>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
          <div class="px-4 py-3 bg-blue-50 text-sm text-blue-900">
            Important information goes here
          </div>
        </div>
      </div>
    `,
  }),
}
