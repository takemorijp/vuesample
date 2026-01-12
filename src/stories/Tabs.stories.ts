import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Tabs from '../components/ui/tabs.vue'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('tab1')
      return { activeTab }
    },
    template: `
      <div class="w-96">
        <div class="border-b border-gray-200 flex gap-4 mb-4">
          <button
            @click="activeTab = 'tab1'"
            :class="['pb-2 px-2 font-medium border-b-2', activeTab === 'tab1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900']"
          >
            Tab 1
          </button>
          <button
            @click="activeTab = 'tab2'"
            :class="['pb-2 px-2 font-medium border-b-2', activeTab === 'tab2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900']"
          >
            Tab 2
          </button>
          <button
            @click="activeTab = 'tab3'"
            :class="['pb-2 px-2 font-medium border-b-2', activeTab === 'tab3' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900']"
          >
            Tab 3
          </button>
        </div>
        <div class="p-4 text-sm text-gray-700">
          <div v-if="activeTab === 'tab1'">Content for Tab 1</div>
          <div v-else-if="activeTab === 'tab2'">Content for Tab 2</div>
          <div v-else>Content for Tab 3</div>
        </div>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('profile')
      return { activeTab }
    },
    template: `
      <div class="w-96">
        <div class="border-b border-gray-200 flex gap-4 mb-4">
          <button
            @click="activeTab = 'profile'"
            :class="['pb-2 px-4 font-medium border-b-2 flex items-center gap-2', activeTab === 'profile' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600']"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            Profile
          </button>
          <button
            @click="activeTab = 'settings'"
            :class="['pb-2 px-4 font-medium border-b-2 flex items-center gap-2', activeTab === 'settings' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600']"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.533 1.533 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.533 1.533 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.533 1.533 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.533 1.533 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            Settings
          </button>
        </div>
        <div class="p-4 text-sm text-gray-700">
          <div v-if="activeTab === 'profile'">Your profile information</div>
          <div v-else>Account settings</div>
        </div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('docs')
      return { activeTab }
    },
    template: `
      <div class="flex gap-4 w-96">
        <div class="flex flex-col gap-2 border-r border-gray-200 pr-4">
          <button
            @click="activeTab = 'docs'"
            :class="['px-3 py-2 text-sm font-medium text-left rounded', activeTab === 'docs' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100']"
          >
            Documentation
          </button>
          <button
            @click="activeTab = 'api'"
            :class="['px-3 py-2 text-sm font-medium text-left rounded', activeTab === 'api' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100']"
          >
            API
          </button>
          <button
            @click="activeTab = 'examples'"
            :class="['px-3 py-2 text-sm font-medium text-left rounded', activeTab === 'examples' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100']"
          >
            Examples
          </button>
        </div>
        <div class="flex-1">
          <div class="p-4 text-sm text-gray-700">
            <div v-if="activeTab === 'docs'">Documentation content</div>
            <div v-else-if="activeTab === 'api'">API reference</div>
            <div v-else>Code examples</div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Styled: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('completed')
      return { activeTab }
    },
    template: `
      <div class="w-96">
        <div class="flex gap-2 mb-4 bg-gray-100 p-1 rounded-lg">
          <button
            @click="activeTab = 'completed'"
            :class="['px-4 py-2 rounded-md text-sm font-medium', activeTab === 'completed' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900']"
          >
            Completed
          </button>
          <button
            @click="activeTab = 'pending'"
            :class="['px-4 py-2 rounded-md text-sm font-medium', activeTab === 'pending' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900']"
          >
            Pending
          </button>
          <button
            @click="activeTab = 'archived'"
            :class="['px-4 py-2 rounded-md text-sm font-medium', activeTab === 'archived' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900']"
          >
            Archived
          </button>
        </div>
        <div class="text-sm text-gray-700">Content for {{ activeTab }}</div>
      </div>
    `,
  }),
}
