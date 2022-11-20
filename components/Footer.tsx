import Image from 'next/image'
import CommunitySponsor from './CommunitySponsor'

const Footer = () => (
  <footer>
    <CommunitySponsor />
    <div
      style={{
        backgroundColor: 'rgb(120, 43, 241)',
        backgroundImage: 'url(elements.svg)',
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between py-16 pt-36">
        <a href="#" className="mb-4">
          <Image src="/logo.svg" alt="asdasd" width={245} height={43} />
        </a>
        <p className="text-white text-lg">
          Desenvolvido por{' '}
          <a
            href="https://gustavolima.dev"
            className="text-[#181818] font-bold"
          >
            Gustavo Lima
          </a>{' '}
          com design de{' '}
          <a
            href="https://twitter.com/nexturhe4rt"
            className="text-[#181818] font-bold"
          >
            Gabriel Vieira
          </a>{' '}
          e{' '}
          <a
            href="https://dribbble.com/rebeccagonzalez"
            className="text-[#181818] font-bold"
          >
            Rebecca Gonzalez
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
