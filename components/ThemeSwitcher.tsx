'use client'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import VIcon from './base/VIcon'

export function ThemeSwitcher({ title = 'theme' }: { title?: string }) {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const themes = [
    {
      name: '🌝  light',
      id: 'light',
    },
    {
      name: '🌚  dark',
      id: 'dark',
    },
    {
      name: '🧁  cupcake',
      id: 'cupcake',
    },
    {
      name: '🐝  bumblebee',
      id: 'bumblebee',
    },
    {
      name: '✳️  Emerald',
      id: 'emerald',
    },
    {
      name: '🏢  Corporate',
      id: 'corporate',
    },
    {
      name: '🌃  synthwave',
      id: 'synthwave',
    },
    {
      name: '👴  retro',
      id: 'retro',
    },
    {
      name: '🤖  cyberpunk',
      id: 'cyberpunk',
    },
    {
      name: '🌸  valentine',
      id: 'valentine',
    },
    {
      name: '🎃  halloween',
      id: 'halloween',
    },
    {
      name: '🌷  garden',
      id: 'garden',
    },
    {
      name: '🌲  forest',
      id: 'forest',
    },
    {
      name: '🐟  aqua',
      id: 'aqua',
    },
    {
      name: '👓  lofi',
      id: 'lofi',
    },
    {
      name: '🖍  pastel',
      id: 'pastel',
    },
    {
      name: '🧚‍♀️  fantasy',
      id: 'fantasy',
    },
    {
      name: '📝  Wireframe',
      id: 'wireframe',
    },
    {
      name: '🏴  black',
      id: 'black',
    },
    {
      name: '💎  luxury',
      id: 'luxury',
    },
    {
      name: '🧛‍♂️  dracula',
      id: 'dracula',
    },
    {
      name: '🖨  CMYK',
      id: 'cmyk',
    },
    {
      name: '🍁  Autumn',
      id: 'autumn',
    },
    {
      name: '💼  Business',
      id: 'business',
    },
    {
      name: '💊  Acid',
      id: 'acid',
    },
    {
      name: '🍋  Lemonade',
      id: 'lemonade',
    },
    {
      name: '🌙  Night',
      id: 'night',
    },
    {
      name: '☕️  Coffee',
      id: 'coffee',
    },
    {
      name: '❄️  Winter',
      id: 'winter',
    },
  ]

  return (
    <div title='Change Theme' className={`dropdown dropdown-end `}>
      <div
        tabIndex={0}
        data-umami-event='nav-theme-switcher'
        className='btn btn-ghost gap-1 normal-case'
      >
        <span className='hidden font-normal md:inline'>{title}</span>
        <VIcon className='h-6 w-6' icon='mdi:theme-light-dark'></VIcon>
      </div>
      <div className='dropdown-content rounded-t-box rounded-b-box top-px z-50 mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl'>
        <div className='grid grid-cols-1 gap-3 p-3' tabIndex={0}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              className='overflow-hidden rounded-lg text-left outline-base-content'
              data-set-theme={theme.id}
            >
              <div
                data-theme={theme.id}
                className='w-full cursor-pointer bg-base-100 font-sans text-base-content'
              >
                <div className='grid grid-cols-5 grid-rows-3'>
                  <div className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'>
                    <div className='flex-grow text-sm font-bold'>
                      {theme.id}
                    </div>
                    <div className='flex h-full flex-shrink-0 flex-wrap gap-1'>
                      <div className='w-2 rounded bg-primary' />
                      <div className='w-2 rounded bg-secondary' />
                      <div className='w-2 rounded bg-accent' />
                      <div className='w-2 rounded bg-neutral' />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
