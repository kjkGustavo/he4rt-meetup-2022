import Head from 'next/head'
import Image from 'next/image'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import PartnerCard, { PartnerCardProps } from '../components/PartnerCard'
import SpreakerCard, { SpeakerCardProps } from '../components/SpeakerCard'
import TimelineItem, { TimelineItemProps } from '../components/TimelineItem'
import Wedo, { WedoProps } from '../components/Wedo'

const presencialWedo: WedoProps[] = [
  {
    name: 'Networking',
    description:
      'Faça networking com todos os membros da nossa comunidade e crie relações profissionais!'
  },
  {
    name: 'Brindes',
    description:
      'Teremos brindes exclusivos para todos os membros presente no evento! Já temos alguns brindes separados. 👀'
  },
  {
    name: 'Coffebreak',
    description:
      'Nosso evento terá bebidas, comidinhas e muito mais para todos os membros usufruir 🍔'
  },
  {
    name: 'Conteúdos exclusivos',
    description:
      'Uma grande variedade de palestrantes com uma diversidade de conteúdos para todos os níveis e tecnologias!'
  }
]

const speakers: SpeakerCardProps[] = [
  {
    name: 'Monica Craveiro',
    role: 'Backend Developer',
    avatar: '/speakers/monica.png',
    twitterUrl: 'https://twitter.com/mocraveirodev',
    githubUrl: 'https://github.com/mocraveirodev',
    linkedinUrl: 'https://www.linkedin.com/in/mocraveirodev'
  },
  {
    name: 'Rafael Neris',
    role: 'Tech Manager',
    avatar: '/speakers/rafael.png',
    twitterUrl: 'https://twitter.com/rafaelnerisdev',
    githubUrl: 'https://github.com/rafael-neris',
    linkedinUrl: 'https://www.linkedin.com/in/rafaelnerisdev/'
  },
  {
    name: 'EduardoRFS',
    role: 'Blockchain Developer',
    avatar: '/speakers/eduardorfs.png',
    twitterUrl: 'https://twitter.com/TheEduardoRFS',
    githubUrl: 'https://github.com/eduardorfs'
  }
]

const partners: PartnerCardProps[] = [
  {
    name: '42 São Paulo',
    image: '/partners/42sp.png',
    to: 'https://www.42sp.org.br/'
  },
  {
    name: 'Codigo Falado',
    image: '/partners/codigofalado.png',
    to: 'https://br.dev'
  },
  {
    name: 'PHPSP',
    image: '/partners/phpsp.png',
    to: 'https://phpsp.org.br/'
  },
  {
    name: 'Breno Mazieiro',
    image: '/partners/breno-mazieiro.png',
    to: 'https://www.linkedin.com/in/breno-mazieiro'
  },
  {
    name: 'Microsoft',
    image: '/partners/microsoft.svg',
    to: 'https://aka.ms/he4rt'
  }
]

// TODO: Create automatic status

