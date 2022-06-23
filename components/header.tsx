import Link from 'next/link'

const Header = () => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">てう速5センチメートル</a>
      </Link>
    </h1>
  )
}

export default Header
