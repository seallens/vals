const DEFAULT_TITLE = "" 
const DEFAULT_MESSAGE = ""
const DEFAULT_SIGN_OFF = ""

/**
 * Card body: title, message, sign-off. All props optional.
 */
export default function CardContent({
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE,
  signOff = DEFAULT_SIGN_OFF,
}) {
  return (
    <div className="px-4 pt-[72px] pb-6 text-center sm:px-6 sm:pt-[100px] sm:pb-7">
      <h1 className="mb-3 font-serif text-[clamp(1.5rem,5vw,2rem)] font-semibold tracking-wide text-neon-magenta [text-shadow:0_0_20px_rgba(199,125,255,0.6)]">
        Happy Valentine's Day My Love
      </h1>
      <p className="font-serif text-[clamp(1rem,3.5vw,1.25rem)] italic leading-relaxed text-[rgba(224,170,255,0.95)]">
        <br />Dear Tunteiya, <br />Thank you for being there for me through everything. Even at my lowest, I've always had you and I am grateful to you for that. <br /><br />On this day of love, I want to remind you that I love you soo sooo sooooo much and I always will. Till an eternity with you my love. I know this is nothing and I don't have much to give at the moment but I promise to make it up to you soon. <br /><br />I hope we continue to stay together and grow to become the best versions of ourselves and share more good memories together.
      </p>
      <p className="mt-4 font-serif text-base text-neon-purple sm:mt-5 sm:text-lg [text-shadow:0_0_12px_rgba(199,125,255,0.5)]">
        With love, <br />Allen💜
      </p>
    </div>
  )
}
