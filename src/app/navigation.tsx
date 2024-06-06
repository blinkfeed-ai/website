import {Bars3Icon} from '@heroicons/react/24/outline'
import {Container} from '@/app/Container'
import * as Button from '@/app/Button'

const items = [
  {name: 'Blinkfeed', href: '#'},
  {name: 'Pricing', href: '#'},
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
      {items.map(item => (
        <a key={item.name} href={item.href} target={item.target} className=''>
          {item.name}
        </a>
      ))}
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

export function Navigation() {
  return (
    <>
      <div className='h-4' />
      <header className='sticky top-0 bg-page z-50'>
        <nav>
          <Container>
            <div className='flex items-center py-4 gap-12'>
              <Logo />
              <div className='flex-grow flex justify-between items-center'>
                <Items />
                <Rhs />
              </div>
            </div>
          </Container>
        </nav>
        {/*<div*/}
        {/*  className='w-full'*/}
        {/*  style={{*/}
        {/*    height: '0.5px',*/}
        {/*    backgroundColor: 'rgba(0,0,0,0.1)',*/}
        {/*  }}*/}
        {/*/>*/}
      </header>
    </>
  )
}
