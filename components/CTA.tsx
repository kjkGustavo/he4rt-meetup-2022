import { ReactNode } from 'react'

export type CTAProps = {
  children: ReactNode
  to: string
}

const CTA = ({ children, to }: CTAProps) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#782BF1] hover:scale-110 transition-all delay-100 text-white py-4 px-8 rounded-full uppercase font-bold inline-block"
  >
    {children}
  </a>
)

export default CTA
