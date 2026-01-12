import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '../components/ui/avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar>
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John" />
      </Avatar>
    `,
  }),
}

export const WithInitials: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar class="bg-blue-500 text-white">
        <span class="text-sm font-semibold">JD</span>
      </Avatar>
    `,
  }),
}

export const WithFallback: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar class="bg-gray-300 text-gray-700">
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </Avatar>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex gap-4 items-center">
        <div class="flex flex-col gap-2 items-center">
          <Avatar class="w-8 h-8 text-xs bg-blue-500 text-white">
            <span>S</span>
          </Avatar>
          <span class="text-xs">Small</span>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Avatar class="w-10 h-10 bg-green-500 text-white">
            <span>M</span>
          </Avatar>
          <span class="text-xs">Medium</span>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Avatar class="w-12 h-12 text-lg bg-purple-500 text-white">
            <span>L</span>
          </Avatar>
          <span class="text-xs">Large</span>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <Avatar class="w-16 h-16 text-2xl bg-orange-500 text-white">
            <span>XL</span>
          </Avatar>
          <span class="text-xs">Extra Large</span>
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex gap-3 flex-wrap">
        <Avatar class="bg-red-500 text-white"><span>R</span></Avatar>
        <Avatar class="bg-orange-500 text-white"><span>O</span></Avatar>
        <Avatar class="bg-yellow-500 text-white"><span>Y</span></Avatar>
        <Avatar class="bg-green-500 text-white"><span>G</span></Avatar>
        <Avatar class="bg-blue-500 text-white"><span>B</span></Avatar>
        <Avatar class="bg-indigo-500 text-white"><span>I</span></Avatar>
        <Avatar class="bg-purple-500 text-white"><span>P</span></Avatar>
        <Avatar class="bg-pink-500 text-white"><span>Pi</span></Avatar>
      </div>
    `,
  }),
}

export const Group: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex -space-x-2">
        <Avatar class="bg-blue-500 text-white border-2 border-white">
          <span>A</span>
        </Avatar>
        <Avatar class="bg-green-500 text-white border-2 border-white">
          <span>B</span>
        </Avatar>
        <Avatar class="bg-purple-500 text-white border-2 border-white">
          <span>C</span>
        </Avatar>
        <Avatar class="bg-orange-500 text-white border-2 border-white flex items-center justify-center">
          <span class="text-sm">+3</span>
        </Avatar>
      </div>
    `,
  }),
}

export const WithStatus: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex gap-4 items-start">
        <div class="relative inline-block">
          <Avatar class="bg-blue-500 text-white">
            <span>JD</span>
          </Avatar>
          <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div class="relative inline-block">
          <Avatar class="bg-gray-500 text-white">
            <span>AB</span>
          </Avatar>
          <div class="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>
        </div>
      </div>
    `,
  }),
}
