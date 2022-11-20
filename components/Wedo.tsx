export type WedoProps = {
  name: string
  description: string
}

const Wedo = ({ name, description }: WedoProps) => (
  <div className="flex gap-6">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="min-w-[32px]"
    >
      <rect width="32" height="32" rx="8" fill="#782BF1" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.80591 10.2059C9.68043 8.33139 12.7196 8.33139 14.5941 10.2059L16 11.6118L17.4059 10.2059C19.2804 8.33139 22.3196 8.33139 24.1941 10.2059C26.0687 12.0804 26.0687 15.1196 24.1941 16.9941L16 25.1883L7.80591 16.9941C5.9314 15.1196 5.9314 12.0804 7.80591 10.2059Z"
        fill="white"
      />
    </svg>

    <div>
      <span className="text-white font-bold text-lg">{name}</span>
      <p className="font-normal text-[#6d6b70]">{description}</p>
    </div>
  </div>
)

export default Wedo
