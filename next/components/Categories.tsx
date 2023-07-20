import directusApi from '@/lib/utils/directus-api'
import { readItems } from '@directus/sdk'
import { Categories } from '@/lib/directus-collections'
import Link from 'next/link'
import VBadge from '@/components/base/VBadge'

async function fetchData() {
  const categories = await directusApi.request(readItems('categories'))

  return categories as Array<Categories>
}

export default async function Categories() {
  const categories = await fetchData()

  return (
    <div className='mt-4 flex flex-col space-y-2'>
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            href={`/posts/categories/${category.id}`}
            className='font-mono hover:opacity-80 dark:text-gray-200'
          >
            <VBadge color={category.color as any} size='lg'>
              {category.title}
            </VBadge>
          </Link>
        )
      })}
    </div>
  )
}
