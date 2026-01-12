import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DocumentFilterDialog from '../components/DocumentFilterDialog.vue'

const meta: Meta<typeof DocumentFilterDialog> = {
  title: 'Components/DocumentFilterDialog',
  component: DocumentFilterDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof DocumentFilterDialog>

export const Default: Story = {
  render: () => ({
    components: { DocumentFilterDialog },
    setup() {
      const isOpen = ref(true)
      const filters = ref({
        types: [],
        dateRange: 'all',
        sizeRange: 'all'
      })
      
      return { 
        isOpen, 
        filters,
        handleClose: () => { isOpen.value = false },
        handleApply: (newFilters: any) => { 
          filters.value = newFilters
          console.log('Applied filters:', newFilters)
        }
      }
    },
    template: `
      <div class="min-h-screen p-8">
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded">
          フィルターを開く
        </button>
        <DocumentFilterDialog 
          :isOpen="isOpen" 
          :filters="filters"
          @close="handleClose"
          @apply="handleApply"
        />
      </div>
    `,
  }),
}

export const WithSelectedFilters: Story = {
  render: () => ({
    components: { DocumentFilterDialog },
    setup() {
      const isOpen = ref(true)
      const filters = ref({
        types: ['PDF', 'Word'],
        dateRange: 'week',
        sizeRange: 'medium'
      })
      
      return { 
        isOpen, 
        filters,
        handleClose: () => { isOpen.value = false },
        handleApply: (newFilters: any) => { 
          filters.value = newFilters
          console.log('Applied filters:', newFilters)
        }
      }
    },
    template: `
      <div class="min-h-screen p-8">
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded">
          フィルターを開く
        </button>
        <DocumentFilterDialog 
          :isOpen="isOpen" 
          :filters="filters"
          @close="handleClose"
          @apply="handleApply"
        />
      </div>
    `,
  }),
}

export const AllTypesSelected: Story = {
  render: () => ({
    components: { DocumentFilterDialog },
    setup() {
      const isOpen = ref(true)
      const filters = ref({
        types: ['PDF', 'Word', 'Excel', 'PowerPoint', 'Text', 'CSV'],
        dateRange: 'month',
        sizeRange: 'large'
      })
      
      return { 
        isOpen, 
        filters,
        handleClose: () => { isOpen.value = false },
        handleApply: (newFilters: any) => { 
          filters.value = newFilters
          console.log('Applied filters:', newFilters)
        }
      }
    },
    template: `
      <div class="min-h-screen p-8">
        <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded">
          フィルターを開く
        </button>
        <DocumentFilterDialog 
          :isOpen="isOpen" 
          :filters="filters"
          @close="handleClose"
          @apply="handleApply"
        />
      </div>
    `,
  }),
}

export const InteractiveFilter: Story = {
  render: () => ({
    components: { DocumentFilterDialog },
    setup() {
      const isOpen = ref(false)
      const filters = ref({
        types: [],
        dateRange: 'all',
        sizeRange: 'all'
      })
      const appliedFilters = ref<any>(null)
      
      return { 
        isOpen, 
        filters,
        appliedFilters,
        handleClose: () => { isOpen.value = false },
        handleApply: (newFilters: any) => { 
          filters.value = newFilters
          appliedFilters.value = newFilters
          isOpen.value = false
        }
      }
    },
    template: `
      <div class="min-h-screen p-8">
        <div class="space-y-4 w-96">
          <button @click="isOpen = true" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            フィルターを開く
          </button>
          
          <div v-if="appliedFilters" class="p-4 bg-slate-50 rounded-lg">
            <h4 class="font-semibold mb-2">適用されたフィルター:</h4>
            <div class="space-y-1 text-sm">
              <p><strong>ファイル種類:</strong> {{ appliedFilters.types.length > 0 ? appliedFilters.types.join(', ') : 'すべて' }}</p>
              <p><strong>更新日:</strong> {{ appliedFilters.dateRange }}</p>
              <p><strong>サイズ:</strong> {{ appliedFilters.sizeRange }}</p>
            </div>
          </div>
          
          <DocumentFilterDialog 
            :isOpen="isOpen" 
            :filters="filters"
            @close="handleClose"
            @apply="handleApply"
          />
        </div>
      </div>
    `,
  }),
}
