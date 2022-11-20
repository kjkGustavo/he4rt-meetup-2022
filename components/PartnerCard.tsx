import Image from 'next/image'

export type PartnerCardProps = {
  name: string
  image: string
  to: string
}

const PartnerCard = ({ name, image, to }: PartnerCardProps) => (
  <div className="bg-[#101010] p-14 flex justify-center items-center rounded-sm group">
    <a
      className="relative bg-transparent h-48 w-48 grayscale group-hover:grayscale-0 transition-all delay-100 cursor-pointer"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image}
        layout="fill"
        objectFit="contain"
        alt={`Parceiro ${name}`}
      />
    </a>
  </div>
)

export default PartnerCard
