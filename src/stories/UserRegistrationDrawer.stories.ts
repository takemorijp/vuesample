import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UserRegistrationDrawer from '../components/UserRegistrationDrawer.vue'

const meta: Meta<typeof UserRegistrationDrawer> = {
  title: 'Users/UserRegistrationDrawer',
  component: UserRegistrationDrawer,
  tags: ['autodocs'],
  args: {
    isOpen: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof UserRegistrationDrawer>

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

export const OpenWithInteraction: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => ({
    components: { UserRegistrationDrawer },
    setup() {
      const isOpen = ref(args.isOpen)
      const toggleDrawer = () => {
        isOpen.value = !isOpen.value
      }
      return { isOpen, toggleDrawer, args }
    },
    template: `
      <div>
        <button @click="toggleDrawer" class="m-4 px-4 py-2 bg-blue-500 text-white rounded">
          Toggle Drawer
        </button>
        <UserRegistrationDrawer :isOpen="isOpen" @update:isOpen="isOpen = $event" />
      </div>
    `,
  }),
  decorators: [
    () => ({
      template: '<div style="height: 100vh; overflow: hidden;"><story /></div>',
    }),
  ],
}
