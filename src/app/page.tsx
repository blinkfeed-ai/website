"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CheckIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander2",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander3",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton2",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook2",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner2",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner3",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Frequently Asked Questions", href: "#" },
];
const features = [
  {
    name: "Read summaries, skip long threads.",
    description:
      "Each email comes with an instantly updated summary. Expand for details, but often, that's all you need.",
    icon: CloudArrowUpIcon,
    img: "/icon/ai-summary.svg",
  },
  {
    name: "Choose responses based on your schedule and knowledge base.",
    description:
      "AI fetches time slots from calendars and key info from your knowledge base. Missing something? You'll be prompted.",
    icon: ArrowPathIcon,
    img: "/icon/select-response.svg",
  },
  {
    name: "Turn your unstructured thoughts into polished messages.",
    description:
      "Just note down phrases and Mail AI crafts full emails in your style, using your past tone and voice.",
    icon: LockClosedIcon,
    img: "/icon/ai-write.svg",
  },
];

const features2 = [
  {
    name: "Feel secure with AI spam and scam filters.",
    description:
      "AI Email analyzes entire threads, filtering out spam, scams, and promotions more effectively than ever.",
    icon: CloudArrowUpIcon,
    img: "/icon/ai-security.svg",
  },
  {
    name: "Respond fast when it's important.",
    description:
      "Mail AI automatically triages incoming email, ensuring urgent messages appear at the top even when your inbox is overflowing.",
    icon: ArrowPathIcon,
    img: "/icon/important-mails-first.svg",
  },
  {
    name: "Never miss a follow-up again.",
    description:
      "If you don't get a reply, AI will remind you to follow up on relevant topics after a few days.",
    icon: LockClosedIcon,
    img: "/icon/snooze.svg",
  },
];

const featuresAutomations = [
  {
    name: "Automate everything.",
    description:
      "From sending emails and creating labels to checking availability and utilizing external APIs, the possibilities are growing every day.",
    icon: CloudArrowUpIcon,
    img: "/icon/automate-everything.svg",
  },
  {
    name: "Inspect before you act.",
    description:
      "Accidental messages? Not on our watch. You have the power to inspect and approve all of the automation's actions before they're set in motion.",
    icon: ArrowPathIcon,
    img: "/icon/check-before-run.svg",
  },
  {
    name: "Monitor automations history.",
    description:
      "Stay in the know by browsing detailed logs of your automations, unraveling the what and why behind each action.",
    icon: LockClosedIcon,
    img: "/icon/monitor-automations.svg",
  },
];

