import type { Meta, StoryObj } from '@storybook/vue3'
import MainContent from '../components/MainContent.vue'

const meta: Meta<typeof MainContent> = {
  title: 'Layout/MainContent',
  component: MainContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof MainContent>

export const Default: Story = {
  render: () => ({
    components: { MainContent },
    template: '<MainContent />',
  }),
}

export const WithContent: Story = {
  render: () => ({
    components: { MainContent },
    template: `
      <MainContent>
        <template #default>
          <div class="p-4">
            <h2 class="text-2xl font-bold mb-4">Content Area</h2>
            <p>This is the main content area</p>
          </div>
        </template>
      </MainContent>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { MainContent },
    template: `
      <MainContent>
        <template #default>
          <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </template>
      </MainContent>
    `,
  }),
}
