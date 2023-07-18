import { readItems } from '@directus/sdk'
import directusApi from '../utils/directus-api'
import { Post } from '@/types/schemas'
import Categories from '../components/Categories'
import GlobalSearch from '../components/GlobalSearch'
import PageContainer from '../components/PageContainer'
import PostCard from '../components/PostCard'
import TypographyHeadline from '../components/typography/TypographyHeadline'
import TypographyTitle from '../components/typography/TypographyTitle'
import { isEven } from '../utils/math'
import FeaturePostCard from '../components/FeaturePostCard'

async function fetchData() {
  const posts = await directusApi.request(
    readItems('posts', {
      filter: {
        // status: { _eq: 'published' },
      },
      sort: ['date_published'],

      fields: [
        '*',
        'author.*',
        'category.title',
        'category.slug',
        'category.color',
      ],
    })
  )

  return posts as Array<Post>
}

export default async function PageRoute() {
  const posts = await fetchData()

  return (
    <PageContainer>
      <header className='border-b border-gray-300 pb-6 dark:border-gray-700'>
        <TypographyTitle>Agency Blog</TypographyTitle>
        <TypographyHeadline>
          <p>
            Articles on <em>development</em>, marketing, and more.
          </p>
        </TypographyHeadline>
      </header>
      <section className='relative w-full space-y-12 py-12'>
        <div className='relative grid w-full gap-12 border-b-2 border-gray-300 pb-12 dark:border-gray-700 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <TypographyTitle className='text-gray-700 dark:text-gray-400'>
              Search
            </TypographyTitle>
            <GlobalSearch collections={['posts']} className='flex' />
            <TypographyTitle className='mt-8 text-gray-700 dark:text-gray-400'>
              Categories
            </TypographyTitle>
            <Categories />
          </div>
          <div className='space-y-4 lg:col-span-3'>
            <TypographyTitle>Featured Article</TypographyTitle>
            <FeaturePostCard post={posts[0]} />
          </div>
        </div>
        <div className='space-y-4'>
          <TypographyTitle>Latest & Greatest</TypographyTitle>
          <div className='relative grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {posts.map((post, postIdx) => (
              <PostCard
                key={post.id}
                post={post}
                even={isEven(postIdx)}
                className={`border-b border-gray-300 pb-6 dark:border-gray-700 ${
                  postIdx < 2 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}