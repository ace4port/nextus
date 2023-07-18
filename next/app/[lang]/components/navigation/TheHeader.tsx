import directusApi from '@/app/[lang]/utils/directus-api'
import { readItem, readSingleton } from '@directus/sdk'
import { Globals, NavigationItem } from '@/types/schemas'
import MenuItem from '@/app/[lang]/components/navigation/MenuItem'
import VButton from '@/app/[lang]/components/base/VButton'
import Link from 'next/link'
import LogoV2 from '@/app/[lang]/components/LogoV2'

export default async function TheHeader() {
  const results = await directusApi.request(
    readItem('navigation', 'main', {
      // @ts-ignore
      fields: ['items.*', 'items.page.slug', 'items.children.*'],
    })
  )

  const { items } = results as any

  const global = (await directusApi.request(
    readSingleton('globals')
  )) as Globals

  return (
    <div>
      <header className='relative w-full space-y-4 md:flex md:items-center md:space-x-6 md:space-y-0'>
        <div className='flex items-center rounded-br-xl rounded-tl-xl bg-gray-800 md:flex-1 md:justify-between'>
          <Link href='/' className='px-4 py-4'>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <LogoV2 className='h-6 text-white' />
            <span className='sr-only'>{global.title}</span>
          </Link>
          <nav
            className='hidden font-mono md:flex md:space-x-4 lg:space-x-6'
            aria-label='Global'
          >
            {items.map((item: NavigationItem) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </nav>
          <div className='flex flex-shrink-0 items-center justify-end space-x-2 p-3'>
            {/*<DarkModeToggle className='hidden text-gray-200 hover:text-gray-400 md:block' />*/}
          </div>
        </div>

        <div className='hidden md:block'>
          <VButton href='/contact-us' variant='primary' className='uppercase'>
            {"Let's Talk"}
          </VButton>
        </div>

        {/* <NavigationMobileMenu navigation={navigation} /> */}
      </header>
    </div>
  )
}
