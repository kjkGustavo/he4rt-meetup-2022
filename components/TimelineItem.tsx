export type TimelineItemProps = {
  date: string
  title: string
  status: string // TODO: Status enum and colors
}

const TimelineItem = ({ date, title, status }: TimelineItemProps) => (
  <div className="text-white border-b-2 border-[#181818] pb-5 flex justify-between items-end">
    <div>
      <span className="flex items-center gap-1 md:gap-3 font-bold text-[#8C8B8E] text-base md:text-lg">
        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5156 8V12L15.5156 15M21.5156 12C21.5156 16.9706 17.4862 21 12.5156 21C7.54506 21 3.51562 16.9706 3.51562 12C3.51562 7.02944 7.54506 3 12.5156 3C17.4862 3 21.5156 7.02944 21.5156 12Z"
              stroke="#8C8B8E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {date}
      </span>
      <h4 className="text-white font-bold text-xl md:text-2xl mt-2 md:mt-4">
        {title}
      </h4>
    </div>
    <span className="text-yellow-400 flex items-center gap-1 md:gap-3 text-base font-semibold">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-yellow-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
        />
      </svg>
      {status}
    </span>
  </div>
)

export default TimelineItem
