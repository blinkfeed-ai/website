import { Bars3Icon } from '@heroicons/react/24/outline'
import {Container} from '@/app/Container'
import { Dialog } from '@headlessui/react'

import * as Button from '@/app/Button'

import React from 'react'

const items = [
  {name: 'Blinkfeed', href: '#'},
  {name: 'Pricing', href: '#pricing'},
  {name: 'Community', href: 'https://discord.gg/NmqDddBV', target: '_blank'},
  {name: 'Feature Request', href: 'https://blinkfeed.featurebase.app', target: '_blank'},
]

// ======================
// === Hamburger Menu ===
// ======================

function HamburgerMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="bg-white w-full lg:w-auto">
      <nav className="mx-auto flex flex-shrink flex-row w-full lg:w-auto" aria-label="Global">
          <Logo />
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden">
          <button
            type="button"
            className="-ml-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed top-0 left-0 z-50 w-full h-auto overflow-y-auto bg-white px-6 ring-1 ring-gray-900/10">
          <div className="m-4 my-2 flow-root">
            <div className="space-y-2 py-6">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    return true
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

// ======================
// === Blinkfeed Logo ===
// ======================

function Logo() {
  return (
    <div className='flex '>
      <a href='#' className='-m-1.5 p-1.5'>
        <img className='h-10 w-10' src='/icon/logo.svg' alt='' />
      </a>
    </div>
  )
}

// ========================
// === Navigation Items ===
// ========================

function Items() {
  return (
    <div className='hidden lg:flex lg:justify-center lg:gap-x-12 text-sm font-semibold leading-6'>
      {items.map(item => {
        if (item.href.startsWith('#')) {
          return (
            <div
              key={item.name}
              className='cursor-pointer'
              onClick={() => {
                const id = item.href.slice(1)
                const el = id == '' ? document.body : document.getElementById(id)
                const path = id == '' ? '' : '#' + id
                if (el) {
                  el.scrollIntoView({behavior: 'smooth'})
                  const currentUrl = window.location.href
                  const url = new URL(currentUrl)
                  const baseUrl = url.origin + url.pathname + url.search
                  const newUrl = baseUrl + path
                  window.history.pushState({path: newUrl}, '', newUrl)
                }
              }}
            >
              {item.name}
            </div>
          )
        } else {
          return (
            <a key={item.name} href={item.href} target={item.target}>
              {item.name}
            </a>
          )
        }
      })}
    </div>
  )
}

// ======================
// === Sign up button ===
// ======================

function Rhs() {
  return (
    <div className='flex items-center gap-x-6 text-white'>
      <Button.SignUp />
    </div>
  )
}

// ==========================
// === Top Navigation Bar ===
// ==========================

export const HEIGHT = 72

export function Navigation() {
  return (
    <>
      <div className='h-4' />
      <header className='sticky top-0 bg-page z-40'>
        <nav>
          <Container>
            <div className='flex items-center lg:gap-12' style={{height: `${HEIGHT}px`}}>
              <HamburgerMenu />
              <div className='flex-grow flex-shrink-0 flex justify-between items-center'>
                <Items />
                <Rhs />
              </div>
            </div>
          </Container>
        </nav>
      </header>
    </>
  )
}
