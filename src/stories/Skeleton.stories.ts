import type { Meta, StoryObj } from '@storybook/vue3'
import Skeleton from '../components/ui/skeleton.vue'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => ({
    components: { Skeleton },
    template: '<Skeleton class="h-12 w-96 rounded-md" />',
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="space-y-4 w-96">
        <div>
          <p class="text-sm font-medium mb-2">Rectangle</p>
          <Skeleton class="h-12 w-full rounded-md" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Circle</p>
          <Skeleton class="h-12 w-12 rounded-full" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Square</p>
          <Skeleton class="h-24 w-24 rounded" />
        </div>
      </div>
    `,
  }),
}

export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="border border-gray-200 rounded-lg overflow-hidden w-96">
        <Skeleton class="h-40 w-full" />
        <div class="p-4 space-y-3">
          <Skeleton class="h-4 w-3/4 rounded" />
          <Skeleton class="h-4 w-full rounded" />
          <Skeleton class="h-4 w-2/3 rounded" />
          <div class="flex gap-2 pt-2">
            <Skeleton class="h-8 w-20 rounded" />
            <Skeleton class="h-8 w-20 rounded" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const AvatarSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex gap-4 w-96">
        <Skeleton class="h-12 w-12 rounded-full flex-shrink-0" />
        <div class="flex-1 space-y-2">
          <Skeleton class="h-4 w-40 rounded" />
          <Skeleton class="h-4 w-60 rounded" />
        </div>
      </div>
    `,
  }),
}

export const ListSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-96 space-y-3">
        <div v-for="i in 3" :key="i" class="flex gap-3 p-3 border border-gray-200 rounded-lg">
          <Skeleton class="h-10 w-10 rounded-full flex-shrink-0" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-3 w-24 rounded" />
            <Skeleton class="h-3 w-40 rounded" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const TableSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full border border-gray-200 rounded-lg overflow-hidden">
        <div class="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 bg-gray-50">
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
        </div>
        <div v-for="i in 3" :key="i" class="grid grid-cols-4 gap-4 p-4 border-b border-gray-200">
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
          <Skeleton class="h-4 rounded" />
        </div>
      </div>
    `,
  }),
}

export const Pulse: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-96 space-y-4">
        <div class="animate-pulse">
          <Skeleton class="h-32 w-full rounded-lg" />
        </div>
        <div class="animate-pulse space-y-2">
          <Skeleton class="h-4 w-3/4 rounded" />
          <Skeleton class="h-4 w-full rounded" />
          <Skeleton class="h-4 w-1/2 rounded" />
        </div>
      </div>
    `,
  }),
}
