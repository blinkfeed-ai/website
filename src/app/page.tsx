'use client'

import * as React from 'react'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon} from '@heroicons/react/24/outline'
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/20/solid'
import {RadioGroup} from '@headlessui/react'
import * as Navigation from '@/app/navigation'
import {Container} from '@/app/Container'
import {Tooltip} from 'react-tooltip'
import * as Button from '@/app/Button'
import Class from 'classnames'
import {Footer} from '@/app/footer'

const gregOciepkaTestimontial =
  "Blinkfeed is unreal. As someone who sends 50+ emails daily, I've tried numerous email " +
  'clients for productivity. Many use AI, but Blinkfeed, built entirely around AI, offers a ' +
  "unique user experience unlike anything I've seen before."

const featuredTestimonial = {
  body: gregOciepkaTestimontial,
  author: {
    name: 'Greg Ociepka',
    handle: 'gregociepka',
    imageUrl: '/photo/greg-ociepka.jpg',
    logoUrl: '/logo/simteract.svg',
  },
}

const testimonials = [
  [
    [
      {
        body: 'I’m blown away by the summaries from @blinkfeed_ai! They’re so detailed and always get the whole thread context right. Nothing else comes close.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Using @blinkfeed_ai feels like flying through emails. The UI is so well designed, it makes handling emails faster than I ever thought possible.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander2',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'The auto-generated replies from @blinkfeed_ai are amazing. They’re always on point and feel like I wrote them myself, not just random text.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander3',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'I love how @blinkfeed_ai flags urgent messages for me. I can focus on what’s important and tackle the rest in the evening without distractions.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'The semantic spam filter from @blinkfeed_ai is a lifesaver. It’s so much better than Gmail’s, catching all the junk and letting the important stuff through.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton2',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: "Writing emails with @blinkfeed_ai is like having a genius assistant. I just type 'Monday?' and it crafts the perfect message. I don’t even have to think about it!",
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Got early access to @blinkfeed_ai’s automations and wow, even if it’s a bit glitchy, it’s a total game changer for my workflow.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook2',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'As a power user, @blinkfeed_ai’s all-keyboard workflow is a dream. I thought Superhuman was good, but this takes it to another level!',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'I’m really looking forward to the calendar and files integration in @blinkfeed_ai. If it’s anything like the rest of the features, it’s going to be a huge help.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner2',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Sure, @blinkfeed_ai is a bit pricey, but the time it’s saved me has paid for itself many times over. Totally worth it!',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner3',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
]

const frequencies = [
  {value: 'monthly', label: 'Monthly', priceSuffix: '/month'},
  {value: 'annually', label: 'Annually', priceSuffix: '/year'},
]

const features = [
  {
    name: 'Whole thread summaries.',
    description:
      'Quickly grasp action points and unresolved questions. No need to sift through long threads.',
    icon: CloudArrowUpIcon,
    img: '/icon/ai-summary.svg',
  },
  {
    name: 'Respond with a click.',
    description:
      "Proposed answers base on your calendar and knowledge base, like your business metrics. If any info is missing, you'll be prompted to fill it in.",
    icon: ArrowPathIcon,
    img: '/icon/select-response.svg',
  },
  {
    name: 'Write entire emails with just a few words.',
    description:
      'AI crafts them into polished emails that mirror your unique voice and tone, learned from your previous messages.',
    icon: LockClosedIcon,
    img: '/icon/ai-write.svg',
  },
]

const features2 = [
  {
    name: 'Focus on what needs your attention.',
    description:
      'AI automatically triages incoming email. Urgent messages appear at the top even when your inbox is overflowing.',
    icon: ArrowPathIcon,
    img: '/icon/important-mails-first.svg',
  },
  {
    name: 'Never miss a follow-up again.',
    description: "If you don't get a reply, AI will remind you to follow up after a few days.",
    icon: LockClosedIcon,
    img: '/icon/snooze.svg',
  },
  {
    name: 'Feel secure with AI spam and scam filters.',
    description:
      'With an advanced understanding of your emails, AI robustly eliminates spam, scams, and unwanted promotions.',
    icon: CloudArrowUpIcon,
    img: '/icon/ai-security.svg',
  },
]

const featuresAutomations = [
  {
    name: 'Automate the boring stuff.',
    description:
      'Sending follow-ups, responding to repetitive questions, and organizing emails are easy to automate. Just do it.',
    icon: CloudArrowUpIcon,
    img: '/icon/automate-everything.svg',
  },
  {
    name: 'Review before send.',
    description:
      "Accidental messages? Not on our watch. Inspect and approve all of the automation's actions before they're set in motion.",
    icon: ArrowPathIcon,
    img: '/icon/check-before-run.svg',
  },
  {
    name: 'Monitor automations history.',
    description:
      'Stay in the know by browsing detailed logs of your automations, unraveling the what and why behind each action.',
    icon: LockClosedIcon,
    img: '/icon/monitor-automations.svg',
  },
]

const featuresPowerUsers = [
  {
    name: 'Use Markdown to edit your messages.',
    description:
      'Speed matters. Markdown lets you format messages as you type, with quick shortcuts for bold text, bullet lists, headers, and more. Effortless formatting for the fast-paced.',
    icon: LockClosedIcon,
    img: '/icon/markdown.svg',
    ready: true,
  },
  {
    name: 'Extend Blinkfeed with plugins.',
    description:
      "Extend Blinkfeed with plugins to mix, match, and customize your way. It's open and flexible, so you can tweak it to fit your groove.",
    icon: CloudArrowUpIcon,
    img: '/icon/plugin.svg',
    ready: true,
  },
  {
    name: 'Keyboard-centric navigation.',
    description:
      'Keyboard-centric navigation lets you reply, switch threads, and manage emails swiftly with minimal keystrokes, boosting productivity.',
    icon: ArrowPathIcon,
    img: '/icon/keyboard-centric.svg',
    ready: true,
  },
  {
    name: 'Track when people open your emails or links.',
    description:
      'Gain insights for precise follow-ups, closing deals, and boosting team efficiency.',
    icon: LockClosedIcon,
    img: '/icon/eye.svg',
    ready: false,
  },
]

const tiers = [
  {
    name: 'For developers',
    id: 'tier-developers',
    href: '#',
    price: {monthly: '$0', annually: '$0'},
    timeSpan: '/forever',
    description: 'Implement a plugin, free or paid. Enjoy Blinkfeed for free.',
    features: [{available: true, label: 'Analyze up to 1000 email threads / month'}],
    featuresComingSoon: [
      {available: true, label: 'Integrations (calendar, etc.)'},
      {available: true, label: 'Automations'},
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: 'For everyone',
    id: 'tier-everyone',
    href: '#',
    price: {monthly: '$30', annually: '$25'},
    timeSpan: '/month',
    description: 'For individuals who manage a moderate volume of emails.',
    features: [{available: true, label: 'Analyze up to 1000 email threads / month'}],
    featuresComingSoon: [
      {available: true, label: 'Integrations (calendar, etc.)'},
      {available: false, label: 'Automations'},
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: 'For power communicators',
    id: 'tier-power-communicators',
    href: '#',
    price: {monthly: '$50', annually: '$40'},
    timeSpan: '/month',
    description: 'For professionals handling high-volume correspondence.',
    features: [{available: true, label: 'Analyze up to 3000 email threads / month'}],
    featuresComingSoon: [
      {available: true, label: 'Integrations (calendar, etc.)'},
      {available: true, label: 'Automations'},
    ],
    mostPopular: false,
    featured: true,
  },
]

const faqs = [
  {
    question: 'Which email providers are compatible with Blinkfeed?',
    answer: (
      <p>
        Currently, Blinkfeed supports Gmail. We are actively working on integrating Outlook and plan
        to support additional providers soon. Please visit our{' '}
        <a href='https://google.com'>Feature Request</a> page to vote for the next integration you
        need.
      </p>
    ),
  },
  {
    question: 'Which systems does Blinkfeed work on?',
    answer:
      'Blinkfeed is compatible with Windows, macOS, and Linux. We are planning to release mobile versions later this year.',
  },
  {
    question: 'Are there any current limitations I should be aware of with Blinkfeed?',
    answer:
      'As Blinkfeed is in its private beta phase, you may encounter occasional minor issues. We are dedicated to providing prompt support and aim for same-day resolution whenever possible. If you experience any problems, our team will work with you to resolve them quickly.',
  },
  {
    question: 'Is using Blinkfeed safe?',
    answer:
      'Yes, Blinkfeed is designed with security as a top priority. All your data, including email cache and Gmail access tokens, remains on your computer. Parts of your emails are sent to OpenAI, which complies with CCPA, CSA STAR, GDPR, SOC2, and SOC3 standards. While Blinkfeed has not yet received official compliance ratings, it adheres to these best practices.',
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Section({children, id}: {children: React.ReactNode; id?: string}) {
  const minTopOffset = 32
  const ref = React.useRef<HTMLDivElement>(null)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const screenRef = React.useRef<HTMLDivElement>(null)
  const [anchorOffset, setAnchorOffset] = useState(-Navigation.HEIGHT - minTopOffset)

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const viewHeight = window.innerHeight - Navigation.HEIGHT
        const freeSpace = Math.max(0, viewHeight - ref.current.clientHeight)
        const topOffset = Math.max(minTopOffset, freeSpace / 2)
        setAnchorOffset(-topOffset - Navigation.HEIGHT)
      }
    })
    if (ref.current && screenRef.current) {
      observer.observe(ref.current)
      observer.observe(screenRef.current)
    }
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className='section relative my-24 md:my-32 lg:my-64'>
      <div ref={screenRef} className='absolute left-0 top-0 w-0 h-screen pointer-events-none' />
      <div
        ref={anchorRef}
        id={id}
        className='anchor absolute left-0 w-0 h-0'
        style={{top: `${anchorOffset}px`}}
      />
      {children}
    </div>
  )
}

function SectionT({children}: {children: React.ReactNode}) {
  return <div className='mt-6 md:mt-12 lg:mt-16'>{children}</div>
}

function ServiceIcon(props: {src: string; alt: string; comingSoon: boolean}) {
  const cls = props.comingSoon
    ? 'absolute opacity-0 hover:opacity-100 transition duration-300 z-10'
    : ''
  const ImgMono = () =>
    props.comingSoon ? (
      <Image
        width={32}
        height={32}
        src={`${props.src}-mono.svg`}
        alt={props.alt}
        style={{opacity: 0.2}}
        className='pointer-events-none'
      />
    ) : null
  return (
    <div
      data-tooltip-id={props.comingSoon ? 'tooltip' : undefined}
      data-tooltip-content='Coming soon'
      style={{height: '32px'}}
      className='flex items-center'
    >
      <Image width={32} height={32} src={`${props.src}.svg`} alt={props.alt} className={cls} />
      <ImgMono />
    </div>
  )
}

function Feeds() {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center gap-6 rounded-full pl-4 pr-2 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10'>
        <span className='hidden md:inline'>All of your feeds in a blink of an eye:</span>
        <ServiceIcon src={'/icon/gmail'} alt='Gmail' comingSoon={false} />
        <ServiceIcon src={'/icon/outlook'} alt='Outlook' comingSoon={true} />
        <ServiceIcon src={'/icon/apple-mail'} alt='Apple Mail' comingSoon={true} />
        <ServiceIcon src={'/icon/instagram'} alt='Instagram' comingSoon={true} />
        <ServiceIcon src={'/icon/whatsapp'} alt='WhatsApp' comingSoon={true} />
        <ServiceIcon src={'/icon/messenger'} alt='Messenger' comingSoon={true} />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <SectionT>
      <Container>
        <div className='mx-auto'>
          <h1 className='font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl'>
            <span>Never read emails again.</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-secondary'>
            Reply to 100 emails in 10 minutes. Schedule meetings and generate replies with AI aware
            of
            <br className='hidden lg:block' />
            <span> your calendar, preferences, and knowledge base.</span>
          </p>
        </div>
      </Container>
      <div className='relative pt-16'>
        <Container wide={true} className='sm:px-6 md:px-12 lg:px-24'>
          <div className='relative'>
            <div className='overflow-hidden hero-video-shadow sm:rounded-2xl sm:border-2 sm:border-white'>
              <video
                autoPlay
                muted
                loop
                playsInline
                className='mt-[-2px] object-cover aspect-[1000/944] lg:aspect-[1084/579] lg:object-contain w-[800px] lg:w-[1084px]'
                style={{
                  objectPosition: 'left 51.5% top 0px',
                }}
              >
                <source src='/video/heroNew1080.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </Container>
      </div>
    </SectionT>
  )
}

function Logos() {
  return (
    <Container className='mt-24'>
      <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
          alt='Transistor'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
          alt='Reform'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
          alt='Tuple'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
          alt='SavvyCal'
          width={158}
          height={48}
        />
        <img
          className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
          src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
          alt='Statamic'
          width={158}
          height={48}
        />
      </div>
      <div className='mt-16 flex justify-center'>
        <p className='relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20'>
          <span className='hidden md:inline'>
            Enso saves up to $10,000 per year, per employee by using Blinkfeed.
          </span>
          <a href='#' className='font-semibold text-accent'>
            <span className='absolute inset-0' aria-hidden='true' /> Read our case study{' '}
            <span aria-hidden='true'>&rarr;</span>
          </a>
        </p>
      </div>
    </Container>
  )
}

function ServiceIcon2(props: {src: string; alt: string; style: React.CSSProperties}) {
  return (
    <div style={{height: '32px', ...props.style}} className='flex items-center absolute'>
      <Image width={32} height={32} src={`${props.src}.svg`} alt={props.alt} />
    </div>
  )
}

function Feeds2() {
  const paths = [
    '/icon/gmail',
    '/icon/outlook',
    '/icon/apple-mail',
    '/icon/instagram',
    '/icon/whatsapp',
    '/icon/messenger',
  ]
  const icons = paths.map((path, i) => {
    const dist = 100
    const x = Math.cos((i / paths.length) * 2 * Math.PI) * dist
    const y = Math.sin((i / paths.length) * 2 * Math.PI) * dist
    return (
      <ServiceIcon2
        key={i}
        src={path}
        alt='Gmail'
        style={{
          transform: `translate(${x}px , ${y}px)`,
        }}
      />
    )
  })
  return (
    <div className='flex justify-center'>
      <div className='flex items-center gap-6 rounded-full pl-4 pr-2 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10'>
        {icons}
      </div>
    </div>
  )
}

interface FeatureCardProps {
  order: 'left' | 'right'
  title: string
  features: {
    name: string
    description: string
    icon: React.ComponentType
    img: string
    timeEnd: number
    comingSoon?: boolean
  }[]
  videoSource: string
  videoMarginTop?: string
}

interface SpinnerProps {
  progress: number
  active: boolean
}

function Spinner({progress, active}: SpinnerProps) {
  const size = 32
  const bgWidth = 3
  const width = 2
  const radius = size / 2 - bgWidth / 2
  const circumference = 2 * Math.PI * radius
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg height={size} width={size} xmlns='http://www.w3.org/2000/svg'>
        <circle
          className='transition duration-500'
          r={size / 2 - width / 2 - (bgWidth - width) / 2}
          cx={size / 2}
          cy={size / 2}
          fill='transparent'
          stroke={active ? 'rgba(0,0,0,0.7)' : 'transparent'}
          transform={`rotate(-90,${size / 2},${size / 2})`}
          strokeLinecap='round'
          strokeWidth={width}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
        />
        <circle
          className='transition duration-500'
          r={size / 2 - bgWidth / 2}
          cx={size / 2}
          cy={size / 2}
          fill='transparent'
          stroke={active && progress > 0 ? 'rgba(0,0,0,0.05)' : 'transparent'}
          strokeWidth={bgWidth}
        />
      </svg>
    </div>
  )
}

function FeatureCard({title, features, videoSource, videoMarginTop}: FeatureCardProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [currentVideoTime, setCurrentVideoTime] = useState(0)

  const rootRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const wasPlayed = React.useRef(false)

  // === Intersection observer ===

  React.useEffect(() => {
    const thresholdIn = 0.5
    const thresholdOut = 0
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const top = entry.boundingClientRect.top
          const bottom = entry.boundingClientRect.bottom
          const ratio = entry.intersectionRatio
          const isVisible =
            ratio > 0 && (wasPlayed.current || bottom < window.innerHeight || top < 0)
          wasPlayed.current = isVisible
          setIsVisible(isVisible)
        })
      },
      {
        threshold: Array(11)
          .fill(0)
          .map((_, i) => i * 0.1),
      },
    )
    if (rootRef.current) observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (videoRef.current) {
      if (isVisible) videoRef.current.play()
      else videoRef.current.pause()
    }
  }, [isVisible])

  // === On frame video progress tracking ===

  const raf = React.useRef<number>()
  const onFrame = () => {
    if (videoRef.current) {
      setCurrentVideoTime(videoRef.current.currentTime)
    }
    requestAnimationFrame()
  }

  const requestAnimationFrame = () => {
    raf.current = window.requestAnimationFrame(onFrame)
  }

  React.useEffect(() => {
    requestAnimationFrame()
    return () => {
      if (raf.current) window.cancelAnimationFrame(raf.current)
    }
  }, [])

  let nextFeatureStartTime = 0
  const description = (
    <div>
      <div className=''>
        <p className='hidden lg:flex text-4xl font-bold tracking-tight'>{title}</p>
        <div className='mt-10 flex flex-col leading-7'>
          {features.map((feature, index) => {
            const style = {} // isSelected ? {boxShadow: '0px 0px 0px 2px var(--color-accent)'} : {}
            const cls = '' //isSelected ? 'hero-video-shadow' : ''
            const icon = (
              <Image
                width={24}
                height={24}
                src={feature.img}
                alt='feature'
                style={{
                  //FIXME
                  opacity: 0.7,
                }}
              />
            )
            const featureStartTime = nextFeatureStartTime
            nextFeatureStartTime = feature.timeEnd
            const featureTime = currentVideoTime - featureStartTime
            const duration = feature.timeEnd - featureStartTime
            const progress = Math.min(1, Math.max(0, featureTime / duration))

            const active = featureTime >= 0 && featureTime <= duration

            const opacity = active ? 1 : 0.3
            return (
              <div
                key={feature.name}
                className={'relative transition duration-500 cursor-pointer ' + cls}
                style={{
                  opacity,
                  paddingTop: '16px',
                  paddingBottom: '16px',
                  ...style,
                }}
                onMouseDown={() => {
                  if (videoRef.current) videoRef.current.currentTime = featureStartTime
                }}
              >
                <div className='flex' style={{gap: '8px'}}>
                  <div>
                    <div className='relative flex-shrink-0'>
                      <div className='absolute w-full h-full flex justify-center items-center'>
                        {icon}
                      </div>
                      <Spinner progress={progress} active={active} />
                    </div>
                  </div>
                  <div
                    className='flex flex-col gap-1'
                    style={{
                      marginTop: '2px',
                    }}
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className='font-semibold'
                        style={
                          {
                            // fontSize: '16px',
                          }
                        }
                      >
                        {feature.name}
                      </div>
                      <div className='flex grow shrink-0 text-tertiary'>
                        {feature.comingSoon && <ComingSoon />}
                      </div>
                    </div>
                    <div className='leading-7 text-secondary'>{feature.description}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const viz = (
    <div className={Class('flex sm:overflow-hidden w-full lg:w-[600px] xl:w-[870px]')}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`object-cover aspect-[1000/944] xl:aspect-[1084/579] xl:object-contain -mt-[${videoMarginTop || '46'}px] xl:-ml-[60px] xl:max-w-none  xl:w-[1080px]`}
        style={{
          objectPosition: 'left 51.5% top 2px',
        }}
      >
        <source src={videoSource} type='video/mp4' />
      </video>
    </div>
  )
  return (
    <Section>
      <Container wide={true} className='sm:px-6 md:px-12 lg:px-24'>
        <div ref={rootRef} className='flex flex-col lg:flex-row-reverse xl:block'>
          <div className='z-10 flex lg:hidden flex relative text-base shrink px-6 sm:px-0 pb-12 md:pb-16'>
            <p className='text-3xl font-bold tracking-tight sm:text-4xl'>{title}</p>
          </div>
          <div className='z-0 hidden xl:flex absolute top-0 left-0 w-full justify-end'>{viz}</div>
          <div className='z-0 xl:hidden flex justify-center md:justify-end overflow-hidden grow lg:self-center'>
            {viz}
          </div>
          <div className='z-10 flex relative text-base shrink md:max-w-2xl lg:max-w-xl px-6 sm:px-0 xl:w-[42%]'>
            {description}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function XFeatures1() {
  const features = [
    {
      name: 'Best-in-class, whole thread summaries',
      description:
        'Blinkfeed analyzes entire email threads, not just the latest messages, to deliver concise summaries that capture all essential information, ensuring you never miss a detail.',
      icon: CloudArrowUpIcon,
      img: '/icon/ai-summary.svg',
      timeEnd: 2,
    },
    {
      name: 'Urgent messages discovery',
      description:
        'Blinkfeed notifies you about urgent messages, so you can respond fast where it matters most.',
      icon: CloudArrowUpIcon,
      img: '/icon/important-mails-first.svg',
      timeEnd: 4,
    },
    {
      name: 'Semantic spam filter',
      description:
        'Blinkfeed hides not just spam caught by your email provider, but also non-spam messages that are not important.',
      icon: ArrowPathIcon,
      img: '/icon/ai-security.svg',
      timeEnd: 6,
    },
  ]
  return (
    <FeatureCard
      title='Understand what people want from you, in a blink.'
      features={features}
      videoSource='/video/feat1.mov'
      videoMarginTop='35'
      order={'left'}
    />
  )
}

function XFeatures2() {
  const features = [
    {
      name: 'Reply with a click',
      description:
        'Each email summary comes with a highly-tailored responses that you can review, edit, or simply send with one click.',
      icon: CloudArrowUpIcon,
      img: '/icon/select-response.svg',
      timeEnd: 2,
    },
    {
      name: 'Write entire emails with just a few words',
      description:
        'Type your thoughts and Blinkfeed will craft a polished email mirroring your voice and tone that you can review, edit, or simply send with one click.',
      icon: CloudArrowUpIcon,
      img: '/icon/ai-write.svg',
      timeEnd: 4,
    },
    {
      name: 'Calendar and files, analyzed',
      description:
        'Blinkfeed analyzes your calendar and documents in your knowledge base to provide curated replies and suggestions.',
      icon: ArrowPathIcon,
      img: '/icon/data-catalog.svg',
      comingSoon: true,
      timeEnd: 6,
    },
  ]
  return <FeatureCard title='Reply within seconds.' features={features} videoSource='/video/feat2.mov'
  order={'right'} />
}

function Features1() {
  return (
    <Section>
      <Container>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div>
            <div className='lg:max-w-lg'>
              <p className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
                Let AI read and write your mails.
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                AI analyzes the entire thread, not just latest messages, ensuring responses that
                truly understand and fit the context.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map(feature => (
                  <div key={feature.name} className='relative pl-12'>
                    <div
                      className='absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent'
                      style={{
                        marginTop: '7px',
                        // FIXME:
                        opacity: 0.8,
                      }}
                    >
                      <Image width={20} height={20} src={feature.img} alt='feature' />
                    </div>
                    <div className='inline font-bold text-accent'>{feature.name}</div>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='self-end'>
            <div className='flex rounded-xl overflow-hidden'>
              <img
                src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                alt='Product screenshot'
                className='w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Features2() {
  return (
    <Section>
      <Container>
        <div>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
              <div className='lg:max-w-lg'>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
                  AI-powered triage and security.
                </p>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Effortlessly prioritize vital emails in a crowded inbox, ensuring you always catch
                  important opportunities without missing a beat.
                </p>
                <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                  {features2.map(feature => (
                    <div key={feature.name} className='relative pl-12'>
                      <div
                        className='absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent'
                        style={{marginTop: '7px'}}
                      >
                        <Image width={20} height={20} src={feature.img} alt='feature' />
                      </div>
                      <div className='inline font-bold text-accent'>{feature.name}</div>{' '}
                      <dd className='inline'>{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className='flex items-start justify-end lg:order-first'>
              <div className='self-end overflow-hidden'>
                <div className='flex rounded-xl overflow-hidden shadow-xl'>
                  <img
                    src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                    alt='Product screenshot'
                    className='w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Automations() {
  return (
    <Section>
      <Container wide={true}>
        <div className='sm:rounded-3xl overflow-hidden py-6 md:py-16 lg:py-24 bg-dark-card'>
          <Container>
            <div className='mx-auto max-w-7xl'>
              <div className='mx-auto max-w-2xl sm:text-center'>
                <div className='flex justify-center text-teriary-inv mb-4'>
                  <ComingSoon big={true} />
                </div>
                <p className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Set up automations in plain English
                </p>
                <div className='mt-4 text-lg leading-8 text-gray-300'>
                  <div className='flex justify-center'>
                    <div className='rounded-2xl bg-accent text-black text-center font-bold text-sm py-2 px-3'>
                      {`"Send a follow-up for my 'collaboration opportunity' emails if no reply in 3 days."`}
                    </div>
                  </div>
                  <div className='mt-4 text-secondary-inv'>
                    Start as simple as this and refine as you go.
                  </div>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden pt-12 md:pt-20'>
              <div className='mx-auto max-w-7xl'>
                <img
                  src='/photo/automations.png'
                  alt='App screenshot'
                  className='mb-[-104px] lg:-mb-[12%] rounded-xl shadow-2xl ring-1 ring-white/5 aspect-[1/1] object-cover lg:aspect-auto '
                  width={2432}
                  height={1442}
                  style={{
                    objectPosition: 'left 74% top 0px',
                  }}
                />
                <div className='relative' aria-hidden='true'>
                  <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-dark-card pt-[7%]' />
                </div>
              </div>
            </div>
            <div className='mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-20'>
              <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                {featuresAutomations.map(feature => (
                  <div key={feature.name} className='relative pl-12'>
                    <div
                      className='absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-inv'
                      style={{marginTop: '7px'}}
                    >
                      <Image width={24} height={24} src={feature.img} alt='feature' />
                    </div>
                    <div className='font-bold text-primary-inv'>{feature.name}</div>{' '}
                    <dd className='text-secondary-inv'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </div>
      </Container>
    </Section>
  )
}

function About() {
  return (
    <Section>
      <Container wide={true} className='sm:px-6 md:px-12 lg:px-24'>
        <div className='sm:rounded-3xl overflow-hidden py-10 sm:py-16 lg:py-24 bg-dark-card'>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-auto px-4 sm:px-0 sm:px-12 md:px-0 md:max-w-xl lg:max-w-2xl'>
              <p
                className='text-3xl font-bold tracking-tight text-white sm:text-4xl'
                style={{
                  lineHeight: '1.4',
                }}
              >
                Blinkfeed is a feed of email summaries, built on top of AI trained for accuracy.
              </p>
              <div className='mt-4 text-lg leading-8 text-gray-300'>
                <figure className='relative'>
                  <blockquote className='text-secondary-inv'>
                    <p>“{gregOciepkaTestimontial}”</p>
                  </blockquote>
                  <figcaption className='mt-8 text-base'>
                    <div className='flex gap-4 items-center'>
                      <img
                        className='h-12 w-12 flex-none rounded-full'
                        src='/photo/greg-ociepka.jpg'
                        alt=''
                      />
                      <div className='flex flex-col gap-2'>
                        <div className='font-semibold text-secondary-inv'>Greg Ociepka</div>
                        <div className='text-secondary-inv opacity-50'>
                          Founder & CTO of Simteract
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function ComingSoon({big}: {big?: boolean}) {
  const padding = big ? '8px' : '5px'
  return (
    <div className='flex text-xs'>
      <div
        className='rounded-full px-2 border border-current text-center'
        style={{
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: big ? '16px' : undefined,
          paddingRight: big ? '16px' : undefined,
        }}
      >
        Coming Soon
      </div>
    </div>
  )
}

function FeaturesForPowerUsers() {
  return (
    <Section>
      <Container>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            We got even more for power users,
            <br />
            just like you.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {featuresPowerUsers.map(feature => (
              <div className='relative' key={feature.name}>
                {!feature.ready && (
                  <div className='sticky lg:absolute' style={{top: '-32px'}}>
                    <div className='pl-12 pb-2 text-tertiary'>
                      <ComingSoon />
                    </div>
                  </div>
                )}
                <div className='relative pl-12'>
                  <div
                    className='absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent'
                    style={{marginTop: '7px'}}
                  >
                    <Image width={24} height={24} src={feature.img} alt='feature' />
                  </div>

                  <div className='text-base font-semibold leading-7'>{feature.name}</div>
                  <dd className='text-base leading-7 text-secondary'>{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  )
}

function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[1])

  return (
    <Section id='pricing'>
      <Container>
        <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
          <p className='mt-2 text-4xl font-bold tracking-tight lg:text-5xl'>
            Save up to 90% of your email time.
          </p>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary'>
          {'Spend it on more important things.'}
        </p>

        <div className='mt-8 lg:mt-16'>
          <div className='flex justify-center'>
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className='grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 mb-4 lg:mb-0'
            >
              <RadioGroup.Label className='sr-only'>Payment frequency</RadioGroup.Label>
              {frequencies.map(option => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({checked}) =>
                    classNames(
                      checked ? 'bg-primary text-white' : 'text-secondary',
                      'cursor-pointer rounded-full px-2.5 py-1',
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className='mx-auto grid max-w-lg grid-cols-1 items-center gap-y-0 lg:max-w-4xl lg:grid-cols-3 mb-44'>
            {tiers.map((tier, tierIdx) => {
              return (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'relative bg-dark-card shadow-2xl lg:h-featured'
                      : 'bg-white sm:mx-8 lg:mx-0 lg:h-tier',
                    tier.featured
                      ? 'rounded-3xl rounded-t-none sm:rounded-t-3xl'
                      : tierIdx === 0
                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                        : '',
                    'relative flex justify-center p-8 ring-1 ring-pricing-card-border sm:p-10 h-auto',
                  )}
                >
                  <div
                    className={Class(
                      'flex flex-col justify-between',
                      tier.featured && `lg:m-featured`,
                    )}
                  >
                    <div>
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.featured ? 'text-primary-inv' : '',
                          'text-base font-semibold leading-7',
                        )}
                        style={{fontSize: '17px'}}
                      >
                        {tier.name}
                      </h3>
                      <p className='mt-4 flex items-baseline gap-x-2'>
                        <span
                          className={classNames(
                            tier.featured ? 'text-primary-inv' : '',
                            'text-5xl font-bold tracking-tight',
                          )}
                        >
                          {
                            // @ts-expect-error
                            tier.price[frequency.value]
                          }
                        </span>
                        <span
                          className={classNames(
                            tier.featured ? 'text-primary-inv' : '',
                            'text-base',
                          )}
                        >
                          {tier.timeSpan}
                        </span>
                      </p>
                      <p
                        className={classNames(
                          tier.featured ? 'text-secondary-inv' : 'text-secondary',
                          'mt-6 text-base leading-7',
                        )}
                      >
                        {tier.description}
                      </p>
                    </div>
                    <div className='pt-6 lg:pt-0'>
                      <ul
                        role='list'
                        className={classNames(
                          tier.featured ? 'text-primary-inv' : '',
                          'space-y-3 text-sm leading-6',
                        )}
                      >
                        {tier.features.map(feature => (
                          <li key={feature.label} className='flex gap-x-2'>
                            {feature.available ? (
                              <>
                                <CheckCircleIcon
                                  className={
                                    'h-6 w-5 flex-none ' +
                                    (tier.featured ? 'text-accent' : 'text-accent')
                                  }
                                  aria-hidden='true'
                                />
                                <div>{feature.label}</div>
                              </>
                            ) : (
                              <>
                                <XCircleIcon
                                  className='text-gray-300 h-6 w-5 flex-none'
                                  aria-hidden='true'
                                />
                                <div style={{opacity: 0.5}}>{feature.label}</div>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>

                      <div
                        className={classNames(
                          'text-sm mt-8',
                          tier.featured ? 'text-primary-inv' : '',
                        )}
                      >
                        Coming soon:
                      </div>
                      <ul
                        role='list'
                        className={classNames(
                          tier.featured ? 'text-primary-inv' : '',
                          'space-y-3 text-sm leading-6 mt-4',
                        )}
                      >
                        {tier.featuresComingSoon.map(feature => (
                          <li key={feature.label} className='flex gap-x-2'>
                            {feature.available ? (
                              <>
                                <CheckCircleIcon
                                  className={
                                    'h-6 w-5 flex-none ' +
                                    (tier.featured ? 'text-accent' : 'text-accent')
                                  }
                                  aria-hidden='true'
                                />
                                <div>{feature.label}</div>
                              </>
                            ) : (
                              <>
                                <XCircleIcon
                                  className='text-gray-300 h-6 w-5 flex-none'
                                  aria-hidden='true'
                                />
                                <div style={{opacity: 0.5}}>{feature.label}</div>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className='mt-8 sm:mt-10'>
                        {tierIdx === 0 ? (
                          <Button.SubmitPluginIdea display='outlined' style={{marginTop: '72px'}} />
                        ) : (
                          <Button.SignUpWithDiscount
                            display={tier.featured ? 'filled' : 'outlined'}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Testimontials() {
  const backgroundColor = 'rgba(0,10,0,0.02)'
  return (
    <Section>
      <Container>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto max-w-xl text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
              They switched
              <br />
              and are not looking back.
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4'>
            <figure
              className='rounded-2xl sm:col-span-2 xl:col-start-2 xl:row-end-1'
              style={{backgroundColor}}
            >
              <blockquote className='p-6 text-lg font-bold leading-6 tracking-tight sm:p-12 sm:text-lg sm:leading-7'>
                <p>{`${featuredTestimonial.body}`}</p>
              </blockquote>
              <figcaption className='flex flex-wrap items-center gap-x-4 gap-y-4 border-t-2 border-white px-12 py-4 sm:flex-nowrap'>
                <img
                  className='h-10 w-10 flex-none rounded-full bg-gray-50'
                  src={featuredTestimonial.author.imageUrl}
                  alt=''
                />
                <div className='flex-auto leading-5'>
                  <div className='font-semibold'>{featuredTestimonial.author.name}</div>
                  <div className='text-secondary'>{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img
                  className='w-auto flex-none opacity-80'
                  style={{height: '27px'}}
                  src={featuredTestimonial.author.logoUrl}
                  alt=''
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className='space-y-8 xl:contents xl:space-y-0'>
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === 1 && columnIdx === 1)
                        ? 'xl:pt-16'
                        : '',
                    )}
                  >
                    {column.map(testimonial => (
                      <figure
                        key={testimonial.author.handle}
                        className='rounded-2xl bg-white p-6'
                        style={{backgroundColor}}
                      >
                        <blockquote className='leading-5'>
                          <p>{`${testimonial.body}`}</p>
                        </blockquote>
                        <figcaption className='mt-6 flex items-center gap-x-4'>
                          <img
                            className='h-10 w-10 rounded-full bg-gray-50'
                            src={testimonial.author.imageUrl}
                            alt=''
                          />
                          <div className='leading-5'>
                            <div className='font-semibold'>{testimonial.author.name}</div>
                            <div className='text-secondary'>{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function FAQ() {
  return (
    <Section>
      <Container>
        <div className='divide-y divide-gray-900/10 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
            {faqs.map((faq, ix) => (
              <div key={ix} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
                <dt className='text-base font-semibold leading-7 lg:col-span-5'>{faq.question}</dt>
                <dd className='mt-4 lg:col-span-7 lg:mt-0'>
                  <div className='text-base leading-7'>{faq.answer}</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  )
}

function Example() {
  const sectionsMargin = 'my-80'

  return (
    <div className='w-full'>
      <Navigation.Navigation />
      <main>
        <Hero />
        <About />
        <XFeatures1 />
        <XFeatures2 />
        <Automations />
        <FeaturesForPowerUsers />
        <Pricing />
        <Testimontials />
      </main>

      <FAQ />
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between bg-page'>
      <Tooltip id='tooltip' className='tooltip' classNameArrow='arrow' style={{fontSize: '12px'}} />
      <Example />
    </main>
  )
}
