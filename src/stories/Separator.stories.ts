import type { Meta, StoryObj } from '@storybook/vue3'
import Separator from '../components/ui/separator.vue'

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-96">
        <div class="h-20 flex items-center">
          <p>Content above</p>
        </div>
        <Separator />
        <div class="h-20 flex items-center">
          <p>Content below</p>
        </div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-32 gap-4">
        <div>
          <p>Left content</p>
        </div>
        <Separator orientation="vertical" />
        <div>
          <p>Right content</p>
        </div>
      </div>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-96 space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-4">Section 1</h3>
          <p>Some content here</p>
        </div>
        <Separator />
        <div>
          <h3 class="text-lg font-semibold mb-4">Section 2</h3>
          <p>More content here</p>
        </div>
      </div>
    `,
  }),
}

export const InList: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-96 space-y-0">
        <div class="p-4">
          <p class="font-medium">Item 1</p>
          <p class="text-sm text-gray-600">Description</p>
        </div>
        <Separator />
        <div class="p-4">
          <p class="font-medium">Item 2</p>
          <p class="text-sm text-gray-600">Description</p>
        </div>
        <Separator />
        <div class="p-4">
          <p class="font-medium">Item 3</p>
          <p class="text-sm text-gray-600">Description</p>
        </div>
      </div>
    `,
  }),
}

export const WithMargin: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-96 space-y-6">
        <section>
          <h2 class="text-xl font-bold mb-3">Section 1</h2>
          <p class="text-gray-700">Content with larger margin around separator</p>
        </section>
        <Separator class="my-6" />
        <section>
          <h2 class="text-xl font-bold mb-3">Section 2</h2>
          <p class="text-gray-700">Another content section</p>
        </section>
      </div>
    `,
  }),
}

export const ColorVariants: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-96 space-y-6">
        <div>
          <p class="text-sm font-medium mb-3">Default</p>
          <Separator />
        </div>
        <div>
          <p class="text-sm font-medium mb-3">Custom color</p>
          <Separator class="bg-blue-500" />
        </div>
        <div>
          <p class="text-sm font-medium mb-3">Dashed style</p>
          <div class="border-b-2 border-dashed border-gray-300"></div>
        </div>
      </div>
    `,
  }),
}

export const MultipleOrientations: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="space-y-6 max-w-2xl">
        <div>
          <h3 class="font-medium mb-3">Horizontal Separator</h3>
          <p>Content before</p>
          <Separator class="my-4" />
          <p>Content after</p>
        </div>
        <div class="flex gap-4 h-20">
          <div>
            <p>Left side</p>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p>Right side</p>
          </div>
        </div>
      </div>
    `,
  }),
}