const featuresPowerUsers = [
  {
    name: "Use Markdown to edit your messages.",
    description:
      "Speed matters. Markdown lets you format messages as you type, with quick shortcuts for bold text, bullet lists, headers, and more. Effortless formatting for the fast-paced.",
    icon: LockClosedIcon,
    img: "/icon/markdown.svg",
  },
  {
    name: "Extend AI Mail with plugins.",
    description:
      "Extend AI Mail with plugins to mix, match, and customize your way. It's open and flexible, so you can tweak it to fit your groove.",
    icon: CloudArrowUpIcon,
    img: "/icon/plugin.svg",
  },
  {
    name: "Track when people read your email or follow your links.",
    description:
      "Gain insights for precise follow-ups, closing deals, and boosting team efficiency.",
    icon: LockClosedIcon,
    img: "/icon/eye.svg",
  },
  {
    name: "Keyboard-centric navigation.",
    description:
      "Keyboard-centric navigation lets you reply, switch threads, and manage emails swiftly with minimal keystrokes, boosting productivity.",
    icon: ArrowPathIcon,
    img: "/icon/keyboard-centric.svg",
  },
];
const tiers = [
  {
    name: "For developers",
    id: "tier-developers",
    href: "#",
    price: { monthly: "$0", annually: "$0" },
    timeSpan: "/forever",
    description:
      "Submit your plugin idea, free or paid. Once approved, enjoy AI Email for free, forever.",
    features: [
      { available: true, label: "Analyze up to 1000 mails/month" },
      { available: true, label: "Automations" },
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: "For everyone",
    id: "tier-everyone",
    href: "#",
    price: { monthly: "$30", annually: "$25" },
    timeSpan: "/month",
    description: "For individuals who manage a moderate volume of emails.",
    features: [
      { available: true, label: "Analyze up to 1000 mails/month" },
      { available: false, label: "Automations" },
    ],
    mostPopular: true,
    featured: false,
  },
  {
    name: "For power communicators",
    id: "tier-power-communicators",
    href: "#",
    price: { monthly: "$50", annually: "$45" },
    timeSpan: "/month",
    description: "For professionals handling high-volume correspondence.",
    features: [
      { available: true, label: "Analyze 3000+ mails/month" },
      { available: true, label: "Automations" },
      { available: true, label: "Priority support" },
    ],
    mostPopular: false,
    featured: true,
  },
];
const faqs = [
  {
    id: 1,
    question: "Which email providers are compatible with AI Email?",
    answer:
      "At the moment, AI Email seamlessly integrates with GMail. We're excited to announce that integration with Outlook is in the pipeline and will be available soon.",
  },
  {
    id: 2,
    question:
      "Are there any current limitations I should be aware of with AI Email?",
    answer:
      "As AI Email is currently in its public beta phase, occasional, minor issues may arise. We're committed to providing prompt and efficient support. Should you encounter any problem, our team will collaborate with you to ensure a swift resolution, aiming for the same day resolution whenever possible.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Hosting", href: "#" },
    { name: "Data Services", href: "#" },
    { name: "Uptime Monitoring", href: "#" },
    { name: "Enterprise Services", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [frequency, setFrequency] = useState(frequencies[0]);
  const sectionsMargin = "my-80";

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto max-w-7xl px-6 flex items-center p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex absolute">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-12 w-auto" src="/icon/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="w-full hidden lg:flex lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  AI-first email client and email automation.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Read and reply to 100 emails in 10 minutes. Schedule meetings
                  and answer complex questions with AI aware of your calendar,
                  preferences, and knowledge base.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Download for macOS
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Other platforms <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <img
                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                    alt="App screenshot"
                    className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                    width={2432}
                    height={1442}
                  />
                  <div className="relative" aria-hidden="true">
                    <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Enso saves up to $10,000 per year, per employee by using AI
                Email.
              </span>
              <a href="#" className="font-semibold text-accent">
                <span className="absolute inset-0" aria-hidden="true" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        {/* Features */}

        <div className={"overflow-hidden bg-white " + sectionsMargin}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Let AI read and write your mails.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Mail AI analyzes the entire thread, not just the latest
                    messages, ensuring responses and summaries that truly
                    understand and fit the context.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-12">
                        <div
                          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent"
                          style={{ marginTop: "7px" }}
                        >
                          <Image width={20} height={20} src={feature.img} />
                        </div>
                        <div className="inline font-bold text-accent">
                          {feature.name}
                        </div>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="self-end">
                <div className="flex rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="Product screenshot"
                    className="w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}

        <div className={"overflow-hidden bg-white " + sectionsMargin}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    AI-powered classification and security.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features2.map((feature) => (
                      <div key={feature.name} className="relative pl-12">
                        <div
                          className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent"
                          style={{ marginTop: "7px" }}
                        >
                          <Image width={20} height={20} src={feature.img} />
                        </div>
                        <div className="inline font-bold text-accent">
                          {feature.name}
                        </div>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <div className="self-end overflow-hidden">
                  <div className="flex rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                      alt="Product screenshot"
                      className="w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                      width={2432}
                      height={1442}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automations */}

        <div className={sectionsMargin}>
          <div className="bg-gray-900 rounded-3xl overflow-hidden py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Set up automations in plain English
                </p>
                <div className="mt-6 text-lg leading-8 text-gray-300">
                  <div className="flex justify-center">
                    <div className="rounded-2xl bg-accent text-black font-bold text-sm py-2 px-3">
                      {`"Send a follow-up for my 'collaboration opportunity' emails if no reply in 3 days."`}
                    </div>
                  </div>
                  <div className="mt-1">
                    Start as simple as this and refine as you go.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="App screenshot"
                  className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                  width={2432}
                  height={1442}
                />
                <div className="relative" aria-hidden="true">
                  <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {featuresAutomations.map((feature) => (
                  <div key={feature.name} className="relative pl-12">
                    <div
                      className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-white"
                      style={{ marginTop: "7px" }}
                    >
                      <Image width={20} height={20} src={feature.img} />
                    </div>
                    <div className="inline font-bold text-white">
                      {feature.name}
                    </div>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Feature section */}

        <div className={"mx-auto max-w-7xl px-6 lg:px-8 " + sectionsMargin}>
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We got even more for power users,
              <br />
              just like you.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {featuresPowerUsers.map((feature) => (
                <div key={feature.name} className="relative pl-12">
                  <div
                    className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-accent"
                    style={{ marginTop: "7px" }}
                  >
                    <Image width={20} height={20} src={feature.img} />
                  </div>
                  <div className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </div>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pricing section */}
        <div
          className={"relative isolate bg-white px-6 lg:px-8 " + sectionsMargin}
        >
          <div
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Save up to 90% of your email time.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            {"Spend it on more important things."}
          </p>

          <div className="mt-16 sm:mt-20">
            <div className="mt-16 flex justify-center">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
              >
                <RadioGroup.Label className="sr-only">
                  Payment frequency
                </RadioGroup.Label>
                {frequencies.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked ? "bg-accent text-white" : "text-gray-500",
                        "cursor-pointer rounded-full px-2.5 py-1"
                      )
                    }
                  >
                    <span>{option.label}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
            <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6  sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3 mb-44">
              {tiers.map((tier, tierIdx) => {
                const featuredTierHDiff = 50;
                const tierH = 500;
                return (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? "relative bg-gray-900 shadow-2xl"
                        : "bg-white/60 sm:mx-8 lg:mx-0",
                      tier.featured
                        ? "rounded-3xl "
                        : tierIdx === 0
                        ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                        : "",
                      tier.featured
                        ? `h-[${tierH + featuredTierHDiff}px]`
                        : `h-[${tierH}px]`,
                      "relative flex p-8 ring-1 ring-gray-900/10 sm:p-10"
                    )}
                  >
                    <div
                      className="flex flex-col justify-between"
                      style={{
                        marginTop: tier.featured
                          ? `${featuredTierHDiff / 2}px`
                          : 0,
                        marginBottom: tier.featured
                          ? `${featuredTierHDiff / 2}px`
                          : 0,
                      }}
                    >
                      <div>
                        <h3
                          id={tier.id}
                          className={classNames(
                            tier.featured ? "text-accent" : "text-accent",
                            "text-base font-semibold leading-7"
                          )}
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                          <span
                            className={classNames(
                              tier.featured ? "text-white" : "text-gray-900",
                              "text-5xl font-bold tracking-tight"
                            )}
                          >
                            {
                              // @ts-expect-error
                              tier.price[frequency.value]
                            }
                          </span>
                          <span
                            className={classNames(
                              tier.featured ? "text-gray-400" : "text-gray-500",
                              "text-base"
                            )}
                          >
                            {tier.timeSpan}
                          </span>
                        </p>
                        <p
                          className={classNames(
                            tier.featured ? "text-gray-300" : "text-gray-600",
                            "mt-6 text-base leading-7"
                          )}
                        >
                          {tier.description}
                        </p>
                      </div>
                      <div>
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured ? "text-gray-300" : "text-gray-600",
                            "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                          )}
                        >
                          {tier.features.map((feature) => (
                            <li key={feature.label} className="flex gap-x-2">
                              {feature.available ? (
                                <>
                                  <CheckCircleIcon
                                    className="text-accent h-6 w-5 flex-none"
                                    aria-hidden="true"
                                  />
                                  <div>{feature.label}</div>
                                </>
                              ) : (
                                <>
                                  <XCircleIcon
                                    className="text-gray-300 h-6 w-5 flex-none"
                                    aria-hidden="true"
                                  />
                                  <div style={{ opacity: 0.5 }}>
                                    {feature.label}
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={tier.href}
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? "bg-accent text-white shadow-sm hover:bg-accent focus-visible:outline-accent"
                              : "text-accent ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-accent",
                            "mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                          )}
                        >
                          {tierIdx === 0
                            ? "Submit your idea"
                            : "Download for macOS"}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimontials */}

        <div className={"relative isolate bg-white pb-32 " + sectionsMargin}>
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                They switched
                <br />
                and are not looking back.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                  </div>
                  <img
                    className="h-10 w-auto flex-none"
                    src={featuredTestimonial.author.logoUrl}
                    alt=""
                  />
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className="space-y-8 xl:contents xl:space-y-0"
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? "xl:row-span-2"
                          : "xl:row-start-1",
                        "space-y-8"
                      )}
                    >
                      {column.map((testimonial) => (
                        <figure
                          key={testimonial.author.handle}
                          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                        >
                          <blockquote className="text-gray-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-50"
                              src={testimonial.author.imageUrl}
                              alt=""
                            />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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
        </div>

        {/* CTA section */}

        <div className={"relative -z-10 px-6 lg:px-8 " + sectionsMargin}>
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let your email work for you,
              <br />
              not the other way around.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {"Help us build the next email experience, let's do it together."}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Download for macOS
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Other platforms <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </main>

      {/* FAQs */}
      <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <Example />
    </main>
  );
}
