import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UserFilterDialog from '../components/UserFilterDialog.vue'

const meta: Meta<typeof UserFilterDialog> = {
  title: 'Users/UserFilterDialog',
  component: UserFilterDialog,
  tags: ['autodocs'],
  args: {
    isOpen: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof UserFilterDialog>

export const Closed: Story = {
  args: {
    isOpen: false,
  },
}

export const Open: Story = {
  args: {
    isOpen: true,
  },
}

export const Interactive: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => ({
    components: { UserFilterDialog },
    setup() {
      const isOpen = ref(args.isOpen)
      const toggleDialog = () => {
        isOpen.value = !isOpen.value
      }
      const onApplyFilter = (filterData: any) => {
        console.log('Filter applied:', filterData)
      }
      const onReset = () => {
        console.log('Filter reset')
      }
      return { isOpen, toggleDialog, onApplyFilter, onReset, args }
    },
    template: `
      <div>
        <button @click="toggleDialog" class="m-4 px-4 py-2 bg-blue-500 text-white rounded">
          Open Filter
        </button>
        <UserFilterDialog
          :isOpen="isOpen"
          @update:isOpen="isOpen = $event"
          @apply="onApplyFilter"
          @reset="onReset"
        />
      </div>
    `,
  }),
  decorators: [
    () => ({
      template: '<div style="height: 100vh; overflow: hidden;"><story /></div>',
    }),
  ],
}
