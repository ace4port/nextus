import { Post } from '@/types/schemas'
import BlockContainer from '@/app/[lang]/components/blocks/BlockContainer'
import TypographyTitle from '@/app/[lang]/components/typography/TypographyTitle'
import TypographyHeadline from '@/app/[lang]/components/typography/TypographyHeadline'
import PostCard from '@/app/[lang]/components/PostCard'

export interface CardGroup {
  id: string
  title: string
  headline: string
  content: string
  posts: Array<{
    posts_id: Post
  }>
}

interface CardGroupBlockProps {
  data: CardGroup
}

function CardGroupBlock({ data }: CardGroupBlockProps) {
  return (
    <BlockContainer>
      {data.title && <TypographyTitle>{data.title}</TypographyTitle>}
      {data.headline && <TypographyHeadline content={data.headline} />}
      <div className='mt-4 grid gap-8 md:grid-cols-3'>
        {data.posts.map((item, itemIdx) => (
          <PostCard key={itemIdx} post={item.posts_id} />
        ))}
      </div>
    </BlockContainer>
  )
}

export default CardGroupBlock
