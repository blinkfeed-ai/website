import {Bars3Icon} from '@heroicons/react/24/outline'
import {Container} from '@/app/Container'
import * as Button from '@/app/Button'

const items = [
  {name: 'Blinkfeed', href: '#'},
  {name: 'Pricing', href: '#pricing'},
  {name: 'Community', href: 'https://discord.gg/NmqDddBV', target: '_blank'},
  {name: 'Feature Request', href: 'https://blinkfeed.featurebase.app', target: '_blank'},
]

function Logo() {
  return (
    <div className='flex '>
      <a href='#' className='-m-1.5 p-1.5'>
        <img className='h-10 w-10' src='/icon/logo.svg' alt='' />
      </a>
    </div>
  )
}

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

function Rhs() {
  return (
    <div className='flex items-center gap-x-6 text-white'>
      <Button.SignUp />
    </div>
  )
}

export const HEIGHT = 72

export function Navigation() {
  return (
    <>
      <div className='h-4' />
      <header className='sticky top-0 bg-page z-50'>
        <nav>
          <Container>
            <div className='flex items-center gap-12' style={{height: `${HEIGHT}px`}}>
              <Logo />
              <div className='flex-grow flex justify-between items-center'>
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
