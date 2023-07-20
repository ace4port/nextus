'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { NavigationItems } from '@/lib/directus-collections'
import { convertIconName } from '@/lib/utils/strings'
import * as Popover from '@radix-ui/react-popover'

interface MenuItemProps {
  item: NavigationItems
}

function getUrl(item: NavigationItems) {
  if (item.type === 'page') {
    return `/${item.page.slug}`
  } else {
    return item.url
  }
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div>
      {!item.has_children && (
        <Link
          href={getUrl(item)}
          className='inline-flex items-center rounded-br-xl rounded-tl-xl px-3 py-2 font-bold uppercase text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white'
          target={item.open_in_new_tab ? '_blank' : '_self'}
        >
          {item.title}
        </Link>
      )}

      {item.has_children && (
        <Popover.Root>
          <Popover.Trigger
            asChild
            className={[
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'inline-flex items-center rounded-br-xl rounded-tl-xl px-3 py-2 font-bold uppercase outline-none ring-accent ring-offset-2 ring-offset-gray-800 focus:ring-1',
            ].join(' ')}
          >
            <div>
              {item.title}
              <Icon
                icon='heroicons:chevron-down'
                className='ml-1 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </div>
          </Popover.Trigger>

          <Popover.Content className='absolute top-full z-10 mt-8 w-screen max-w-md overflow-hidden rounded-bl-3xl rounded-tr-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700'>
            <div className='p-4'>
              {item.children.map((childItem: NavigationItem) => (
                <div
                  key={childItem.id}
                  className='group relative flex gap-x-6 rounded-bl-xl rounded-tr-xl p-4 text-sm leading-6 transition duration-150 hover:bg-gray-900'
                >
                  <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-bl-lg rounded-tr-lg border border-accent p-2'>
                    {childItem.icon && (
                      <Icon
                        icon={convertIconName(childItem.icon)}
                        className='h-10 w-10 text-accent'
                      />
                    )}
                  </div>
                  <div className='flex-auto'>
                    <Link
                      href={getUrl(childItem) as any}
                      className='block font-bold uppercase text-white'
                    >
                      {childItem.title}
                      <span className='absolute inset-0' />
                    </Link>
                    {childItem.label && (
                      <p className='mt-1 text-sm leading-tight text-gray-400'>
                        {childItem.label}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Popover.Content>
        </Popover.Root>
      )}
    </div>
  )

  // return (
  //   <div>
  //     {!item.has_children && (
  //       <Link
  //         href={getUrl(item)}
  //         className='inline-flex items-center rounded-br-xl rounded-tl-xl px-3 py-2 font-bold uppercase text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white'
  //         target={item.open_in_new_tab ? '_blank' : '_self'}
  //       >
  //         {item.title}
  //       </Link>
  //     )}

  //     {item.has_children && (
  //       <Popover.Group>
  //         <Popover>
  //           <Popover.Button
  //             className={[
  //               'text-gray-300 hover:bg-gray-700 hover:text-white',
  //               'inline-flex items-center rounded-br-xl rounded-tl-xl px-3 py-2 font-bold uppercase outline-none ring-accent ring-offset-2 ring-offset-gray-800 focus:ring-1',
  //             ].join(' ')}
  //           >
  //             {item.title}
  //             <Icon
  //               icon='heroicons:chevron-down'
  //               className='ml-1 w-5 flex-none text-gray-400'
  //               aria-hidden='true'
  //             />
  //           </Popover.Button>

  //           <Popover.Panel className='absolute top-full z-10 mt-8 w-screen max-w-md overflow-hidden rounded-bl-3xl rounded-tr-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700'>
  //             <div className='p-4'>
  //               {item.children.map((childItem: NavigationItem) => (
  //                 <div
  //                   key={childItem.id}
  //                   className='group relative flex gap-x-6 rounded-bl-xl rounded-tr-xl p-4 text-sm leading-6 transition duration-150 hover:bg-gray-900'
  //                 >
  //                   <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-bl-lg rounded-tr-lg border border-accent p-2'>
  //                     {childItem.icon && (
  //                       <Icon
  //                         icon={convertIconName(childItem.icon)}
  //                         className='h-10 w-10 text-accent'
  //                       />
  //                     )}
  //                   </div>
  //                   <div className='flex-auto'>
  //                     <Link
  //                       href={getUrl(childItem)}
  //                       className='block font-bold uppercase text-white'
  //                     >
  //                       {childItem.title}
  //                       <span className='absolute inset-0' />
  //                     </Link>
  //                     {childItem.label && (
  //                       <p className='mt-1 text-sm leading-tight text-gray-400'>
  //                         {childItem.label}
  //                       </p>
  //                     )}
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Popover.Panel>
  //         </Popover>
  //       </Popover.Group>
  //     )}
  //   </div>
  // )
}