const timeline: TimelineItemProps[] = [
  {
    date: '14:00 • 03/12/2022',
    title: 'Networking',
    status: 'Aguardando'
  },
  {
    date: '14:45 • 03/12/2022',
    title: 'Início da Transmissão',
    status: 'Aguardando'
  },
  {
    date: '15:00 • 03/12/2022',
    title: 'Introdução do Evento',
    status: 'Aguardando'
  },
  {
    date: '15:30 • 03/12/2022',
    title: 'Acessibilidade na Web #PraCegoVer – Monica Craveiro',
    status: 'Aguardando'
  },
  {
    date: '16:00 • 03/12/2022',
    title: 'Object Calisthenics aplicados no PHP – Rafael Neris',
    status: 'Aguardando'
  },
  {
    date: '16:45 • 03/12/2022',
    title: 'Coffee Break',
    status: 'Aguardando'
  },
  {
    date: '17:15 • 03/12/2022',
    title: 'Entrevistas com Membros da He4rt',
    status: 'Aguardando'
  },
  {
    date: '18:15 • 03/12/2022',
    title: 'Por que Rust é melhor que C – Eduardo RFS',
    status: 'Aguardando'
  },
  {
    date: '18:35 • 03/12/2022',
    title: 'Finalização',
    status: 'Aguardando'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>He4rt Meetup - Primeiro evento presencial</title>
        <meta
          name="title"
          content="He4rt  Meetup - Primeiro evento presencial"
        />
        <meta
          name="description"
          content="Participe do primeiro evento presencial da He4rt Developers, que reúne os nosso membros presencialmente e virtualmente pra troca de conhecimentos, networking e unir cada vez mais nossa comunidade."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetup.heartdevs.com/" />
        <meta
          property="og:title"
          content="He4rt  Meetup - Primeiro evento presencial"
        />
        <meta
          property="og:description"
          content="Participe do primeiro evento presencial da He4rt Developers, que reúne os nosso membros presencialmente e virtualmente pra troca de conhecimentos, networking e unir cada vez mais nossa comunidade."
        />
        <meta
          property="og:image"
          content="https://meetup.heartdevs.com/background-meetup.png"
        />

        <meta name="twitter:url" content="https://meetup.heartdevs.com/" />
        <meta
          name="twitter:title"
          content="He4rt  Meetup - Primeiro evento presencial"
        />
        <meta
          name="twitter:description"
          content="Participe do primeiro evento presencial da He4rt Developers, que reúne os nosso membros presencialmente e virtualmente pra troca de conhecimentos, networking e unir cada vez mais nossa comunidade."
        />
        <meta name="twitter:creator" content="@He4rtDevs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@He4rtDevs" />
        <meta name="twitter:creator" content="@He4rtDevs" />
        <meta property="og:url" content="https://meetup.heartdevs.com" />
        <meta property="og:title" content="A Twitter for My Sister" />
        <meta
          property="og:description"
          content="Participe do primeiro evento presencial da He4rt Developers, que reúne os nosso membros presencialmente e virtualmente pra troca de conhecimentos, networking e unir cada vez mais nossa comunidade."
        />
        <meta
          property="og:image"
          content="https://meetup.heartdevs.com/background-meetup.png"
        />
        <meta name="theme-color" content="#782bf1" />
      </Head>
      <a
        href="https://twitter.com/intent/tweet?hashtags=He4rtMeetup2022&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&related=twitterapi%2Ctwitter&text=Já garanti meu ingresso, bora?! 💜&url=https%3A%2F%2Fmeetup.heartdevs.com&via=He4rtDevs"
        className="fixed bg-[#1d9bf0] p-4 rounded-full bottom-5 right-5 shadow-md z-50 hover:scale-110 transition-all delay-100"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1514_2)">
            <path
              d="M15.1003 43.5001C33.2091 43.5001 43.1166 28.4935 43.1166 15.4838C43.1166 15.062 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11072C46.205 9.90932 44.2993 10.4309 42.3478 10.6576C44.4026 9.42594 45.9411 7.49107 46.6781 5.21166C44.7451 6.35724 42.6312 7.16535 40.4269 7.60134C38.9417 6.02324 36.978 4.97835 34.8394 4.62822C32.7008 4.27809 30.5064 4.64222 28.5955 5.66431C26.6846 6.68641 25.1636 8.30953 24.2677 10.2827C23.3718 12.256 23.1509 14.4694 23.6391 16.5807C19.725 16.3843 15.8959 15.3675 12.4 13.5963C8.90405 11.8251 5.81939 9.339 3.34594 6.29916C2.0888 8.46661 1.70411 11.0314 2.27006 13.4723C2.83601 15.9132 4.31013 18.047 6.39281 19.4401C4.82926 19.3905 3.29995 18.9695 1.93125 18.212V18.3338C1.92985 20.6084 2.7162 22.8133 4.15662 24.5737C5.59704 26.334 7.60265 27.5412 9.8325 27.9901C8.38411 28.3864 6.86396 28.4441 5.38969 28.1588C6.01891 30.115 7.24315 31.8259 8.89154 33.0528C10.5399 34.2797 12.5302 34.9613 14.5847 35.0026C11.0968 37.7423 6.78835 39.2284 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.077C4.50571 41.9676 9.74706 43.5029 15.1003 43.5001Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1514_2">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <main
        className="h-screen bg-[#020202] after:absolute after:h-1 after:bottom-0 after:w-full after:bg-gradient-to-r after:from-[#0d0d0d] after:via-[#782bf1] after:to-[#0d0d0d] after:left-0 after:right-0 overflow-hidden"
        style={{
          background: `linear-gradient(
        180deg,
        #0d0d0d 0%,
        rgba(13, 13, 13, 0) 100%
      ),
      linear-gradient(
        75.47deg,
        rgba(13, 13, 13, 0.15) 0%,
        rgba(120, 43, 241, 0.105) 100%
      )`
        }}
      >
        <header className="container mx-auto absolute left-0 right-0 top-10">
          <a href="">
            <Image src="/logo.svg" alt="asdasd" width={245} height={43} />
          </a>
        </header>
        <div className="container mx-auto flex items-center h-full relative">
          <div className="max-w-2xl z-20">
            <h4 className="text-[#8D3FFF] font-bold pl-4 relative before:absolute before:left-0 before:content-[''] before:block before:bg-[#8D3FFF] before:h-full before:w-[5px] text-xl">
              #1 He4rt Meetup
            </h4>
            <h1 className="font-bold text-white text-3xl md:text-5xl my-5">
              Participe do primeiro evento presencial da He4rt
            </h1>
            <p className="text-[#9B9B9B] text-xl md:text-2xl mb-9">
              O Meetup da He4rt é um evento que reúne os nosso membros
              presencialmente e virtualmente.
            </p>
            <CTA to="https://www.meetup.com/pt-BR/he4rtdevs/events/289615746/">
              Participar
            </CTA>
          </div>
          <div className="absolute -right-44">
            <svg
              width="790"
              height="687"
              viewBox="0 0 790 687"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.35">
                <path
                  d="M442.105 60.78L203.356 299.482L156.181 252.307L156.174 252.301L156.168 252.295C149.789 246.141 144.7 238.778 141.199 230.635C137.697 222.493 135.852 213.735 135.773 204.872C135.693 196.009 137.38 187.219 140.736 179.015C144.091 170.811 149.047 163.358 155.314 157.091C161.581 150.823 169.034 145.867 177.238 142.512C185.442 139.157 194.232 137.47 203.095 137.549C211.958 137.629 220.716 139.473 228.859 142.975C237.001 146.477 244.364 151.566 250.518 157.944L251.225 158.677L251.945 157.957L347.756 62.1933L348.472 61.4773L347.747 60.7701C309.3 23.268 257.624 2.42508 203.917 2.7571C150.209 3.08913 98.7954 24.5694 60.8145 62.544C22.8337 100.519 1.34499 151.929 1.00412 205.636C0.663242 259.344 21.4977 311.023 58.9934 349.477L59.0023 349.486L202.649 493.132L203.356 493.839L204.063 493.132L674.737 22.4571L675.737 21.4573L674.461 20.8477C646.986 7.7197 616.91 0.936701 586.46 1.00045C559.645 0.953736 533.086 6.21136 508.312 16.4707C483.537 26.7302 461.036 41.789 442.105 60.78Z"
                  stroke="url(#paint0_linear_1778_1338)"
                  stroke-width="2"
                />
                <path
                  d="M770.692 117.13L770.083 115.853L769.083 116.854L586.455 299.529L539.28 252.307L538.573 251.599L537.866 252.307L442.102 348.071L441.394 348.778L442.102 349.485L489.277 396.66L298.455 587.481L297.748 588.188L298.455 588.895L394.219 684.707L394.926 685.414L395.634 684.707L730.808 349.532L730.101 348.825L730.808 349.532C760.662 319.668 780.526 281.286 787.669 239.667C794.811 198.049 788.88 155.239 770.692 117.13Z"
                  stroke="url(#paint1_linear_1778_1338)"
                  stroke-width="2"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1778_1338"
                  x1="-7.49997"
                  y1="-19"
                  x2="790"
                  y2="704"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#782BF1" />
                  <stop
                    offset="0.901042"
                    stop-color="#0D0D0D"
                    stop-opacity="0.8"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1778_1338"
                  x1="-7.50013"
                  y1="-19.5001"
                  x2="790"
                  y2="704"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#782BF1" />
                  <stop
                    offset="0.911458"
                    stop-color="#0D0D0D"
                    stop-opacity="0.8"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
      <section className="container mx-auto my-60">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
          O que esperar da He4rt Meetup{' '}
          <span className="text-[#782BF1]">Presencial</span>?
        </h2>
        <p className="text-[#7A787D] text-xl md:text-2xl font-normal">
          O Meetup da He4rt é um evento que reúne os nosso membros
          presencialmente e virtualmente pra trocarmos conhecimentos, fazer
          networking e unir cada vez mais nossa comunidade.
        </p>
        <div className="grid grid-cols-2 gap-11 mt-16">
          {presencialWedo.map((wedo) => (
            <Wedo key={wedo.name} {...wedo} />
          ))}
        </div>
      </section>
      <section className="container mx-auto my-60 mt-20 flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold text-center mb-4">
          Como participar online?
        </h2>
        <p className="text-[#7A787D] text-2xl font-normal text-center">
          Caso você não consiga ir até o evento presencial, teremos uma live AO
          VIVO durante o evento!
        </p>
        <iframe
          src="https://player.twitch.tv/?channel=danielhe4rt&parent=localhost"
          className="w-full h-[400px] lg:w-[700px] lg:h-[350px] mt-16 mb-2"
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
        ></iframe>
        <a
          href="https://twitch.tv/danielhe4rt"
          className="text-[#782bf1] underline text-xs"
        >
          O evento ao vivo será realizado no dia 03/12/2022 em
          twitch.tv/danielhe4rt!
        </a>
      </section>
      <section className="container mx-auto my-60 max-w-6xl">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 text-center">
          Palestrantes do evento
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-16">
          {speakers.map((speaker) => (
            <SpreakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </section>
      <section className="container mx-auto my-60">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-4">
          Fique por dentro da programação do evento
        </h2>
        <p className="text-[#7A787D] text-xl md:text-2xl font-normal text-center">
          Conteúdos e palestras sobre as mais modernas tecnologias, desde o
          back-end, até o front-end.
        </p>
        <div className="flex flex-col mt-16 gap-6">
          {timeline.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="container mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-16">
        <div className="w-full max-w-2xl">
          <iframe
            style={{ filter: 'invert(90%)' }}
            className="w-full h-[400px] md:w-[350px] lg:w-[700px] lg:h-[350px]"
            src="https://maps.google.com/maps?q=42%20S%C3%A3o%20Paulo&t=&z=17&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Informações sobre o evento
          </h2>
          <p className="text-[#C6C6C6] mb-1 text-xl">
            <strong>Endereço:</strong> R. Aspicuelta, 422 - Vila Madalena, São
            Paulo - SP, 05416-011
          </p>
          <p className="text-[#C6C6C6] text-xl mb-8">
            <strong>Horário:</strong> Sábado (3/12) - 14:00 até 19:00
          </p>
          <CTA to="https://www.meetup.com/pt-BR/he4rtdevs/events/289615746/">
            Garantir meu ingresso
          </CTA>
        </div>
      </section>
      <section className="container mx-auto my-60">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-4">
          Nossos parceiros & patrocinadores
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          {partners.map((speaker) => (
            <PartnerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
