import TransitionLink from './TransitionLink'

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900 dark:text-white">
        <TransitionLink href="/" label="PD" />
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/work" label="Work" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  )
}

export default Navigation
