import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'UI/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    title: 'Delete User',
    message: 'Are you sure you want to delete this user?',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

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

export const Danger: Story = {
  args: {
    isOpen: true,
    title: 'Delete Permanently',
    message: 'This action cannot be undone.',
    confirmLabel: 'Delete',
  },
}

export const Interactive: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Action',
    message: 'Do you want to proceed?',
  },
  render: (args) => ({
    components: { ConfirmDialog },
    setup() {
      const isOpen = ref(args.isOpen)
      const toggleDialog = () => {
        isOpen.value = !isOpen.value
      }
      const onConfirm = () => {
        console.log('Confirmed')
        isOpen.value = false
      }
      const onCancel = () => {
        console.log('Cancelled')
        isOpen.value = false
      }
      return { isOpen, toggleDialog, onConfirm, onCancel, args }
    },
    template: `
      <div>
        <button @click="toggleDialog" class="px-4 py-2 bg-red-500 text-white rounded">
          Show Dialog
        </button>
        <ConfirmDialog
          :isOpen="isOpen"
          v-bind="args"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </div>
    `,
  }),
}
