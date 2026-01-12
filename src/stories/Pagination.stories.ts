import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Pagination from '../components/ui/pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      const totalPages = 5
      return { currentPage, totalPages }
    },
    template: `
      <div class="flex items-center justify-center gap-2">
        <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">←</button>
        <div class="flex gap-1">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="['px-3 py-2 border rounded', currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-100']"
          >
            {{ page }}
          </button>
        </div>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">→</button>
      </div>
    `,
  }),
}

export const WithInfo: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(2)
      const totalPages = 10
      const itemsPerPage = 20
      const totalItems = 195
      return { currentPage, totalPages, itemsPerPage, totalItems }
    },
    template: `
      <div class="w-96 space-y-4">
        <div class="flex items-center justify-between text-sm text-gray-600">
          <span>Showing {{ (currentPage-1)*itemsPerPage + 1 }}-{{ Math.min(currentPage*itemsPerPage, totalItems) }} of {{ totalItems }}</span>
        </div>
        <div class="flex items-center justify-center gap-2">
          <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">Previous</button>
          <div class="flex gap-1">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              :class="['px-3 py-2 border rounded text-sm', currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-100']"
            >
              {{ page }}
            </button>
          </div>
          <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">Next</button>
        </div>
      </div>
    `,
  }),
}

export const Simple: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(3)
      const totalPages = 20
      return { currentPage, totalPages }
    },
    template: `
      <div class="flex items-center justify-center gap-4">
        <button :disabled="currentPage === 1" @click="currentPage--" class="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 font-medium">Previous</button>
        <span class="text-sm text-gray-600">Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 font-medium">Next</button>
      </div>
    `,
  }),
}

export const Ellipsis: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(15)
      const totalPages = 100
      const getPages = () => {
        const pages = []
        const start = Math.max(1, currentPage.value - 2)
        const end = Math.min(totalPages, currentPage.value + 2)
        if (start > 1) pages.push(1)
        if (start > 2) pages.push('...')
        for (let i = start; i <= end; i++) pages.push(i)
        if (end < totalPages - 1) pages.push('...')
        if (end < totalPages) pages.push(totalPages)
        return pages
      }
      return { currentPage, totalPages, getPages }
    },
    template: `
      <div class="flex items-center justify-center gap-2">
        <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-2 border rounded">←</button>
        <div class="flex gap-1">
          <button
            v-for="page in getPages()"
            :key="page"
            @click="if(typeof page === 'number') currentPage = page"
            :class="['px-3 py-2 border rounded text-sm', page === '...' ? 'cursor-default border-none' : currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-100']"
            :disabled="page === '...'"
          >
            {{ page }}
          </button>
        </div>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-2 border rounded">→</button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { Pagination },
    template: `
      <div class="flex items-center justify-center gap-2 opacity-50">
        <button disabled class="px-3 py-2 border rounded">←</button>
        <div class="flex gap-1">
          <button v-for="i in 5" :key="i" disabled class="px-3 py-2 border rounded text-sm">{{ i }}</button>
        </div>
        <button disabled class="px-3 py-2 border rounded">→</button>
      </div>
    `,
  }),
}
