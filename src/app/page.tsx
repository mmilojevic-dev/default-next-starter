import cx from 'classnames'

export default function Home() {
  return (
    <main>
      <div
        className={cx(
          'flex',
          'items-center',
          'justify-center',
          'bg-primary',
          'text-white'
        )}
      >
        Next App Starter
      </div>
    </main>
  )
}
