import CTA from './CTA'

const CommunitySponsor = () => (
  <section
    className="overflow-hidden relative -bottom-20 mx-8 md:mx-32 rounded-md px-16 md:px-24"
    style={{
      backgroundImage: 'url(/sponsor-bg.png)',
      backgroundSize: '130%'
    }}
  >
    <div className="container mx-auto py-16 flex flex-wrap lg:justify-between lg:items-center">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl text-white font-medium mb-5">
          Venha fazer parte da{' '}
          <span className="text-[#782BF1] font-bold">He4rt Devs</span>
        </h1>
        <p className="text-base md:text-xl text-[#9B9B9B] mb-8">
          Aqui é o lugar aonde mentes extraordinárias se encontram com o
          objetivo de alcançar milhares de pessoas com o poder da tecnologia.
          Aqui mais do que participar, você vai contribuir.
        </p>
      </div>
      <CTA to="https://heartdevs.com">Conhecer</CTA>
      <div
        className="w-[300px] h-[300px] absolute -left-16 -bottom-24 opacity-40"
        style={{ background: '#782BF1', filter: 'blur(100px)' }}
      ></div>
      <div
        className="w-[300px] h-[300px] absolute -right-16 -top-24 opacity-40"
        style={{ background: '#782BF1', filter: 'blur(100px)' }}
      ></div>
    </div>
  </section>
)

export default CommunitySponsor
