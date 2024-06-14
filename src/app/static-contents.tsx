'use client';
import * as React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export const gregOciepkaTestimontial = "Blinkfeed is unreal. As someone who sends 50+ emails daily, I've tried numerous email " +
  'clients for productivity. Many use AI, but Blinkfeed, built entirely around AI, offers a ' +
  "unique user experience unlike anything I've seen before.";

export const featuredTestimonial = {
  body: gregOciepkaTestimontial,
  author: {
    name: 'Greg Ociepka',
    handle: 'gregociepka',
    imageUrl: '/photo/greg-ociepka.jpg',
    logoUrl: '/logo/simteract.svg',
  },
};

export const testimonials = [
  [
    [
      {
        body: 'I’m blown away by the summaries from @blinkfeed_ai! They’re so detailed and always get the whole thread context right. Nothing else comes close.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Using @blinkfeed_ai feels like flying through emails. The UI is so well designed, it makes handling emails faster than I ever thought possible.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander2',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'The auto-generated replies from @blinkfeed_ai are amazing. They’re always on point and feel like I wrote them myself, not just random text.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander3',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'I love how @blinkfeed_ai flags urgent messages for me. I can focus on what’s important and tackle the rest in the evening without distractions.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'The semantic spam filter from @blinkfeed_ai is a lifesaver. It’s so much better than Gmail’s, catching all the junk and letting the important stuff through.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton2',
          imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Got early access to @blinkfeed_ai’s automations and wow, even if it’s a bit glitchy, it’s a total game changer for my workflow.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook2',
          imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'As a power user, @blinkfeed_ai’s all-keyboard workflow is a dream. I thought Superhuman was good, but this takes it to another level!',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'I’m really looking forward to the calendar and files integration in @blinkfeed_ai. If it’s anything like the rest of the features, it’s going to be a huge help.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner2',
          imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Sure, @blinkfeed_ai is a bit pricey, but the time it’s saved me has paid for itself many times over. Totally worth it!',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner3',
          imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
];

export const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

export const features = [
  {
    name: 'Whole thread summaries.',
    description: 'Quickly grasp action points and unresolved questions. No need to sift through long threads.',
    icon: CloudArrowUpIcon,
    img: '/icon/ai-summary.svg',
  },
  {
    name: 'Respond with a click.',
    description: "Proposed answers base on your calendar and knowledge base, like your business metrics. If any info is missing, you'll be prompted to fill it in.",
    icon: ArrowPathIcon,
    img: '/icon/select-response.svg',
  },
  {
    name: 'Write entire emails with just a few words.',
    description: 'AI crafts them into polished emails that mirror your unique voice and tone, learned from your previous messages.',
    icon: LockClosedIcon,
    img: '/icon/ai-write.svg',
  },
];

export const features2 = [
  {
    name: 'Focus on what needs your attention.',
    description: 'AI automatically triages incoming email. Urgent messages appear at the top even when your inbox is overflowing.',
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
    description: 'With an advanced understanding of your emails, AI robustly eliminates spam, scams, and unwanted promotions.',
    icon: CloudArrowUpIcon,
    img: '/icon/ai-security.svg',
  },
];

export const featuresAutomations = [
  {
    name: 'Automate the boring stuff.',
    description: 'Sending follow-ups, responding to repetitive questions, and organizing emails are easy to automate. Just do it.',
    icon: CloudArrowUpIcon,
    img: '/icon/automate-everything.svg',
  },
  {
    name: 'Review before send.',
    description: "Accidental messages? Not on our watch. Inspect and approve all of the automation's actions before they're set in motion.",
    icon: ArrowPathIcon,
    img: '/icon/check-before-run.svg',
  },
  {
    name: 'Monitor automations history.',
    description: 'Stay in the know by browsing detailed logs of your automations, unraveling the what and why behind each action.',
    icon: LockClosedIcon,
    img: '/icon/monitor-automations.svg',
  },
];

export const featuresPowerUsers = [
  {
    name: 'Use Markdown to edit your messages.',
    description: 'Speed matters. Markdown lets you format messages as you type, with quick shortcuts for bold text, bullet lists, headers, and more. Effortless formatting for the fast-paced.',
    icon: LockClosedIcon,
    img: '/icon/markdown.svg',
    ready: true,
  },
  {
    name: 'Extend Blinkfeed with plugins.',
    description: "Extend Blinkfeed with plugins to mix, match, and customize your way. It's open and flexible, so you can tweak it to fit your groove.",
    icon: CloudArrowUpIcon,
    img: '/icon/plugin.svg',
    ready: true,
  },
  {
    name: 'Keyboard-centric navigation.',
    description: 'Keyboard-centric navigation lets you reply, switch threads, and manage emails swiftly with minimal keystrokes, boosting productivity.',
    icon: ArrowPathIcon,
    img: '/icon/keyboard-centric.svg',
    ready: true,
  },
  {
    name: 'Track when people open your emails or links.',
    description: 'Gain insights for precise follow-ups, closing deals, and boosting team efficiency.',
    icon: LockClosedIcon,
    img: '/icon/eye.svg',
    ready: false,
  },
];

export const tiers = [
  {
    name: 'For developers',
    id: 'tier-developers',
    href: '#',
    price: { monthly: '$0', annually: '$0' },
    timeSpan: '/forever',
    description: 'Implement a plugin, free or paid. Enjoy Blinkfeed for free.',
    features: [{ available: true, label: 'Analyze up to 1000 email threads / month' }],
    featuresComingSoon: [
      { available: true, label: 'Integrations (calendar, etc.)' },
      { available: true, label: 'Automations' },
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: 'For everyone',
    id: 'tier-everyone',
    href: '#',
    price: { monthly: '$30', annually: '$25' },
    timeSpan: '/month',
    description: 'For individuals who manage a moderate volume of emails.',
    features: [{ available: true, label: 'Analyze up to 1000 email threads / month' }],
    featuresComingSoon: [
      { available: true, label: 'Integrations (calendar, etc.)' },
      { available: false, label: 'Automations' },
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: 'For power communicators',
    id: 'tier-power-communicators',
    href: '#',
    price: { monthly: '$50', annually: '$40' },
    timeSpan: '/month',
    description: 'For professionals handling high-volume correspondence.',
    features: [{ available: true, label: 'Analyze up to 3000 email threads / month' }],
    featuresComingSoon: [
      { available: true, label: 'Integrations (calendar, etc.)' },
      { available: true, label: 'Automations' },
    ],
    mostPopular: false,
    featured: true,
  },
];

export const faqs = [
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
    answer: 'Blinkfeed is compatible with Windows, macOS, and Linux. We are planning to release mobile versions later this year.',
  },
  {
    question: 'Are there any current limitations I should be aware of with Blinkfeed?',
    answer: 'As Blinkfeed is in its private beta phase, you may encounter occasional minor issues. We are dedicated to providing prompt support and aim for same-day resolution whenever possible. If you experience any problems, our team will work with you to resolve them quickly.',
  },
  {
    question: 'Is using Blinkfeed safe?',
    answer: 'Yes, Blinkfeed is designed with security as a top priority. All your data, including email cache and Gmail access tokens, remains on your computer. Parts of your emails are sent to OpenAI, which complies with CCPA, CSA STAR, GDPR, SOC2, and SOC3 standards. While Blinkfeed has not yet received official compliance ratings, it adheres to these best practices.',
  },
];
